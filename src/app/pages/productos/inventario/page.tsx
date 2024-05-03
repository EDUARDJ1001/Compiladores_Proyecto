import React from 'react';
import { MdOutlineInventory } from 'react-icons/md';
import Image from 'next/image';
import HeaderDash from '@/app/components/headerDashboards/page';

const GestionInventario: React.FC = () => {
  return (
    <div>
      <HeaderDash />
      <div className="relative h-screen">
        <Image
          src="/images/inv-gest.png" // Ruta de la imagen en la carpeta public
          alt="Background Image"
          layout="fill"
          objectFit="container"
          quality={100}
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mb-8">
              <MdOutlineInventory size={64} />
            </div>
            <h1 className="text-5xl text-gray-800 font-bold mb-4">¡Bienvenido a la Gestion de Productos!</h1>
            <p className="text-1xl text-gray-900 mb-8">Aqui podrá mantener un mejor control sobre sus productos.</p>
            <div className="flex">
              <a href="/pages/productos/listarProductos" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Listar Productos
              </a>
              <a href="/pages/productos/agregarProducto" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Agregar Productos
              </a>
              <a href="/pages/productos/editarProducto" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Editar Productos
              </a>
              <a href="/pages/productos/eliminarProducto" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg">
                Eliminar Productos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionInventario;
