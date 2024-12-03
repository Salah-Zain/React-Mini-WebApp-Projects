import React from "react";

const DropMenu = () => {
  return (
    <div className="dropMenu w-56 h-screen bg-orange-200 flex flex-col items-center box-border">
      <div className="mt-5 bg-amber-300 pb-7 border-b w-full flex flex-col justify-center items-center">
        <div className="flex justify-between items-center bg-slate-400 w-52 h-11">
          <div className="flex m-5">
            <li className="list-none w-6 h-6 bg-slate-700"></li>
            <li className="list-none pl-2">Today</li>
          </div>
          <div>
            <li className="list-none m-5">
              <button>...</button>
            </li>
          </div>
        </div>

        <div className="flex justify-between items-center bg-slate-200 w-52 h-11">
          <div className="flex m-5">
            <li className="list-none w-6 h-6 bg-slate-700"></li>
            <li className="list-none pl-2">Next 7 Days</li>
          </div>
          <div>
            <li className="list-none m-5">
              <button>...</button>
            </li>
          </div>
        </div>

        <div className="flex justify-between items-center bg-slate-400 w-52 h-11">
          <div className="flex m-5">
            <li className="list-none w-6 h-6 bg-slate-700"></li>
            <li className="list-none pl-2">Inbox</li>
          </div>
          <div>
            <li className="list-none m-5">
              <button>...</button>
            </li>
          </div>
        </div>
      </div>

      <div className="bg-green-300 w-full h-56">
        <div className="flex items-end justify-between">
          <div className="flex mt-5">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <p>Lists</p>
          </div>

          <div className="">
            <button>+</button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div className="flex bg-slate-400 w-52 h-11">
              <li className="list-none w-6 h-6 bg-slate-700"></li>
              <li className="list-none">Welcome</li>
            </div>
            <div>
              <button>...</button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <li className="list-none w-6 h-6 bg-slate-700"></li>
              <li className="list-none">Welcome</li>
            </div>
            <div>
              <button>...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
