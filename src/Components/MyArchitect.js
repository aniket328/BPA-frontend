
import React from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();

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

            <button onClick={handleLogout} className="bg-[#23839a] hover:bg-[#3c8c9c] ][ p-2 rounded text-white">Logout</button>
        </div>

        {/* Main Content */}
        <div className="flex flex-grow mt-4 border border-gray-300 rounded-lg overflow-hidden">

        <div className="flex overflow-y-auto py-20 w-full h-[calc(100vh-100px)]" >
            {/* Side Scroll */}
            <div className="w-1/4 p-4 px-9 flex flex-col space-y-4 overflow-y-auto bg-[#d2eef5] ml-11 rounded-3xl drop-shadow-md hover:drop-shadow-xl ">
                <button onClick={handleMyProfile}   className="bg-[#23839a] hover:bg-white p-2 rounded text-white hover:text-black hover:drop-shadow-md text-xl ">My Profile</button>
                <button onClick={handleMyArchitect} className="bg-[#23839a] hover:bg-white p-2 rounded text-white hover:text-black hover:drop-shadow-md text-xl  ">My Architect</button>
                <img src="Scroll.svg" alt="Your SVG Description" className="h-[60%] w-auto" />
            </div>

         {/* Welcome Aboard Text and SVG Vector */}
         <div className="w-3/4 p-4 flex flex-col justify-center items-start rounded-3xl drop-shadow-md">
                  
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;
