import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Gestion Inventario</h1>
        <div className="flex space-x-4">
          <h1>Proyecto de Clase: Compiladores</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;