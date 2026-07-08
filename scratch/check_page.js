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

    const testPoints = [
      {name: "transition_1_20", t: 1.20}, // Text section active
      {name: "transition_1_75", t: 1.75}, // Video section sliding up over text section
      {name: "transition_2_10", t: 2.10}, // Video 0 morphed to fullscreen
      {name: "transition_2_48", t: 2.48}, // Video 0 texts (left & right)
      {name: "transition_2_82", t: 2.82}, // Video 1 circle visible on top of Video 0
      {name: "transition_3_10", t: 3.10}, // Video 1 morphed to fullscreen
      {name: "transition_3_44", t: 3.44}, // Video 1 texts (left & right)
      {name: "transition_3_78", t: 3.78}, // Video 2 circle visible on top of Video 1
      {name: "transition_4_05", t: 4.05}, // Video 2 morphed to fullscreen
      {name: "transition_4_40", t: 4.40}, // Video 2 texts (left & right)
      {name: "transition_4_80", t: 4.80}, // Slide-left curtain transition in progress
      {name: "transition_5_05", t: 5.05}  // ListedSection active (project 0)
    ];
    
    for (let i = 0; i < testPoints.length; i++) {
      const point = testPoints[i];
      console.log(`Scrolling to ${point.name} at time ${point.t}...`);
      await page.evaluate((t) => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScroll = (t / 6.21) * scrollHeight;
        window.scrollTo(0, targetScroll);
      }, point.t);
      
      await new Promise(r => setTimeout(r, 1200));
      
      if (point.name === "transition_2_82") {
        const details = await page.evaluate(() => {
          const getDetails = (selector) => {
            const el = document.querySelector(selector);
            if (!el) return `${selector} not found`;
            const rect = el.getBoundingClientRect();
            const style = window.getComputedStyle(el);
            return {
              opacity: style.opacity,
              display: style.display,
              transform: style.transform,
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            };
          };
          return {
            videoCard0: getDetails('.video-card-0'),
            videoCard1: getDetails('.video-card-1')
          };
        });
        console.log('DOM Details at 2.82:', JSON.stringify(details, null, 2));
      }

      await page.screenshot({ path: `scratch/${point.name}_screenshot.png` });
      console.log(`Saved ${point.name}_screenshot.png`);
    }

  } catch (error) {
    console.error('Error during check:', error);
  } finally {
    await browser.close();
  }
})();
