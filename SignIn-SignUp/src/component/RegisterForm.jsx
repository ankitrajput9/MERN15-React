import React, { useState } from "react";

export default function RegisterForm({ onSwitch }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register Data:", { username, email, password });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-80">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Register
      </h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Username"
          className="p-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="p-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-green-600 hover:underline font-medium"
        >
          Login
        </button>
      </p>
    </div>
  );
}
