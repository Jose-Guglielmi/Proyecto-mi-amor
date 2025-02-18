import { Play, ChevronLeft, SkipBack, SkipForward, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Slider2 from "./Slider2";

export const Reproductor = ({
  canciones = [],
  setActivo,
  initialSongIndex = 0,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [songIndex, setSongIndex] = useState(initialSongIndex);
  const audioRef = useRef(null);

  // Sincroniza el índice cuando cambia la prop
  useEffect(() => {
    setSongIndex(initialSongIndex);
  }, [initialSongIndex]);

  // Efecto para reproducir automáticamente cuando se monta el componente o cambia la canción
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error al reproducir:", error);
          setIsPlaying(false);
        });
    }
  }, [songIndex]);

  // Obtener la canción actual
  const cancionActual = canciones[songIndex];

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const playNextSong = () => {
    if (songIndex < canciones.length - 1) {
      setSongIndex((prev) => prev + 1);
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const playPreviousSong = () => {
    if (songIndex > 0) {
      setSongIndex((prev) => prev - 1);
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSliderChange = (percentage) => {
    if (audioRef.current && duration) {
      const newTime = (percentage / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="bg-white/5 rounded-lg h-[97%] fixed inset-0 m-auto backdrop-blur-lg w-[95%] max-w-2xl">
      <div className="flex justify-center relative h-full">
        <div className="absolute left-0">
          <ChevronLeft
            size={50}
            color="#000000"
            onClick={() => {
              setActivo(false);
            }}
          />
        </div>
        <div className="flex flex-col h-full w-full items-center">
          <div className="flex mt-2 items-center flex-col">
            <p className="text-black font-bold text-3xl">
              {cancionActual?.titulo}
            </p>
            <br />
            <p className="text-black font-bold text-2xl text-center ">
              {cancionActual?.artista}
            </p>
          </div>
          <div
            className="bg-cover rounded-lg h-50 w-50 shadow-lg mt-5"
            style={{
              backgroundImage: `url("${cancionActual?.imagen}")`,
            }}
          />
          <div className="bg-black/5 rounded-lg h-70 w-[90%] backdrop-blur-lg mt-10 overflow-auto mb-10">
            <pre className="text-black font-black text-sm text-center p-2 break-words whitespace-pre-wrap">
              {cancionActual?.letra}
            </pre>
          </div>
          <Slider2
            currentTime={currentTime}
            duration={duration}
            onTimeChange={handleSliderChange}
          />
          <div className="flex mt-7">
            <SkipBack
              color="#000000"
              size={50}
              className="mr-4 cursor-pointer"
              onClick={playPreviousSong}
            />
            <div onClick={togglePlay} className="cursor-pointer mr-4">
              {isPlaying ? (
                <Pause color="#000000" size={50} />
              ) : (
                <Play color="#000000" size={50} />
              )}
            </div>
            <SkipForward
              color="#000000"
              size={50}
              className="cursor-pointer"
              onClick={playNextSong}
            />
            <audio
              key={cancionActual?.url}
              ref={audioRef}
              src={cancionActual?.url}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={(e) => setDuration(e.target.duration)}
              onEnded={playNextSong}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
