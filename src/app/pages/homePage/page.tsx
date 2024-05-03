import React from 'react';
import { MdOutlineInventory } from 'react-icons/md';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="container px-6 mx-auto">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/inv-home.jpg" // Ruta de la imagen en la carpeta public
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mb-8">
              <MdOutlineInventory size={64} />
            </div>
            <h1 className="text-5xl text-gray-800 font-bold mb-4">Sistema de Gestión de Inventario</h1>
            <p className="text-1xl text-gray-500 mb-8">Mantenga un mejor control sobre sus productos.</p>
            <a href="/pages/login" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg">
              ¡Identificate!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
