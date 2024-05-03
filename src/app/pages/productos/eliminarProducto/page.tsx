"use client"

import React, { useState } from 'react';
import HeaderProd from '@/app/components/headerProductos/page';

const EliminarProducto: React.FC = () => {
  const [productId, setProductId] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');
    try {
      const response = await fetch(`http://localhost:4000/productos/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSuccessMessage('Producto eliminado con éxito');
        setProductId('');
      } else if (response.status === 404) {
        setError('El producto no existe');
      } else {
        setError('Error al eliminar el producto');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setError('Error de conexión');
    }
  };

  return (
    <div>
      <HeaderProd />
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl text-gray-800 font-bold">Eliminar Producto</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Ingresa el ID del producto que deseas eliminar.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Eliminar Producto por ID
              </h2>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="productId" className="text-gray-500 mb-2">
                    ID del Producto
                  </label>
                  <input
                    type="text"
                    id="productId"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="Ingresa el ID del producto"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                {successMessage && <div className="text-green-500 mb-2">{successMessage}</div>}
                <div className="flex flex-col w-full my-5">
                  <button
                    type="submit"
                    className="w-full py-4 bg-red-600 rounded-lg text-red-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="font-bold">Eliminar Producto</div>
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

export default EliminarProducto;
