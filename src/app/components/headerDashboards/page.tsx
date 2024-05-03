import React from 'react';

const HeaderDash: React.FC = () => {
    return (
        <header className="bg-white shadow-lg">
            <div className="container px-6 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="ml-4">
                            <h1 className="text-xl font-bold text-gray-800">Gestión de Inventario</h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <a
                                href="/pages/dashboard"
                                className="px-4 py-2 bg-cyan-600 rounded-lg text-green-100"
                            >
                                Volver al Dashboard
                            </a>
                        </div>
                        <div className="flex-shrink-0">
                            <a
                                href="/pages/homePage"
                                className="px-4 py-2 bg-cyan-600 rounded-lg text-green-100"
                            >
                                Volver a inicio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDash;
