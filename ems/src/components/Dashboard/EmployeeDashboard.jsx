import React from "react";
import Header from "../other/Header";
import TasklistNumber from "../other/TasklistNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-20 bg-[#1c1c1c] h-screen">
      <Header data={data} />
      <TasklistNumber data={data}/>
      <TaskList data={data}/>
    </div>
  );
};

export default EmployeeDashboard;
