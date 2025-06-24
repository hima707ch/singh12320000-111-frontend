import React from 'react';
import LoginForm from './LoginForm';
import { useLogin } from './useLogin';
import images from '../assets/images';

const Body = () => {
  const { handleLogin, error, isLoading } = useLogin();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div id="Body_2" className="sm:mx-auto sm:w-full sm:max-w-md">
        <img id="Body_3" className="mx-auto h-12 w-auto" src={images[0]} alt="Logo" />
        <h2 id="Body_4" className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <LoginForm handleLogin={handleLogin} error={error} isLoading={isLoading} />
    </div>
  );
};

export default Body;