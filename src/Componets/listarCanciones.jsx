import { Play } from "lucide-react";
import { Reproductor } from "./Reproductor";
import Canciones from "../assets/Json/canciones.json";
import { useState } from "react";

export const ListarCanciones = () => {
  const [activo, setActivo] = useState(false);
  const [cancionIndex, setCancionIndex] = useState(0);

  return (
    <div className="bg-rose-50 h-screen flex flex-col items-center justify-center">
      <p className="font-extrabold text-4xl text-rose-700 mb-4 text-center">
        Canciones Favoritas
      </p>

      <div className="w-full overflow-auto">
        {Canciones.canciones.map((cancion, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white p-4 rounded-lg shadow-lg mb-4 w-full flex flex-row justify-between items-center cursor-pointer hover:bg-white/20 transition-colors"
            onClick={() => {
              setCancionIndex(index);
              setActivo(true);
            }}
          >
            <div className="flex flex-col">
              <p className="text-rose-800">{cancion.titulo}</p>
              <p className="text-rose-600">{cancion.artista}</p>
            </div>
            <Play color="#ffff" />
          </div>
        ))}
      </div>

      {activo && (
        <Reproductor
          canciones={Canciones.canciones}
          setActivo={setActivo}
          initialSongIndex={cancionIndex}
        />
      )}
    </div>
  );
};
