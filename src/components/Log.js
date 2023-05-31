import React from "react";

const Log = () => {
  return (
    <div className="container-full w-screen h-screen bg-gradient-to-br from-blue to-green flex items-center">
      <div className="w-96 shadow-2xl mx-auto text-white bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md mt-20 py-10 px-8 rounded-md">
        <div className="text-center text-2xl">Login</div>
        <form action="#!" className="mt-6">
          <div className="mb-4">
            <label htmlFor="">Email</label>
            <input type="email" className="input" required />
          </div>
          <div className="mb-4">
            <label htmlFor="">Password</label>
            <input type="password" className="input" required />
          </div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="remember"
                  class="text-hoverLight dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              class="text-sm font-medium text-hoverLight hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>
          <button className="mb-4 bg-white bg-opacity-30 hover:bg-opacity-40 transition duration-500 rounded-md shadow-sm p-3 w-full font-bold">
            Login
          </button>
          <p class="text-sm font-light text-hoverLight">
            Don’t have an account yet?{" "}
            <a href="#" class="font-bold text-hoverLight">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Log;
