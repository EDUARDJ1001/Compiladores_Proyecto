"use client"

import React, { useEffect, useState } from 'react';
import HeaderProveedor from '@/app/components/headerProveedores/page';

// Interfaz para describir la estructura de un objeto de proveedor
interface Proveedor {
  proveedor_id: number;
  nombre_proveedor: string;
  direccion: string;
  telefono: string;
}

const Proveedores: React.FC = () => {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/proveedores`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        // Actualizar el estado de proveedores con los datos recibidos
        setProveedores(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProveedores = proveedores.filter(proveedor =>
    proveedor.nombre_proveedor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <HeaderProveedor />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Lista de Proveedores</h2>
        <input
          type="text"
          placeholder="Buscar por nombre del proveedor"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-indigo-500"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Proveedor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Proveedor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(filteredProveedores) && filteredProveedores.map((proveedor, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{proveedor.proveedor_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{proveedor.nombre_proveedor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{proveedor.direccion}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{proveedor.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;
