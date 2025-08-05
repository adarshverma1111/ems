import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage, getLocalStorage } from "./utiles/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);
  const authdata = useContext(AuthContext);
  const [loggedinuserdata, setloggedinuserdata] = useState(null);

  useEffect(()=>{
    const loggedinuser=localStorage.getItem('loggedinuser')
    if(loggedinuser){
      const userdata=JSON.parse(loggedinuser)
      setuser(userdata.role)
      setloggedinuserdata(userdata.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setuser("admin");
      localStorage.setItem("loggedinuser", JSON.stringify({ role: "admin" }));
    } else if (authdata) {
      const employee = authdata.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setuser("employee");
        setloggedinuserdata(employee);
        localStorage.setItem(
          "loggedinuser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
      alert("Invalid credentials");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedinuserdata} />
      ) : null}
    </>
  );
};

export default App;
