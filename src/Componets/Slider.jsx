import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const TouchSlider = ({ value = 0, onChange }) => {
  const [sliderValue, setSliderValue] = useState(value);
  const containerRef = useRef(null);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  const calculatePercentage = useCallback((clientX) => {
    if (!containerRef.current) return 0;

    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - containerRect.left;
    const containerWidth = containerRect.width;

    return Math.max(0, Math.min(100, (relativeX / containerWidth) * 100));
  }, []);

  const handleTouchStart = (e) => {
    const percentage = calculatePercentage(e.touches[0].clientX);
    setSliderValue(percentage);
    onChange?.(percentage);
  };

  const handleTouchMove = (e) => {
    const percentage = calculatePercentage(e.touches[0].clientX);
    setSliderValue(percentage);
    onChange?.(percentage);
    e.preventDefault();
  };

  const handleMouseDown = (e) => {
    const percentage = calculatePercentage(e.clientX);
    setSliderValue(percentage);
    onChange?.(percentage);

    const handleMouseMove = (moveEvent) => {
      const newPercentage = calculatePercentage(moveEvent.clientX);
      setSliderValue(newPercentage);
      onChange?.(newPercentage);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-md mx-auto p-4 rounded-lg select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={(e) => e.preventDefault()}
      onMouseDown={handleMouseDown}
    >
      <div className="relative w-full h-5 bg-gray-500 rounded-full">
        <motion.div
          className="absolute left-0 top-0 h-full bg-black rounded-full"
          style={{
            width: `${sliderValue}%`,
            touchAction: "none",
          }}
        />
        <motion.div
          className="absolute w-7 h-7 bg-white shadow-lg rounded-full -top-1"
          style={{
            left: `${sliderValue}%`,
            transform: "translateX(-50%)",
            touchAction: "none",
          }}
        />
      </div>
    </div>
  );
};

export default TouchSlider;
