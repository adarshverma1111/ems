import React from "react";

const TasklistNumber = ({ data }) => {
  // handle missing data
  if (!data || !data.tasks) return null;

  const newTaskCount = data.tasks.filter((task) => task.newTask).length;
  const completedCount = data.tasks.filter((task) => task.completed).length;
  const failedCount = data.tasks.filter((task) => task.failed).length;
  const activeCount = data.tasks.filter((task) => task.active).length;

  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="text-white p-10 rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{newTaskCount}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="text-white p-10 rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{completedCount}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="text-white p-10 rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{failedCount}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
      <div className="text-white p-10 rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{activeCount}</h2>
        <h3 className="text-xl font-medium">Active</h3>
      </div>
    </div>
  );
};

export default TasklistNumber;
