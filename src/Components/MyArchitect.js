
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
        <div className="h-screen flex flex-col bg-[e1f4f8]  ">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
            <img src="logo.svg" alt="Logo" className="h-10 w-auto" />
            <span className="flex justify-between items-center p-4 mr-3">Client User ID:
              <img src="user_solid.svg" alt="Logo" className="h-5 w-auto ml-3 " />
            </span>

            <button onClick={handleLogout} className=" flex items-center bg-[#23839a] hover:bg-[#FC682D] ][ p-2 rounded text-white mr-2">Logout <img src="/logout.svg" alt="Logout Icon" className="ml-2 h-4 w-auto " /></button>
        </div>

        {/* Main Content */}
        <div className="flex flex-grow mt-4 border border-gray-300 rounded-lg">

        <div className="flex w-full" >
            {/* Side Scroll */}
            <div className="w-1/4 p-4 px-9 flex flex-col space-y-4 overflow-y-auto bg-[#d2eef5] ml-11 rounded-3xl drop-shadow-md hover:drop-shadow-xl mt-[75px] h-[55%] ">
                <button onClick={handleMyProfile}   className="bg-[#23839a] hover:bg-white p-2 rounded text-white hover:text-black hover:drop-shadow-md text-xl ">My Profile</button>
                <button onClick={handleMyArchitect} className="bg-[#23839a] hover:bg-white p-2 rounded text-white hover:text-black hover:drop-shadow-md text-xl  ">My Architect</button>
                <img src="Scroll.svg" alt="Your SVG Description" className="h-[60%] w-auto" />
            </div>

         {/*Boxes for the div */}
         <div className="w-3/4 p-4 flex flex-col justify-center items-start rounded-3xl drop-shadow-md overflow-y-auto">
        
         <h1 className="text-4xl mb-8 font-extrabold mt-4 space-y-4">Select Architect</h1>
            
                {/* First row of boxes */}
                <div className="flex justify-between w-full mb-4">
                    <div className="bg-[#ffffff] border p-4 rounded-md w-1/3 hover:bg-[#23839a] text-[#113946] hover:text-white ">
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Name:</h3>
                            <span className="detail-info text-lg">Aniket Ranjan</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Company Name</h3>
                            <span className="detail-info text-lg">L&T</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Professional Experience</h3>
                            <span className="detail-info text-lg">5 years</span>
                        </div>
                    <img src="architect.svg" alt="Your SVG Description" className="h-[50%] w-auto" />
                    </div>

                    <div className="bg-[#ffffff] border p-4 rounded-md w-1/3 hover:bg-[#23839a] text-[#113946] hover:text-white ">
                    <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium">Name:</h3>
                            <span className="detail-info text-lg ">Aniket Ranjan</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Company Name</h3>
                            <span className="detail-info text-lg ">L&T</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Professional Experience</h3>
                            <span className="detail-info text-lg ">5 years</span>
                        </div>
                    <img src="architect.svg" alt="Your SVG Description" className="h-[50%] w-auto" />
                    </div>


                    <div className="bg-[#ffffff] border p-4 rounded-md w-1/3 hover:bg-[#23839a] text-[#113946] hover:text-white  ">
                    <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Name:</h3>
                            <span className="detail-info text-lg ">Aniket Ranjan</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Company Name</h3>
                            <span className="detail-info text-lg ">L&T</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Professional Experience</h3>
                            <span className="detail-info text-lg ">5 years</span>
                        </div>

                    <img src="architect.svg" alt="Your SVG Description" className="h-[50%] w-auto" />
                    </div>

                </div>

                {/* Second row of boxes */}
                <div className="flex justify-between w-full">
                    <div className="bg-white border p-4 rounded-md w-1/3 hover:bg-[#23839a] text-[#113946] hover:text-white ">
                    <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Name:</h3>
                            <span className="detail-info text-lg ">Aniket Ranjan</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Company Name</h3>
                            <span className="detail-info text-lg ">L&T</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Professional Experience</h3>
                            <span className="detail-info text-lg ">5 years</span>
                        </div>
                    <img src="architect.svg" alt="Your SVG Description" className="h-[50%] w-auto" />
                    </div>

                    <div className="bg-white border p-4 rounded-md w-1/3 hover:bg-[#23839a] text-[#113946] hover:text-white ">
                    <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Name:</h3>
                            <span className="detail-info text-lg ">Aniket Ranjan</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Company Name</h3>
                            <span className="detail-info text-lg ">L&T</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Professional Experience</h3>
                            <span className="detail-info text-lg ">5 years</span>
                        </div>
                    <img src="architect.svg" alt="Your SVG Description" className="h-[50%] w-auto" />
                    </div>


                    <div className="bg-white border p-4 rounded-md w-1/3 hover:bg-[#23839a] text-[#113946] hover:text-white ">
                    <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Name:</h3>
                            <span className="detail-info text-lg ">Aniket Ranjan</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Company Name</h3>
                            <span className="detail-info text-lg ">L&T</span>
                        </div>
                        <div className="detail flex justify-between items-center">
                            <h3 className="detail-title text-lg font-medium ">Professional Experience</h3>
                            <span className="detail-info text-lg ">5 years</span>
                        </div>
                    <img src="architect.svg" alt="Your SVG Description" className="h-[50%] w-auto" />
                    </div>
                </div>
                    
        </div>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;
