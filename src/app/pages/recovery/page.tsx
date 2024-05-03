import Header from '@/app/components/header/page';
import React from 'react';
import { PiArrowsCounterClockwiseBold } from 'react-icons/pi';

const PasswordRecovery = () => {
    return (
        <div>
            <Header />
            <div className="container px-6 mx-auto">
                <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-center items-start">
                            <PiArrowsCounterClockwiseBold size={48} />
                        </div>
                        <h1 className="text-5xl text-gray-800 font-bold">Recuperar Contraseña</h1>
                        <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
                            Por favor, introduzca su correo electrónico asociado a su cuenta.
                        </p>
                    </div>
                    <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                        <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                            <form action="" className="w-full">
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label htmlFor="email" className="text-gray-500 mb-2">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Ingrese su correo electrónico"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                                    />
                                </div>
                                <div id="button" className="flex flex-col w-full my-5">
                                    <button
                                        type="button"
                                        className="w-full py-4 bg-cyan-600 rounded-lg text-green-100"
                                    >
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="font-bold">Enviar Correo de Recuperación</div>
                                        </div>
                                    </button>
                                </div>
                                <div id="button" className="flex flex-col w-full my-5">
                                    <a
                                        href="/pages/resetPass"
                                        className="w-full py-4 bg-cyan-600 rounded-lg text-green-100"
                                    >
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="font-bold">Cambiar contraseña</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex justify-evenly mt-5">
                                    <a
                                        href="/pages/login"
                                        className="w-full text-center font-medium text-gray-500"
                                    >
                                        Volver al inicio de sesión.
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordRecovery;