import { useState } from "react";
import { USERS } from "../config/roles";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [role, setRole] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = USERS[role];

    if (
      user.username === username &&
      user.password === password
    ) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          isLoggedIn: true,
          role: user.role,
        })
      );
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0f0f0f]">
      <div className="bg-[#181818] p-8 rounded-xl w-[350px]">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Dashboard Login
        </h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-[#222] text-white"
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="frontdesk">Front Desk</option>
        </select>

        <input
          placeholder="Username"
          className="w-full p-2 mb-3 rounded bg-[#222] text-white"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-[#222] text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-2 rounded text-white font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
