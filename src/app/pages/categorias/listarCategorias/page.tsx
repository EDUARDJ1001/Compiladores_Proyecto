"use client"

import React, { useEffect, useState } from 'react';
import HeaderCategoria from '@/app/components/headerCategorias/page';

// Interfaz para describir la estructura de un objeto de categoría
interface Categoria {
  categoria_id: number;
  nombre_categoria: string;
}

const ListarCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/categorias`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        // Actualizar el estado de categorías con los datos recibidos
        setCategorias(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategorias = categorias.filter(categoria =>
    categoria.nombre_categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <HeaderCategoria />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Lista de Categorías</h2>
        <input
          type="text"
          placeholder="Buscar por nombre de la categoría"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-indigo-500"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Categoría</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Categoría</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(filteredCategorias) && filteredCategorias.map((categoria, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{categoria.categoria_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{categoria.nombre_categoria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListarCategorias;
