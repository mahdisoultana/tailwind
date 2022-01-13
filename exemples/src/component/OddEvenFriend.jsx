import React from "react";

function OddEvenFriend() {
  return (
    <div className=" flex items-center flex-col    justify-center max-w-lg w-full ">
      <h1 className="font-medium text-3xl mb-6 text-white text-center">
        Freinds List Odd & Even Practice
      </h1>
      <ul className="w-full  divide-y-2  divide-gray-400 rounded-lg overflow-hidden ">
        <li className=" odd:bg-white hover:bg-indigo-300 cursor-pointer group  even:bg-gray-200 p-2 flex items-center  ">
          <div className="flex items-center justify-center bg-gray-900 w-20 h-20 rounded-full shadow-lg m-1 mx-2 mr-4">
            <img
              src="https://images.unsplash.com/photo-1637592439620-b205e155b0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt="img"
              className="block w-full ring-4 rounded-full group-hover:ring-indigo-900 ring-indigo-500 h-full opacity-100 object-cover"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-gray-900 group-hover:text-red-400 group-hover:translate-x-3 font-bold ">
              Kristen Ramos
            </h1>
            <h4 className="text-gray-500 group-hover:text-gray-900">
              kristen.ramos@example.com
            </h4>
          </div>
        </li>
        <li className=" odd:bg-white hover:bg-indigo-300 cursor-pointer group  even:bg-gray-200 p-2 flex items-center">
          <div className="flex items-center justify-center bg-gray-900 w-20 h-20 rounded-full shadow-lg m-1 mx-2 mr-4">
            <img
              src="https://images.unsplash.com/photo-1634913940785-c17c505a9c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt="img"
              className="block w-full ring-4 rounded-full group-hover:ring-indigo-900 ring-indigo-500 h-full opacity-100 object-cover"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-gray-900 group-hover:text-red-400 group-hover:translate-x-3 font-bold ">
              Kristen Ramos
            </h1>
            <h4 className="text-gray-500 group-hover:text-gray-900">
              kristen.ramos@example.com
            </h4>
          </div>
        </li>
        <li className=" odd:bg-white hover:bg-indigo-300 cursor-pointer group  even:bg-gray-200 p-2 flex items-center">
          <div className="flex items-center justify-center bg-gray-900 w-20 h-20 rounded-full shadow-lg m-1 mx-2 mr-4">
            <img
              src="https://images.unsplash.com/photo-1634913940596-82acaf66854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
              className="block w-full ring-4 rounded-full group-hover:ring-indigo-900 ring-indigo-500 h-full opacity-100 object-cover"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-gray-900 group-hover:text-red-400 group-hover:translate-x-3 font-bold ">
              Kristen Ramos
            </h1>
            <h4 className="text-gray-500 group-hover:text-gray-900">
              kristen.ramos@example.com
            </h4>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OddEvenFriend;
