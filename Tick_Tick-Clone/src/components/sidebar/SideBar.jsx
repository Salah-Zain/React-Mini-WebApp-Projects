import React from "react";

const SideBar = () => {
  return (
    <div className="SideBar h-screen w-16 border-r-yellow-600	bg-slate-300 flex flex-col justify-between items-center">
      <div className="SideBarTop flex flex-col justify-center items-center bg-orange-200 w-full m-5">
        <li className="Profile list-none w-11 h-11 bg-slate-500 mb-3"></li>
        <li className="Task list-none w-7 h-7 bg-slate-500 m-3"></li>
        <li className="CalendarView list-none w-7 h-7 bg-slate-500 m-3"></li>
        <li className="Search list-none w-7 h-7 bg-slate-500 m-3"></li>
      </div>
      <div className="SideBarBottom flex flex-col justify-center items-center bg-orange-400 w-full m-5">
        <li className="Task list-none w-7 h-7 bg-slate-500 m-3"></li>
        <li className="CalendarView list-none w-7 h-7 bg-slate-500 m-3"></li>
        <li className="Search list-none w-7 h-7 bg-slate-500 m-3"></li>
      </div>{" "}
    </div>
  );
};

export default SideBar;
