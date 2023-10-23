
import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';



const LandingPage = () => {
    const navigate = useNavigate();
    const[counter, setCounter] = useState(0);

    const handleLogout = () => {
        navigate("/");  // Redirect to the Login Screen
    }
    const handleMyProfile = () => {
        navigate("/my-profile");  // Redirect to the MyProfile Screen
    }
    const handleMyArchitect = () => {
        navigate("/my-architect");  // Redirect to the MyArchitect Screen
    }
    return (
        <div className="h-screen flex flex-col bg-[e1f4f8]  text-[#113946]">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
            <img src="logo.svg" alt="Logo" className="h-10 w-auto" />
            <span className="flex justify-between items-center p-4 mr-3">Client User ID:
              <img src="user_solid.svg" alt="Logo" className="h-5 w-auto ml-3 " />
            </span>

            <button onClick={handleLogout} className=" flex items-center bg-[#23839a] hover:bg-[#FC682D] ][ p-2 rounded text-white mr-2">Logout <img src="/logout.svg" alt="Logout Icon" className="ml-2 h-4 w-auto " /></button>
        </div>

        {/* Main Content */}
        <div className="flex flex-grow mt-4 border border-gray-300 rounded-lg overflow-hidden">

        <div className="flex overflow-y-auto py-20 w-full h-[calc(100vh-100px)]" >
            {/* Side Scroll */}
            <div className="w-1/4 p-4 px-9 flex flex-col space-y-4 overflow-y-auto bg-[#d2eef5] ml-11 rounded-3xl drop-shadow-md hover:drop-shadow-xl ">
                <button onClick={handleMyProfile} className="bg-[#23839a] hover:bg-white p-2 rounded text-white hover:text-black hover:drop-shadow-md text-xl ">My Profile</button>
                <button onClick={handleMyArchitect} className="bg-[#23839a] hover:bg-white p-2 rounded text-white hover:text-black hover:drop-shadow-md text-xl  ">My Architect</button>
                <img src="Scroll.svg" alt="Your SVG Description" className="h-[60%] w-auto" />
            </div>

         {/* Name and other Detais */}
                    <div className="w-3/5 p-4 bg-[#d2eef5] ml-11 rounded-3xl drop-shadow-md hover:drop-shadow-xl flex flex-col items-center space-y-4 relative">
                    <img src="/City.svg" alt="City Background" className="absolute w-[60%] h-[60%] bottom-0  right-0 object-cover z-0 opacity-40 " />
                        <div className="profile-container bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto relative z-10 ">
                            {/* Profile Information Header */}
                            <div className="profile-header text-center mb-5">
                                <h2 className="text-2xl font-semibold text-[#113946]">Profile Details</h2>
                                <hr className="border-[#23839a] my-2" />
                            </div>

                            {/* Profile Information List */}
                            <div className="profile-details space-y-4">
                                {/* Single Detail */}
                                <div className="detail flex justify-between items-center">
                                    <h3 className="detail-title text-lg font-medium text-[#113946]">Name:</h3>
                                    <span className="detail-info text-lg text-gray-700">Aniket Ranjan</span>
                                </div>

                                <div className="detail flex justify-between items-center">
                                    <h3 className="detail-title text-lg font-medium text-[#113946]">Plot Number:</h3>
                                    <span className="detail-info text-lg text-gray-700">6-14/A</span>
                                </div>

                                <div className="detail flex justify-between items-center">
                                    <h3 className="detail-title text-lg font-medium text-[#113946]">Sector Number:</h3>
                                    <span className="detail-info text-lg text-gray-700">2B</span>
                                </div>

                                <div className="detail flex justify-between items-center">
                                    <h3 className="detail-title text-lg font-medium text-[#113946]">Name of Urban Estate:</h3>
                                    <span className="detail-info text-lg text-gray-700">Vasundhara Villas</span>
                                </div>

                                <div className="detail flex justify-between items-center">
                                    <h3 className="detail-title text-lg font-medium text-[#113946]">Zone:</h3>
                                    <span className="detail-info text-lg text-gray-700">Delhi</span>
                                </div>

                                <div className="detail flex justify-between items-center">
                                    <h3 className="detail-title text-lg font-medium text-[#113946]">Area:</h3>
                                    <span className="detail-info text-lg text-gray-700">Shanti Niketan</span>
                                </div>

                                <div className="detail flex justify-between items-center">
                                    <h3 className="detail-title text-lg font-medium text-[#113946]">Commercial/Residential/Industrial:</h3>
                                    <span className="detail-info text-lg text-gray-700">Residential</span>
                                </div>

                                <div className="detail flex justify-between items-center">
                                    <h3 className="detail-title text-lg font-medium text-[#113946]">No of Floors:</h3>
                                    <div className="counter-controls flex items-center">
                                        <span className="counter-value text-xl font-bold text-[#113946] mr-4">{counter}</span>
                                        <button
                                            className="increment-button bg-[#23839a] hover:bg-[#314b4f] p-2 rounded text-white transition-colors duration-300 text-xl font-bold"
                                            onClick={() => setCounter((prevCount) => prevCount + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Number of Floors Counter */}
                          
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;
