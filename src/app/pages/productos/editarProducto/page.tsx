"use client"

import React, { useState, useEffect } from 'react';
import HeaderProd from '@/app/components/headerProductos/page';

const EditarProducto: React.FC = () => {
  const [productId, setProductId] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidadStock, setCantidadStock] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [proveedorId, setProveedorId] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (productId) {
      fetchProducto(productId);
    }
  }, [productId]);

  const fetchProducto = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/productos/${id}`);
      if (response.ok) {
        const data = await response.json();
        setNombreProducto(data.nombre_producto);
        setPrecio(data.precio);
        setCantidadStock(data.cantidad_stock);
        setCategoriaId(data.categoria_id.toString());
        setProveedorId(data.proveedor_id.toString());
      } else {
        console.error('Error al obtener el producto');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  const fetchCategorias = async () => {
    try {
      const response = await fetch('http://localhost:4000/categorias');
      if (response.ok) {
        const data = await response.json();
        setCategorias(data);
      } else {
        console.error('Error al obtener las categorías');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  const fetchProveedores = async () => {
    try {
      const response = await fetch('http://localhost:4000/proveedores');
      if (response.ok) {
        const data = await response.json();
        setProveedores(data);
      } else {
        console.error('Error al obtener los proveedores');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/productos/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre_producto: nombreProducto,
          precio: parseFloat(precio),
          cantidad_stock: parseInt(cantidadStock),
          categoria_id: parseInt(categoriaId),
          proveedor_id: parseInt(proveedorId),
        }),
      });

      if (response.ok) {
        console.log('Producto actualizado con éxito');
        setError('');
      } else {
        console.error('Error al actualizar producto');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  return (
    <div>
      <HeaderProd />
      <div className="container px-6 mx-auto mt-16">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl text-gray-800 font-bold">Editar Producto</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Modifica los campos para actualizar el producto.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-gray-100 p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Información del Producto
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
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="nombreProducto" className="text-gray-500 mb-2">
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    id="nombreProducto"
                    value={nombreProducto}
                    onChange={(e) => setNombreProducto(e.target.value)}
                    placeholder="Escribe el nombre del producto"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="precio" className="text-gray-500 mb-2">
                    Precio
                  </label>
                  <input
                    type="number"
                    id="precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    placeholder="Escribe el precio del producto"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="cantidadStock" className="text-gray-500 mb-2">
                    Cantidad en Stock
                  </label>
                  <input
                    type="number"
                    id="cantidadStock"
                    value={cantidadStock}
                    onChange={(e) => setCantidadStock(e.target.value)}
                    placeholder="Escribe la cantidad en stock"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  />
                </div>
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="categoriaId" className="text-gray-500 mb-2">
                    Categoría
                  </label>
                  <select
                    id="categoriaId"
                    value={categoriaId}
                    onChange={(e) => setCategoriaId(e.target.value)}
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  >
                    <option value="">Selecciona una categoría</option>
                    {categorias.map((categoria: any) => (
                      <option key={categoria.categoria_id} value={categoria.categoria_id}>
                        {categoria.nombre_categoria}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col w-full my-5">
                  <label htmlFor="proveedorId" className="text-gray-500 mb-2">
                    Proveedor
                  </label>
                  <select
                    id="proveedorId"
                    value={proveedorId}
                    onChange={(e) => setProveedorId(e.target.value)}
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                    required
                  >
                    <option value="">Selecciona un proveedor</option>
                    {proveedores.map((proveedor: any) => (
                      <option key={proveedor.proveedor_id} value={proveedor.proveedor_id}>
                        {proveedor.nombre_proveedor}
                      </option>
                    ))}
                  </select>
                </div>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <div className="flex flex-col w-full my-5">
                  <button
                    type="submit"
                    className="w-full py-4 bg-cyan-600 rounded-lg text-cyan-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="font-bold">Actualizar Producto</div>
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

export default EditarProducto;
