import React from 'react'

const Createtask = () => {
  return (
    <div>
        <form className=" text-white flex w-full flex-wrap p-5 mt-4 bg-[#1c1c1c] items-start justify-between rounded">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm  mb-0.5">Task Title</h3>
              <input 
              className="border-gray-100 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text" placeholder="Make a UI design" />
            </div>
            <div>
              <h3 className="text-sm  mb-0.5">Date</h3>
              <input 
              className="border-gray-100 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="date" />
            </div>
            <div>
              <h3 className="text-sm  mb-0.5">Asign to</h3>
              <input
              className="border-gray-100 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text" placeholder="employee name" />
            </div>
            <div>
              <h3 className="text-sm  mb-0.5">Category</h3>
              <input
              className="border-gray-100 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text" placeholder="design, dev etc..." />
            </div>
          </div>

          <div className="w-1/2">
            <h3 className="text-sm  mb-0.5">Description</h3>
            <textarea 
            className="border-gray-100 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
            name="" id=""></textarea>
          </div >

          <button className="bg-emerald-500 py-3 w-1/3 mt-4 mx-auto hover:bg-emerald-600 rounded">Create task</button>
        </form>
      </div>
  )
}

export default Createtask