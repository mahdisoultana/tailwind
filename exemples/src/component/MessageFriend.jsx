import React from "react";

function MessageFriend() {
  return (
    <div className="py-8 max-w-sm w-full xl:h-52 mx-auto px-8 xl:bg-gray-900 bg-gray-100  p-6  capitalize flex flex-col items-center  justify-center rounded-lg shadow-2xl shadow-slate-300 lg:flex-row space-x-4 space-y-4 xl:space-y-0 overflow-hidden relative ">
      <div className="  flex  xl:basis-[6rem] h-full ">
        <img
          src="https://images.unsplash.com/photo-1637592439620-b205e155b0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="img"
          className="rounded-full  h-24 inline-block  w-24  xl:absolute   xl:w-[10rem] xl:h-full xl:rounded-none xl:rounded-tr-full xl:rounded-br-full    left-0 object-cover    top-0 shadow-neutral-500 shadow-xl"
        />
      </div>
      <div className="text-center ">
        <h1 className="text-2xl xl:text-lg font-bold text-gray-900 xl:text-gray-100">
          Erin Lindford
        </h1>
        <h2 className="text-2xl xl:text-lg font-semibold text-gray-500 my-4">
          Product Engineer
        </h2>
        <button className="inline-block py-2 px-6 rounded-full font-bold    font-mono text-gray-500 border-2 border-gray-600 focus:ring-4 focus:ring-offset-4  ring-red-500 focus:ring-offset-gray-200  hover:bg-gray-700 hover:text-gray-50 hover:-translate-y-1 duration-[.1s] ">
          Message
        </button>
      </div>
    </div>
  );
}

export default MessageFriend;
