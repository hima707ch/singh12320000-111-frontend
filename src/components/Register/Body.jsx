import React from 'react';
import RegistrationForm from './RegistrationForm';
import useRegister from './useRegister';
import images from '../assets/images';

const Body = () => {
  const { handleSubmit, isLoading, error, success } = useRegister();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-md mx-auto">
        <div id="Body_3" className="text-center">
          <img
            id="Body_4"
            className="mx-auto h-12 w-auto"
            src={images[0]}
            alt="Logo"
          />
          <h2 id="Body_5" className="mt-6 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        {error && (
          <div id="Body_6" className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        {success && (
          <div id="Body_7" className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            {success}
          </div>
        )}
        <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;