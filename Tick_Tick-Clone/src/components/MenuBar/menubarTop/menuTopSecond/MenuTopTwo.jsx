import React from 'react'

const MenuTopTwo = () => {
  return (
    <div>
       <div className=" w-56 bg-slate-400 flex justify-center items-center">
        <div className="flex justify-between items-center w-48 h-11 bg-lime-300 ml-3">
          <div className="today flex justify-center items-center">
            <li className="Next7Days list-none w-6 h-6 bg-slate-500"></li>
            <p>Next 7 days</p>
          </div>
          <div>
            <button>...</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuTopTwo
