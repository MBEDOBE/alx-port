import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    //TODO: sign in action
  };
  return (
    <div class="lg:flex">
      <div class="lg:w-1/2 xl:max-w-screen-sm">
        <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            class="text-center text-4xl text-blue font-display font-semibold lg:text-left xl:text-5xl
            xl:text-bold"
          >
            Register
          </h2>
          <div class="mt-12">
            <form>
              <div class="mb-8">
                <div class="flex justify-between items-center">
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Full Name
                  </div>
                </div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Nignan Gmakiye"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Email Address
                </div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="email"
                  placeholder="support@edinfohub.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="mt-8">
                <div class="flex justify-between items-center">
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                </div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="************"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div class="mt-8">
                <div class="flex justify-between items-center">
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Confirm Password
                  </div>
                </div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="************"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div class="flex items-center justify-between my-4">
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
                    <label for="remember" class="text-hoverDark">
                      I accept the T&Cs
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <button
                  class="bg-green text-gray-100 p-4 w-full rounded-md tracking-wide
                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-hoverDark
                        shadow-lg"
                >
                  Register
                </button>
              </div>
            </form>
            <div class="my-12 text-sm font-display font-semibold text-gray-700 text-center">
              Already have an account ?{" "}
              <Link to="/login" class="cursor-pointer text-hoverLight hover:text-hoverDark">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-center bg-hoverLight flex-1 h-screen">
        <div class="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <svg
            width="356px"
            height="356px"
            viewBox="0 0 128.00 128.00"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            class="iconify iconify--noto"
            preserveAspectRatio="xMidYMid meet"
            fill="#446677"
            stroke="#446677"
            transform="matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.768"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M85.86 62.7h-.01c-.12-2.45-2.72-4.74-7.21-6.09c-9.61-2.89-20.27-4.58-32.43-4.68c-12.15.1-22.81 1.79-32.43 4.68c-4.49 1.35-7.07 3.64-7.2 6.09h-.01v50.08c0 2.79 3.02 5.8 10.26 7.85c7.48 2.12 17.6 3.49 29.38 3.49s21.9-1.37 29.38-3.49c7.59-2.15 10.39-5.32 10.27-8.25V62.7z"
                fill="#335577"
              >
                {" "}
              </path>{" "}
              <linearGradient
                id="IconifyId17ecdb2904d178eab9940"
                gradientUnits="userSpaceOnUse"
                x1="89.177"
                y1="84.429"
                x2="78.997"
                y2="84.429"
              >
                {" "}
                <stop offset="0" stop-color="#ffffff">
                  {" "}
                </stop>{" "}
                <stop offset=".306" stop-color="#ffffff" stop-opacity=".963">
                  {" "}
                </stop>{" "}
              </linearGradient>{" "}
              <path
                d="M85.85 62.7c-.12-2.45-2.72-4.74-7.21-6.09c-9.61-2.89 11.29 9.47-.86 9.37c0 0-.32 25.13 0 38.43c.21 8.82 8.12 8.72 8.08 7.96V62.7h-.01z"
                fill="url(#IconifyId17ecdb2904d178eab9940)"
              >
                {" "}
              </path>{" "}
              <path fill="#335577" d="M6.57 63.43h79.29">
                {" "}
              </path>{" "}
              <path
                d="M54.11 108.24l-4.49-10.58a7.662 7.662 0 0 0 4.33-6.9c0-4.24-3.44-7.67-7.67-7.67s-7.67 3.44-7.67 7.67c0 2.85 1.56 5.34 3.87 6.66l-4.18 10.89c-.53 1.38.49 2.85 1.96 2.85h11.92c1.5 0 2.52-1.54 1.93-2.92z"
                fill="#4e342e"
              >
                {" "}
              </path>{" "}
              <path
                d="M53.69 107.26H38.7l-.4 1.05c-.53 1.38.49 2.85 1.96 2.85h11.92c1.51 0 2.52-1.54 1.93-2.92l-.42-.98z"
                fill="#ffffff"
              >
                {" "}
              </path>{" "}
              <path
                d="M43.16 95.4c.18-.52-.01-1.08-.45-1.4c-.6-.44-1.41-1.22-1.92-2.46c-1.86-4.48.35-6.47.35-6.47a7.622 7.622 0 0 0-2.54 5.69c0 2.85 1.56 5.34 3.87 6.66l.69-2.02z"
                fill="#ffffff"
              >
                {" "}
              </path>{" "}
              <path
                d="M51.67 85.3s2.2 4.42-.32 7.25c-.86.96-1.59 1.47-2.13 1.72c-.53.25-.77.88-.52 1.41l.93 1.96a7.662 7.662 0 0 0 4.33-6.9c-.01-3.25-2.29-5.44-2.29-5.44z"
                fill="#ffffff"
              >
                {" "}
              </path>{" "}
              <path
                d="M76.96 55.95c-9.12-2.64-19.22-4.19-30.74-4.28c-11.52.09-21.63 1.64-30.74 4.28c-9.13 2.65-10.04 9.26 2.89 12.8c7.09 1.94 16.69 3.19 27.85 3.19s20.76-1.25 27.85-3.19c12.93-3.54 12.02-10.16 2.89-12.8z"
                fill="#ffffffdd835"
              >
                {" "}
              </path>{" "}
              <g>
                {" "}
                <path
                  d="M74.37 62.21s-.37 1.72-5.22 1.72s-5.88-1.72-5.88-1.72V40.16C63.27 30.14 55.62 22 46.21 22s-17.06 8.15-17.06 18.16v22.06s-2.11 1.72-5.95 1.72s-5.14-1.72-5.14-1.72V40.16c0-16.14 12.63-29.26 28.15-29.26s28.15 13.13 28.15 29.26v22.05z"
                  fill="#84b0c1"
                  stroke="#84b0c1"
                  stroke-width="0.00128"
                  stroke-miterlimit="10"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M33.52 21.56c-5.14 3.06-5.93 5.13-7.36 6.08c-1.06.7-2.47.14-1.55-2.29c.79-2.08 2.69-6.02 7.43-9.05c8.16-5.22 15.2-4.98 14.82-.99c-.32 3.53-7.85 2.99-13.34 6.25z"
                  fill="#b9e4ea"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
              <path
                d="M76.96 55.95c-1.31-.38-6.24 7.12-4.38 8.53c2.14 1.62 4.66 3.19 5.2 2.98c11.27-4.34 8.31-8.87-.82-11.51z"
                fill="#335577"
              >
                {" "}
              </path>{" "}
              <radialGradient
                id="IconifyId17ecdb2904d178eab9941"
                cx="76.707"
                cy="49.066"
                r="37.716"
                gradientTransform="matrix(-.077 -.997 .4971 -.0384 58.224 127.429)"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop offset=".156" stop-color="#335577d8192">
                  {" "}
                </stop>{" "}
                <stop offset=".277" stop-color="#335577d8192">
                  {" "}
                </stop>{" "}
              </radialGradient>{" "}
              <path
                d="M72.65 27.68c-4.17 2.78-7.78 7.91-7.48 19.35c.31 11.82 6.48 16.58 7.45 17.49c1.97-.63 3.03-1.94 3.03-1.94l-.4-22.53c.01-3-.12-7.82-2.6-12.37z"
                fill="url(#IconifyId17ecdb2904d178eab9941)"
              >
                {" "}
              </path>{" "}
              <g>
                {" "}
                <path
                  d="M93.76 20.22c-13.11.38-22.04 12.32-21.92 25.44c.1 10.38 6.57 16.83 15.7 20.43l-.11 39.41c0 1.65.68 3.22 1.88 4.34l2.91 2.79l2.36 3.3c.68.23 3.61.16 4.18-.18l4.42-3.62c1.2-1.13 1.88-2.7 1.88-4.34v-2.89c0-1.8-.76-3.59-2.24-4.62c-.92-.64-1.49-1.52-1.49-2.5c0-1.16.79-2.18 2.02-2.82c1.02-.54 1.72-1.54 1.72-2.69v-.39c.04-1.54-.75-2.49-1.63-3.07c-1.37-.9-1.9-2.24-2.11-3.69c-.18-1.26.54-2.59 1.42-3.49c1.58-1.63 2.28-3.02 2.28-5.3l.01-7.58c9.56-3.44 16.4-12.59 16.4-23.34c-.01-14.12-11.49-25.65-27.68-25.19zm9.6 19.66c0 3.72-3.01 6.73-6.73 6.73c-3.72 0-6.73-3.01-6.73-6.73c0-3.72 3.01-6.73 6.73-6.73c3.72 0 6.73 3.01 6.73 6.73z"
                  fill="#ffffff"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M92.94 20.22c-13.7 0-24.8 11.1-24.8 24.8c0 10.48 6.51 19.44 15.7 23.07l-.11 37.01c0 1.65.68 3.22 1.88 4.34l5.61 5.2c1.56-.43 3.36 1.3 3.36 1.3l4.9-4.21c1.2-1.13 1.88-2.7 1.88-4.34v-2.89c0-1.8-.76-3.59-2.24-4.62c-.92-.64-1.49-1.52-1.49-2.5c0-1.16.79-2.18 2.02-2.82c1.02-.54 1.72-1.54 1.72-2.69v-.39c.04-1.54-.75-2.49-1.63-3.07c-1.37-.9-1.9-2.24-2.11-3.69c-.18-1.26.54-2.59 1.42-3.49c1.58-1.63 2.28-3.02 2.28-5.3l.01-7.58c9.56-3.44 16.4-12.59 16.4-23.34c-.01-13.69-11.11-24.79-24.8-24.79zm6.73 19.25c0 3.72-3.01 6.73-6.73 6.73c-3.72 0-6.73-3.01-6.73-6.73c0-3.72 3.01-6.73 6.73-6.73c3.71 0 6.73 3.01 6.73 6.73z"
                  fill="#fffffffca28"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M91.22 114.64s.95-.18 3.36 1.3l-.36-44.07c-.07-1.5-2.86 2.11-2.87 4.02l-.13 38.75z"
                  fill="#dba010"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M74.22 39.47c1.08-9.13 8.5-12.71 11.45-13.65c.99-.31 3-.83 3.46.89c.41 1.52-.53 2.33-2.14 2.84c-3.93 1.27-9.27 4.05-10.2 10.79c-.18 1.29-.88 2.04-1.72 1.81c-.57-.16-1.05-1.05-.85-2.68z"
                  fill="#ffffffff59d"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Register;
