import { Play, ChevronLeft, SkipBack, SkipForward, Pause } from "lucide-react";
import { useState, useRef } from "react";
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
      setTimeout(playAudio, 100);
    }
  };

  const playPreviousSong = () => {
    if (songIndex > 0) {
      setSongIndex((prev) => prev - 1);
      setIsPlaying(false);
      setCurrentTime(0);
      setTimeout(playAudio, 100);
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
    <div className="bg-white/10 rounded-lg h-[96%] w-[90%] absolute backdrop-blur-lg">
      <div className="flex justify-center relative h-full">
        <div className="absolute left-0">
          <ChevronLeft
            size={50}
            color="#ffff"
            onClick={() => {
              setActivo(false);
            }}
          />
        </div>
        <div className="flex flex-col h-full w-full items-center">
          <div className="flex mt-5 items-center flex-col">
            <p className="text-white font-bold text-xl">
              {cancionActual?.titulo}
            </p>
            <br />
            <p className="text-gray-200 font-bold text-center p-3">
              {cancionActual?.artista}
            </p>
          </div>
          <div
            className="bg-cover rounded-lg h-50 w-50 shadow-lg mt-5"
            style={{
              backgroundImage: `url("${cancionActual?.imagen}")`,
            }}
          />
          <div className="bg-white/10 rounded-lg h-70 w-[90%] backdrop-blur-lg mt-10 overflow-auto">
            <pre className="text-gray-200 font-black text-sm text-center p-2">
              {cancionActual?.letra}
            </pre>
          </div>
          <Slider2
            currentTime={currentTime}
            duration={duration}
            onTimeChange={handleSliderChange}
          />
          <div className="flex mt-5">
            <SkipBack
              color="#ffff"
              size={50}
              className="mr-4 cursor-pointer"
              onClick={playPreviousSong}
            />
            <div onClick={togglePlay} className="cursor-pointer mr-4">
              {isPlaying ? (
                <Pause color="#ffff" size={50} />
              ) : (
                <Play color="#ffff" size={50} />
              )}
            </div>
            <SkipForward
              color="#ffff"
              size={50}
              className="cursor-pointer"
              onClick={playNextSong}
            />
            <audio
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
