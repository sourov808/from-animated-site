export default function ModelImages() {
  return (
    <div className="absolute inset-0 z-12 pointer-events-none select-none">
      {/* Model Image Set 1 (Initial state) */}
      <div className="hero-image-set-1 absolute inset-0 flex justify-center items-end opacity-100">
        <div className="relative w-full h-full flex items-end justify-center">
          {/* Left Color Image (Clipped to the left half) */}
          <div className="absolute inset-y-0 left-0 right-1/2 overflow-hidden flex items-end justify-end">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92vh] w-auto aspect-[3/4] flex items-end justify-center">
              <img
                src="/model_transparent.png"
                alt="FROM model color"
                className="h-full w-auto object-contain max-h-[85vh] select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Grayscale Image (Clipped to the right half) */}
          <div className="absolute inset-y-0 left-1/2 right-0 overflow-hidden flex items-end justify-start">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92vh] w-auto aspect-[3/4] flex items-end justify-center">
              <img
                src="/model_stool_transparent.png"
                alt="FROM model grayscale"
                className="h-full w-auto object-contain max-h-[85vh] filter grayscale contrast-[1.25] brightness-[0.9] select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Model Image Set 2 (Scrolled state) */}
      <div className="hero-image-set-2 absolute inset-0 flex justify-center items-end opacity-0">
        <div className="hero-model-container relative w-full h-full flex items-end justify-center origin-bottom">
          {/* Left Image (Clipped to left half) */}
          <div className="absolute inset-y-0 left-0 right-1/2 overflow-hidden flex items-end justify-end">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92vh] w-auto aspect-[3/4] flex items-end justify-center">
              <img
                src="/model2_light_transparent.png"
                alt="FROM second model light"
                className="h-full w-auto object-contain max-h-[85vh] select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Image (Clipped to right half) */}
          <div className="absolute inset-y-0 left-1/2 right-0 overflow-hidden flex items-end justify-start">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92vh] w-auto aspect-[3/4] flex items-end justify-center">
              <img
                src="/model2_dark_transparent.png"
                alt="FROM second model dark"
                className="h-full w-auto object-contain max-h-[85vh] filter grayscale contrast-[1.25] brightness-[0.9] select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
