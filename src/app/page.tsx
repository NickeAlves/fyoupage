"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [show50Cent, setShow50Cent] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/chill-guy-music");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const enableAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setAudioReady(true))
        .catch((e) => console.error("Falha ao reproduzir:", e));
    }
  };

  const toggleView = () => {
    if (!audioReady) enableAudio();
    setShow50Cent(!show50Cent);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full p-6">
      {!audioReady && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
          <button
            onClick={enableAudio}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all animate-pulse"
          >
            ATIVAR ÁUDIO
          </button>
          <p className="text-white mt-4 text-center">
            Clique para habilitar a experiência sonora
          </p>
        </div>
      )}

      {show50Cent ? (
        <>
          <img
            src="/g92vw.jpg"
            alt="50 Cent View"
            className="max-w-full max-h-[70vh] object-contain p-4"
          />
          <button
            className="mt-8 rounded-full bg-red-500 text-white w-32 h-24 flex justify-center items-center hover:bg-red-300 transition-all hover:scale-95"
            onClick={toggleView}
          >
            <span className="font-bold text-xl">Voltar</span>
          </button>
        </>
      ) : (
        <main className="flex flex-col gap-8 items-center w-full px-4">
          <img
            className="h-64 w-64 object-contain"
            src="/chill-guy.png"
            alt="Chill View"
          />
          <p className="font-bold text-center text-xl sm:text-2xl md:text-3xl px-4">
            ❤️ Uma pessoa muito especial te enviou um presente 🎁
          </p>
          <button
            className="mt-4 rounded-full bg-red-500 text-white w-40 h-40 md:w-60 md:h-40 flex justify-center items-center hover:bg-red-300 transition-all hover:scale-95"
            onClick={toggleView}
          >
            <span className="font-bold text-xl md:text-3xl">Clique aqui</span>
          </button>
        </main>
      )}
    </div>
  );
}
