import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email.trim(), password.trim());
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 ">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2  text-white outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 py-3 px-5 text-xl rounded-full"
            type="email"
            placeholder="Enter email.."
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 mt-4 text-white outline-none bg-transparent placeholder:text-gray-400 border-emerald-600
                      py-3 px-5 text-xl rounded-full"
            type="password"
            placeholder="Enter password.."
          />
          <button
            type="submit"
            className="text-white border-none mt-4 outline-none bg-emerald-600
                       py-3 px-27 text-xl rounded-full"
            disabled={!email || !password}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
