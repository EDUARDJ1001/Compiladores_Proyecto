import React from 'react';
import { MdOutlineInventory } from 'react-icons/md';
import Image from 'next/image';
import Header from '@/app/components/header/page';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="relative h-screen">
                <Image
                    src="/images/inv-home.jpg" // Ruta de la imagen en la carpeta public
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="absolute inset-0 z-0 opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="flex justify-center items-center flex-col">
                        <div className="flex justify-center items-center mb-8">
                            <MdOutlineInventory size={64} />
                        </div>
                        <h1 className="text-5xl text-gray-800 font-bold mb-4">¡Bienvenido!</h1>
                        <p className="text-1xl text-gray-500 mb-8">Mantenga un mejor control sobre sus productos.</p>
                        <div className="flex">
                            <a href="/pages/productos/inventario" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                                Gestionar Productos
                            </a>
                            <a href="/pages/proveedores/gestionProveedores" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                                Gestionar Proveedores
                            </a>
                            <a href="/pages/categorias/gestionCategorias" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                                Gestionar Categorias
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;