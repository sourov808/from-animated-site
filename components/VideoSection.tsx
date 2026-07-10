"use client";

export default function VideoSection() {
  return (
    <section
      className="video-section-el absolute inset-0 w-full h-screen z-31 pointer-events-none flex flex-col justify-center items-center overflow-hidden bg-[#050505]"
      style={{
        opacity: 0,
        display: "none",
        willChange: "transform, opacity",
      }}
    >
      {/* 1. Cinematic grid background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_75%)] z-0 pointer-events-none" />
      
      {/* 2. Technical Camera Overlay Frame */}
      <div className="camera-overlay-frame absolute inset-8 border border-white/[0.04] pointer-events-none z-20 flex flex-col justify-between p-4">
        {/* Center crosshairs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-8 h-8 flex justify-center items-center">
          <div className="absolute w-4 h-[1px] bg-white/20" />
          <div className="absolute h-4 w-[1px] bg-white/20" />
        </div>
      </div>

      {/* 3. Sequential Circular Video Cards (Layered by z-index) */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none flex items-center justify-center">
        
        {/* Video Card 0 (video1.mp4) */}
        <div 
          className="video-card-0 absolute w-screen h-screen bg-neutral-950 overflow-hidden will-change-[clip-path] z-10 flex items-center justify-center pointer-events-auto"
          style={{ clipPath: 'circle(15vw at 50% 50%)' }}
        >
          <video
            src="/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video-el-0 w-screen h-screen object-cover brightness-90 absolute left-1/2 top-1/2 max-w-none max-h-none pointer-events-none"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>

        {/* Video Card 1 (video2.mp4) */}
        <div 
          className="video-card-1 absolute w-screen h-screen bg-neutral-950 overflow-hidden will-change-[clip-path] z-11 flex items-center justify-center pointer-events-auto"
          style={{ clipPath: 'circle(15vw at 50% 50%)', display: 'none', opacity: 0 }}
        >
          <video
            src="/video2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video-el-1 w-screen h-screen object-cover brightness-90 absolute left-1/2 top-1/2 max-w-none max-h-none pointer-events-none"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>

        {/* Video Card 2 (video3.mp4) */}
        <div 
          className="video-card-2 absolute w-screen h-screen bg-neutral-950 overflow-hidden shadow-[0_45px_100px_rgba(0,0,0,0.95)] will-change-transform z-12 flex items-center justify-center pointer-events-auto"
          style={{ display: 'none' }}
        >
          <video
            src="/video3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video-el-2 w-screen h-screen object-cover brightness-90 absolute left-1/2 top-1/2 max-w-none max-h-none pointer-events-none"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>

      </div>

      {/* 4. Split Cinematic Text Overlays */}
      {/* Video 0 Texts */}
      <div className="video-text-overlay-0 absolute inset-0 z-30 pointer-events-none flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-16">
        <div className="video-text-left-0 font-playfair font-bold italic text-2xl md:text-4xl lg:text-5xl text-white max-w-[85vw] md:max-w-[42%] text-left opacity-0 translate-x-[-30px] leading-snug self-start md:self-center mt-20 md:mt-0">
          Every frame is a dialogue<br />
          between stark geometry,<br />
          shaping the silent form<br />
          within a fleeting moment.
        </div>
        <div className="video-text-right-0 font-playfair font-bold italic text-2xl md:text-4xl lg:text-5xl text-white max-w-[85vw] md:max-w-[42%] text-right opacity-0 translate-x-[30px] leading-snug self-end md:self-end mb-16 md:mb-24">
          and human vulnerability,<br />
          capturing the raw motion<br />
          of an unspoken narrative.
        </div>
      </div>

      {/* Video 1 Texts */}
      <div className="video-text-overlay-1 absolute inset-0 z-30 pointer-events-none flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-16">
        <div className="video-text-left-1 font-playfair font-bold italic text-2xl md:text-4xl lg:text-5xl text-white max-w-[85vw] md:max-w-[42%] text-left opacity-0 translate-x-[-30px] leading-snug self-start md:self-center mt-20 md:mt-0">
          A quiet dance of light,<br />
          refracting through shadow<br />
          to sketch the outline<br />
          of a forgotten memory.
        </div>
        <div className="video-text-right-1 font-playfair font-bold italic text-2xl md:text-4xl lg:text-5xl text-white max-w-[85vw] md:max-w-[42%] text-right opacity-0 translate-x-[30px] leading-snug self-end md:self-end mb-16 md:mb-24">
          revealing the unseen depth,<br />
          etched into the structure<br />
          of the passing space.
        </div>
      </div>

      {/* Video 2 Texts */}
      <div className="video-text-overlay-2 absolute inset-0 z-30 pointer-events-none flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-16">
        <div className="video-text-left-2 font-playfair font-bold italic text-2xl md:text-4xl lg:text-5xl text-white max-w-[85vw] md:max-w-[42%] text-left opacity-0 translate-x-[-30px] leading-snug self-start md:self-center mt-20 md:mt-0">
          The sharp intersection<br />
          of couture and structure,<br />
          redefining the boundaries<br />
          of the physical frame.
        </div>
        <div className="video-text-right-2 font-playfair font-bold italic text-2xl md:text-4xl lg:text-5xl text-white max-w-[85vw] md:max-w-[42%] text-right opacity-0 translate-x-[30px] leading-snug self-end md:self-end mb-16 md:mb-24">
          where design becomes<br />
          an architectural statement<br />
          standing against time.
        </div>
      </div>

    </section>
  );
}
