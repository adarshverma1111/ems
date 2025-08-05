import React from "react";
import Header from "../other/Header";
import Createtask from "../other/Createtask";
import Alltask from "../other/Alltask";

const AdminDashboard = () => {
  return (
    <div className="text-white h-full p-10 ">
      <Header data={{ name: "Admin" }} />
      <Createtask />
      <Alltask />
    </div>
  );
};

export default AdminDashboard;
