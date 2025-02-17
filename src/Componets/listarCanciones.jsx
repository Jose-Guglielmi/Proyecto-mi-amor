import { Play } from "lucide-react";
import { Reproductor } from "./Reproductor";
import Canciones from "../assets/Json/canciones.json";
import { useState } from "react";

export const ListarCanciones = () => {
  const [activo, setActivo] = useState(false);
  const [cancionIndex, setCancionIndex] = useState(0);

  return (
    <div className="bg-gray-700 h-screen flex flex-col items-center p-5 relative">
      <p className="font-extrabold text-4xl text-white mb-4">Canciones</p>

      <div className="w-full overflow-auto">
        {Canciones.canciones.map((cancion, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 p-4 rounded-lg shadow-lg mb-4 w-full flex flex-row justify-between items-center cursor-pointer hover:bg-white/20 transition-colors"
            onClick={() => {
              setActivo(true);
              setCancionIndex(index);
            }}
          >
            <div className="flex flex-col">
              <p className="text-white">{cancion.titulo}</p>
              <p className="text-white">{cancion.artista}</p>
            </div>
            <Play color="#ffff" />
          </div>
        ))}
      </div>

      {activo && (
        <Reproductor
          canciones={Canciones.canciones}
          setActivo={setActivo}
          currentSongIndex={cancionIndex}
        />
      )}
    </div>
  );
};
