import React from "react";

interface ModelImagesProps {
  showSecondImage: boolean;
}

export default function ModelImages({ showSecondImage }: ModelImagesProps) {
  return (
    <>
      {/* Model Image Set 1 (Initial state) */}
      <div 
        className={`absolute inset-0 flex justify-center items-end pointer-events-none z-12 select-none transition-all duration-[1100ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          !showSecondImage 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-12 pointer-events-none"
        }`}
      >
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
      <div 
        className={`absolute inset-0 flex justify-center items-end pointer-events-none z-12 select-none transition-all duration-[1100ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          showSecondImage 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-12 pointer-events-none"
        }`}
      >
        <div className="relative w-full h-full flex items-end justify-center">
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
    </>
  );
}
