import React from 'react';
import { MdOutlineInventory } from 'react-icons/md';
import Image from 'next/image';
import HeaderDash from '@/app/components/headerDashboards/page';

const GestionCategorias: React.FC = () => {
  return (
    <div>
      <HeaderDash />
      <div className="relative h-screen">
        <Image
          src="/images/inv-cat.jpg" // Ruta de la imagen en la carpeta public
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-25"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mb-8">
              <MdOutlineInventory size={64} />
            </div>
            <h1 className="text-5xl text-gray-800 font-bold mb-4">¡Bienvenido a Gestion de Categorias!</h1>
            <p className="text-1xl text-gray-500 mb-8">Aqui puedes gestionar tus categorias.</p>
            <div className="flex">
              <a href="/pages/categorias/listarCategorias" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Listar Categorias
              </a>
              <a href="/pages/categorias/agregarCategoria" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Agregar Categoria
              </a>
              <a href="/pages/categorias/editarCategoria" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Editar Categoria
              </a>
              <a href="/pages/categorias/eliminarCategoria" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg">
                Eliminar Categoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionCategorias;
