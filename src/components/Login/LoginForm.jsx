import React from 'react';

const LoginForm = ({ handleLogin, error, isLoading }) => {
  return (
    <div id="LoginForm_1" className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div id="LoginForm_2" className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form id="LoginForm_3" className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label id="LoginForm_4" htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div id="LoginForm_5" className="mt-1">
              <input
                id="LoginForm_6"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label id="LoginForm_7" htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div id="LoginForm_8" className="mt-1">
              <input
                id="LoginForm_9"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {error && (
            <div id="LoginForm_10" className="text-red-500 text-sm">
              {error}
            </div>
          )}

          <div>
            <button
              id="LoginForm_11"
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;