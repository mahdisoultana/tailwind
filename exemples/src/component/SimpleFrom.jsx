import React from "react";

function SimpleFrom() {
  function sm(str, size = "lg") {
    const cssM = str
      .split(" ")
      .filter(Boolean)
      .map((feild) => `${size}:${feild}`)
      .join(" ");
    console.log(cssM);
    return cssM;
  }
  return (
    <form className="bg-white max-w-lg xl:max-w-xl w-full pt-4 p-8 rounded-lg space-y-4  xl:grid xl:grid-cols-2 items-baseline gap-6">
      <h1 className="font-bold text-3xl  text-gray-800 font-mono col-span-2 text-center">
        TailWind Form UI
      </h1>
      <label htmlFor="name" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">Name</span>
        <input
          type="text"
          className="w-full p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-indigo-500  focus:border-gray-500 "
          placeholder="Name"
          id="name"
        />
      </label>
      <label htmlFor="email" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Email
        </span>
        <input
          type="email"
          id="email"
          className={`w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-indigo-500 focus:border-gray-500   `}
          placeholder="Name"
        />
      </label>

      <label htmlFor="able" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Favrite Color ?
        </span>
        <div className="grid gap-3 grid-cols-2  justify-items-between justify-content-between">
          <label htmlFor="green">
            <input
              type="checkbox"
              name="able"
              value="green"
              className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 bg-green-500 focus:ring-green-500  focus:border-gray-500 "
              placeholder="Name"
              id="green"
            />
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              green
            </span>
          </label>
          <label htmlFor="purpule">
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              purpule
            </span>
            <input
              type="checkbox"
              name="purpule"
              value="purpule"
              className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 bg-indigo-500 focus:ring-indigo-500  focus:border-gray-500 "
              placeholder="Name"
              id="purpule"
            />
          </label>
          <label htmlFor="Red">
            <input
              type="checkbox"
              name="Red"
              value="Red"
              className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4 bg-red-500 focus:ring-2 focus:ring-red-500  focus:border-gray-500 "
              placeholder="Name"
              id="Red"
            />
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              Red
            </span>
          </label>
          <label htmlFor="Yellow">
            <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
              Yellow
            </span>
            <input
              type="checkbox"
              name="Yellow"
              value="Yellow"
              className=" p-2 rounded-lg border-[3px] bg-yellow-500 focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-yellow-500  focus:border-gray-500 "
              placeholder="Name"
              id="Yellow"
            />
          </label>
        </div>
      </label>
      <label htmlFor="able" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Your Able To Start ?
        </span>
        <input
          type="radio"
          name="able"
          value="yes"
          className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-green-500  focus:border-gray-500 "
          placeholder="Name"
          id="able"
        />
        <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
          Yes
        </span>
        <input
          type="radio"
          name="able"
          value="no"
          className=" p-2 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4  focus:ring-2 focus:ring-red-500  focus:border-gray-500 "
          placeholder="Name"
          id="no"
        />
        <label htmlFor="no">
          <span className="inline-block mx-2 uppercase text-gray-500 font-medium">
            No
          </span>
        </label>
      </label>
      <label htmlFor="stack" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Your stack :
        </span>
        <select
          name="stack"
          id="stack"
          className="w-full p-2 rounded-lg border-[3px] focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-indigo-500 focus:border-gray-500   "
        >
          <option value="Mern">MERN</option>
          <option value="Mern">MEAN</option>
          <option value="Mern">MEVN</option>

          <option value="Mern">Other</option>
        </select>
      </label>
      <label htmlFor="avatar" className="block">
        <span className="mb-1 block font-bold text-lg text-gray-700">
          Avatar
        </span>
        <input
          type="file"
          id="avatar"
          className={` p-1 rounded-lg border-[3px]  focus:outline-none focus:ring-offset-4 file:bg-violet-50 file:border-2  file:mr-4 file:py-2 file:px-4 block w-full text-sm font-bold  italic shadow-md shadow-slate-100 text-gray-500
      file:rounded-full file:border-none
      file:text-sm file:font-semibold
       border-x file:text-violet-700  hover:file:text-violet-100
      hover:file:bg-violet-800  focus:ring-2 focus:ring-indigo-500  focus:border-gray-500 file:shadow-sm border-gray-500 `}
        />
      </label>
      <button
        type="submit"
        className="col-span-2  bg-indigo-700 text-white text-lg font-bold inline-block w-full p-3 rounded-md mt-8  tracking-wider hover:bg-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}

export default SimpleFrom;
