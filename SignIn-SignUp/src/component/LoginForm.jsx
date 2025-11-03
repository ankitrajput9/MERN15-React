import React, { useState } from "react";

export default function LoginForm({ onSwitch }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Data:", { email, password });
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-80">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                    className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
                >
                    Login
                </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
                Not registered yet?{" "}
                <button
                    onClick={onSwitch}
                    className="text-blue-600 hover:underline font-medium"
                >
                    Register Now
                </button>
            </p>
        </div>
    );
}
