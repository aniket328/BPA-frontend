import React from 'react';
import { useNavigate } from "react-router-dom";



const LoginScreen = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/landing");
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-white">
            <div className="flex w-full justify-between px-10">
                <img src="logo.svg" alt="Logo" className="h-10 w-auto" />
                <h1 className="text-5xl font-bold text-center">Welcome to BPA</h1>
                <div></div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md w-96 mt-8">
                <h2 className="text-xl font-bold mb-4">Log in</h2>
                <p className="mb-4 text-gray-500">Don't have an account? Register</p>
                <button className="w-full mb-4 bg-red-600 text-white p-2 rounded hover:bg-red-500">Continue with Google  </button>
                <button className="w-full mb-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-500">Continue with Facebook </button>
                <p className="mb-4 text-gray-500">Or</p>
                <input type="email" placeholder="Your email address" className="mb-4 w-full p-2 border rounded" />
                <input type="password" placeholder="Password" className="mb-4 w-full p-2 border rounded" />
                <button onClick={handleLoginClick} className="w-full mb-4 bg-blue-800 text-white p-2 rounded hover:bg-blue-700">Log in</button>
                <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
            </div>
        </div>
    );
}

export default LoginScreen;
