import { useState, useRef, useEffect } from "react";

const Slider2 = ({ currentTime = 0, duration = 0, onTimeChange }) => {
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);

  // Actualiza el progreso cuando cambia el tiempo actual
  useEffect(() => {
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  const handleClick = (e) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    // Calcula el porcentaje de progreso basado en la posición del clic
    const newProgress = Math.min(Math.max((x / width) * 100, 0), 100);
    setProgress(newProgress);

    // Notifica al componente padre del cambio de tiempo
    if (onTimeChange) {
      onTimeChange(newProgress);
    }
  };

  return (
    <div
      ref={sliderRef}
      onClick={handleClick}
      className="bg-gray-500 w-[90%] h-5 mt-5 relative cursor-pointer"
    >
      <div
        className="bg-black h-5 absolute left-0 top-0 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default Slider2;
