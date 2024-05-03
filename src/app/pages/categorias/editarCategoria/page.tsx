"use client"

import React, { useState, useEffect } from 'react';
import HeaderCategoria from '@/app/components/headerCategorias/page';

const EditarCategoria: React.FC = () => {
  const [categoriaId, setCategoriaId] = useState('');
  const [nombreCategoria, setNombreCategoria] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/categorias/${categoriaId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre_categoria: nombreCategoria,
        }),
      });

      if (response.ok) {
        console.log('Categoría actualizada con éxito');
        setError('');
      } else {
        console.error('Error al actualizar categoría');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  return (
    <div>
      <HeaderCategoria />
      <div className="container px-6 mx-auto mt-16">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl text-gray-800 font-bold">Editar Categoría</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Modifica los campos para actualizar la categoría.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-gray-100 p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Información de la Categoría
              </h2>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="categoriaId" className="text-gray-500 mb-2">
                    ID de la Categoría
                  </label>
                  <input
                    type="text"
                    id="categoriaId"
                    value={categoriaId}
                    onChange={(e) => setCategoriaId(e.target.value)}
                    placeholder="Ingresa el ID de la categoría"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="nombreCategoria" className="text-gray-500 mb-2">
                    Nombre de la Categoría
                  </label>
                  <input
                    type="text"
                    id="nombreCategoria"
                    value={nombreCategoria}
                    onChange={(e) => setNombreCategoria(e.target.value)}
                    placeholder="Escribe el nombre de la categoría"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <div className="flex flex-col w-full my-5">
                  <button
                    type="submit"
                    className="w-full py-4 bg-cyan-600 rounded-lg text-cyan-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="font-bold">Actualizar Categoría</div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarCategoria;
