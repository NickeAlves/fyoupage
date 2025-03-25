"use client";

import { useState } from "react";

export default function Home() {
  const [show50Cent, setShow50Cent] = useState(false);

  const handleClick = () => {
    setShow50Cent(true);
  };

  if (show50Cent) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <img
          src="50-cent.jpg"
          alt="50 Cent"
          className="max-w-full max-h-screen object-contain p-4"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <main className="flex flex-col gap-12 items-center p-4">
        <img
          className="h-64 w-64 object-contain"
          src="chill-guy.png"
          alt="chill-guy"
        />
        <div className="rounded-full bg-red-500 text-white w-40 h-40 md:w-60 md:h-40 flex justify-center items-center hover:bg-red-300 transition-colors hover:scale-95 transition-transform">
          <button
            className="font-bold text-xl md:text-3xl items-center justify-center"
            onClick={handleClick}
          >
            Click here
          </button>
        </div>
      </main>
    </div>
  );
}
