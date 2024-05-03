"use client"

import Header from '@/app/components/header/page';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      const response = await fetch(`http://localhost:4000/login`, {
        method: 'POST', // Cambiar a método POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Enviar username y password como JSON en el cuerpo de la solicitud
      });
      if (response.ok) {
        // Aquí puedes redirigir a la siguiente vista o realizar otras acciones
        window.location.href = '/pages/dashboard';
      } else {
        const data = await response.json();
        setError(data.error || 'Error de servidor');
      }
    } catch (error) {
      setError('Error de conexión');
    }
  };  

  return (
    <div>
      <Header />
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl text-gray-800 font-bold">Identifícate</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              En esta pestaña podrás iniciar sesión.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Inicio de Sesión
              </h2>
              <form onSubmit={handleSubmit} className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="username" className="text-gray-500 mb-2">
                    Nombre de usuario
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Escribe tu nombre de usuario"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label htmlFor="password" className="text-gray-500 mb-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Escribe tu contraseña"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:shadow-lg"
                  />
                </div>
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="submit"
                    className="w-full py-4 bg-cyan-600 rounded-lg text-cyan-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="font-bold">Iniciar Sesión</div>
                    </div>
                  </button>
                  <div className="flex justify-evenly mt-5">
                    <a
                      href="/pages/recovery"
                      className="w-full text-center font-medium text-gray-500"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;