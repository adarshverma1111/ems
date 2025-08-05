import React from "react";

const Header = ({ data }) => {
  const logoutuser = () => {
    localStorage.setItem("loggedinuser", "");
    window.location.reload();
  };

  return (
    <div className="text-white flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello! <br />
        <span className="text-3xl font-semibold">
          {data && data.name ? data.name : "User"}👋
        </span>
      </h1>
      <button
        onClick={logoutuser}
        className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
