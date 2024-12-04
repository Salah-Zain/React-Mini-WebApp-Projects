import React from "react";

const MenuTopOne = () => {
  return (
    <div>
      <div className=" w-56 bg-slate-400 flex justify-center items-center mt-5 ">
        <div className="flex justify-between items-center w-48 h-11 bg-lime-300 ml-3">
          <div className="today flex justify-center items-center">
            <li className="Search list-none w-6 h-6 bg-slate-500"></li>
            <p>Today</p>
          </div>
          <div>
            <button>...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTopOne;
