import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';

interface Producto {
  id: number;
  nombre_producto: string;
  precio: number;
  cantidad_stock: number;
  categoria_id: number;
}

interface Props {
  productos: Producto[];
}

const ProductosPage: React.FC<Props> = ({ productos }) => {
  return (
    <div>
      <header className="bg-slate-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-semibold">Gestion Inventario</h1>
          <div>
            <a href="/dashboard/mainPage" className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center space-x-2">
              <IoHomeSharp className="text-xl" />
              <span>Volver al Inicio</span>
            </a>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 to-slate-500 text-white">
        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Inventario de Productos</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Número</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Nombre del Producto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Precio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Cantidad en Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Categoría</th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-200">
                {productos.map((producto, index) => (
                  <tr key={producto.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{producto.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{producto.nombre_producto}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${producto.precio.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{producto.cantidad_stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{producto.categoria_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:4000/productos');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { productos: data } };
}

export default ProductosPage;
