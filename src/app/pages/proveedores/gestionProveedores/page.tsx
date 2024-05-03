import React from 'react';
import { MdOutlineInventory } from 'react-icons/md';
import Image from 'next/image';
import HeaderDash from '@/app/components/headerDashboards/page';

const GestionProveedores: React.FC = () => {
  return (
    <div>
      <HeaderDash />
      <div className="relative h-screen">
        <Image
          src="/images/img-prov.png" // Ruta de la imagen en la carpeta public
          alt="Background Image"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mb-8">
              <MdOutlineInventory size={64} />
            </div>
            <h1 className="text-5xl text-gray-800 font-bold mb-4">¡Bienvenido a Gestion de Proveedores!</h1>
            <p className="text-1xl text-gray-500 mb-8">Aqui podrá realizar gestión sobre los proveedores</p>
            <div className="flex">
              <a href="/pages/proveedores/listarProveedores" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Listar Proveedores
              </a>
              <a href="/pages/proveedores/agregarProveedor" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Agregar Proveedores
              </a>
              <a href="/pages/proveedores/editarProveedor" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                Editar Proveedores
              </a>
              <a href="/pages/proveedores/eliminarProveedor" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg">
                Eliminar Proveedores
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionProveedores;
