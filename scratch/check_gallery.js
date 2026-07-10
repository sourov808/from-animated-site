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

    const timelineTotal = 5.36; // target total scroll time
    const testPoints = [
      { name: "gallery_init", t: 3.10 },
      { name: "gallery_entrance_start", t: 3.32 },
      { name: "gallery_fanning", t: 3.65 },
      { name: "gallery_full", t: 3.95 },
      { name: "gallery_exit", t: 4.18 }
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
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            zIndex: style.zIndex
          };
        };
        
        return {
          gallerySection: getDetails('.gallery-section-el'),
          galleryBg: getDetails('.gallery-bg-container'),
          tlCard: getDetails('.gallery-supported-card.corner-tl'),
          brCard: getDetails('.gallery-supported-card.corner-br'),
          stackCard0: getDetails('.stack-card-0'),
          stackCard4: getDetails('.stack-card-4')
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
