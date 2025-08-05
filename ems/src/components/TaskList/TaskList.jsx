import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // Defensive: handle missing data or tasks
  if (!data || !Array.isArray(data.tasks)) return null;

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
      {data.tasks.map((element, index) => {
        if (element.active) {
          return <AcceptTask key={index} data={element} />;
        }
        if (element.newTask) {
          return <NewTask key={index} data={element}/>;
        }
        if (element.completed) {
          return <CompleteTask key={index} data={element}/>;
        }
        if (element.failed) {
          return <FailedTask key={index} data={element}/>;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;