const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/usr/bin/google-chrome",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  try {
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    console.log('Page loaded.');

    const timelineTotal = 5.36; // the end of timeline is around 5.36
    const testPoints = [
      { name: "eb_init", t: 1.5 },       // Video section active, break section display: none
      { name: "eb_opening", t: 2.25 },   // Center band opening (t = 2.25)
      { name: "eb_mid", t: 2.65 },       // Top/bottom bands closed (t = 2.65)
      { name: "eb_still", t: 2.80 }      // Static phase (t = 2.80)
    ];
    
    for (let i = 0; i < testPoints.length; i++) {
      const point = testPoints[i];
      console.log(`\n==================================================`);
      console.log(`Scrolling to ${point.name} at timeline t = ${point.t}...`);
      await page.evaluate((t, total) => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScroll = (t / total) * scrollHeight;
        window.scrollTo(0, targetScroll);
      }, point.t, timelineTotal);
      
      // Wait for ScrollTrigger and JS to catch up
      await new Promise(r => setTimeout(r, 1000));
      
      const details = await page.evaluate(() => {
        const getDetails = (selector) => {
          const el = document.querySelector(selector);
          if (!el) return `${selector} NOT FOUND`;
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);
          return {
            selector,
            opacity: style.opacity,
            display: style.display,
            transform: style.transform,
            backgroundColor: style.backgroundColor,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            zIndex: style.zIndex
          };
        };
        
        return {
          editorialBreakEl: getDetails('.editorial-break-el'),
          ebTopBand: getDetails('.eb-top-band'),
          ebBottomBand: getDetails('.eb-bottom-band'),
          ebCenterBand: getDetails('.eb-center-band'),
          ebBoundaryTextTop: getDetails('.eb-boundary-text-top'),
          ebBoundaryTextBottom: getDetails('.eb-boundary-text-bottom')
        };
      });
      
      console.log(`DOM Details at t = ${point.t}:`, JSON.stringify(details, null, 2));
      
      const screenshotPath = `scratch/${point.name}_screenshot.png`;
      await page.screenshot({ path: screenshotPath });
      console.log(`Saved screenshot to ${screenshotPath}`);
    }

  } catch (error) {
    console.error('Error during check:', error);
  } finally {
    await browser.close();
  }
})();
