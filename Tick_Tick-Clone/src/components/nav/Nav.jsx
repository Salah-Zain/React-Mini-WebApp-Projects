import React from "react";

const Nav = () => {
  return (
    <div className="nav h-screen w-14 border-2 flex justify-between items-center flex-col">
      <div className="topNav  h-60 w-full flex flex-col items-center justify-center">
        <div className="profile h-11 w-11 bg-slate-500">
          <img src="" alt="" />
        </div>
        <div className="select h-8 w-8 bg-slate-500 mt-5">
          <img src="" alt="" />
        </div>
        <div className="calender  h-8 w-8 bg-slate-500 mt-5">
          <img src="" alt="" />
        </div>
        <div className="search  h-8 w-8 bg-slate-500 mt-5">
          <img src="" alt="" />
        </div>
      </div>

      <div className="bottomNav h-60 w-full flex flex-col items-center justify-center">
        <div className="syn h-8 w-8 bg-slate-500 mt-5">
          <img src="" alt="" />
        </div>
        <div className="notification h-8 w-8 bg-slate-500 mt-5">
          <img src="" alt="" />
        </div>
        <div className="more h-8 w-8 bg-slate-500 mt-5">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
