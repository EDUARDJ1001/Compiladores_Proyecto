"use client"

import React, { useEffect, useState } from 'react';
import HeaderProd from '@/app/components/headerProductos/page';

// Interfaz para describir la estructura de un objeto de producto
interface Producto {
  id: number;
  nombre_producto: string;
  precio: number;
  cantidad_stock: number;
  categoria_id: number;
  proveedor_id: number;
}

const Inventario: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/productos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        // Actualizar el estado de productos con los datos recibidos
        setProductos(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProductos = productos.filter(producto =>
    producto.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <HeaderProd />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Inventario de Productos</h2>
        <input
          type="text"
          placeholder="Buscar por nombre del producto"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-indigo-500"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre del Producto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad en Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(filteredProductos) && filteredProductos.map((producto, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{producto.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{producto.nombre_producto}</td>
                  <td className="px-6 py-4 whitespace-nowrap">L. {producto.precio.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{producto.cantidad_stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{producto.categoria_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventario;

