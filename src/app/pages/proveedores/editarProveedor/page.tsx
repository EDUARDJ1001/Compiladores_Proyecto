"use client"

import React, { useState, useEffect } from 'react';
import HeaderProveedor from '@/app/components/headerProveedores/page';

const EditarProveedor: React.FC = () => {
  const [proveedorId, setProveedorId] = useState('');
  const [nombreProveedor, setNombreProveedor] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (proveedorId) {
      fetchProveedor(proveedorId);
    }
  }, [proveedorId]);

  const fetchProveedor = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/proveedores/${id}`);
      if (response.ok) {
        const data = await response.json();
        setNombreProveedor(data.nombre_proveedor);
        setDireccion(data.direccion);
        setTelefono(data.telefono);
      } else {
        console.error('Error al obtener el proveedor');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/proveedores/${proveedorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre_proveedor: nombreProveedor,
          direccion: direccion,
          telefono: telefono,
        }),
      });

      if (response.ok) {
        console.log('Proveedor actualizado con éxito');
        setError('');
      } else {
        console.error('Error al actualizar proveedor');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  return (
    <div>
      <HeaderProveedor />
      <div className="container px-6 mx-auto mt-16">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl text-gray-800 font-bold">Editar Proveedor</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Modifica los campos para actualizar el proveedor.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-gray-100 p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Información del Proveedor
              </h2>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="proveedorId" className="text-gray-500 mb-2">
                    ID del Proveedor
                  </label>
                  <input
                    type="text"
                    id="proveedorId"
                    value={proveedorId}
                    onChange={(e) => setProveedorId(e.target.value)}
                    placeholder="Ingresa el ID del proveedor"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="nombreProveedor" className="text-gray-500 mb-2">
                    Nombre del Proveedor
                  </label>
                  <input
                    type="text"
                    id="nombreProveedor"
                    value={nombreProveedor}
                    onChange={(e) => setNombreProveedor(e.target.value)}
                    placeholder="Escribe el nombre del proveedor"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="direccion" className="text-gray-500 mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    placeholder="Escribe la dirección del proveedor"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="telefono" className="text-gray-500 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Escribe el teléfono del proveedor"
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
                      <div className="font-bold">Actualizar Proveedor</div>
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

export default EditarProveedor;
