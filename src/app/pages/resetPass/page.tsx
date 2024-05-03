import React from 'react';
import { MdOutlineLock } from 'react-icons/md';

const ChangePassword = () => {
  return (
    <div className="container px-6 mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
        <div className="flex flex-col w-full">
          <div className="flex justify-center items-start">
            <MdOutlineLock size={48}/>
          </div>
          <h1 className="text-5xl text-gray-800 font-bold">Cambiar Contraseña</h1>
          <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
            Por favor, introduzca su nueva contraseña.
          </p>
        </div>
        <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            <form action="" className="w-full">
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="password" className="text-gray-500 mb-2">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Ingrese su nueva contraseña"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="confirmPassword" className="text-gray-500 mb-2">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirme su nueva contraseña"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                />
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="button"
                  className="w-full py-4 bg-cyan-600 rounded-lg text-green-100"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="font-bold">Cambiar Contraseña</div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
