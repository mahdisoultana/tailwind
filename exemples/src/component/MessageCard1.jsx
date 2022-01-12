import React from "react";
import { BiMessage } from "react-icons/bi";
function MessageCard1() {
  return (
    <div className="bg-white shadow-sm shadow-slate-50 rounded-lg space-x-6 flex p-6 items-center">
      <BiMessage size="3rem" className="w-16 h-16 fill-cyan-500" />
      <div>
        <h1 className="font-meduim text-2xl text-gray-900 mb-1 font-semibold">
          ChitChat
        </h1>
        <p className="capitalize font-normal text-lg text-gray-500">
          You have a new message!
        </p>
      </div>
    </div>
  );
}

export default MessageCard1;
