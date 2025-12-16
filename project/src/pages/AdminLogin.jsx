import { useState } from "react";
import Logo from '../assets/logo.png';
const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ADMIN_USER = "admin";
    const ADMIN_PASS = "12345";

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#0c0c0c] relative overflow-hidden">

      {/* --- Background Gradient Circles (Professional Look) --- */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[180px] opacity-20 top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-20 bottom-[-150px] right-[-150px]" />

      {/* --- Login Card --- */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 
        shadow-2xl p-10 rounded-2xl w-[360px] animate-fadeIn"
      >

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 object-contain drop-shadow-xl"
          />
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-white tracking-wide">
          Admin Panel
        </h2>

        {error && (
          <p className="text-red-400 text-center mb-4 text-sm">{error}</p>
        )}

        <label className="block mb-2 text-gray-300 text-sm">Username</label>
        <input
          type="text"
          className="w-full p-3 mb-4 rounded-lg bg-white/10 text-white 
          outline-none border border-white/20 placeholder-gray-400"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block mb-2 text-gray-300 text-sm">Password</label>
        <input
          type="password"
          className="w-full p-3 mb-6 rounded-lg bg-white/10 text-white 
          outline-none border border-white/20 placeholder-gray-400"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
          hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg 
          font-semibold text-white shadow-lg transition-all duration-300"
        >
          Login
        </button>
      </form>

      {/* --- Glow Border Animation --- */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn .8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AdminLogin;
