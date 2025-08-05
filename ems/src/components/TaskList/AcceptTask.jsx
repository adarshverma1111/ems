import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="text-white h-full flex-shrink-0 w-[300px] p-5 bg-purple-600 rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">
          mark as completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm">mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
