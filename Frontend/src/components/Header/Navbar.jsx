import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/Images/slider.png"
// import doctor from "../../img/slider/slider-2.jpg"
import logo from "../../assets/Images/logo.png"


function ComplexNavbar() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="relative w-full h-screen pb-10">
                <div className=" md:block">
                    <img className="absolute bg-cover bg-center w-full h-full inset-0" src="https://images.wsj.net/im-190981/IM" alt />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-30 backdrop-blur-sm"
                />

                <nav className="lg:hidden relative z-50">
                    <div className="flex py-2 justify-between items-center px-4">
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="visible flex items-center">
                            <button id="open" onClick={() => setMenu(!menu)} className={` ${menu ? 'hidden' : ''} focus:outline-none focus:ring-2 focus:ring-black`}>
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg" alt="menu" />
                            </button>
                            <ul id="list" className={` ${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to="#" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Home</span>
                                    </Link>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <Link to="about" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">About Us</span>
                                    </Link>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <Link to="contact" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Contact Us</span>
                                    </Link>
                                </li>
                                {/* <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <Link to="#" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">House Call Service</span>
                                    </Link>
                                </li> */}
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <Link to="#" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Laboratories</span>
                                    </Link>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <Link to="Signup" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Sign In</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="xl:hidden">
                                <button id="close" className={` ${menu ? '' : 'hidden'} close-m-menu focus:ring-2 focus:ring-black focus:outline-none`} onClick={() => setMenu(!menu)}>
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg" alt="close" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="f-f-l relative z-10">
                    <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="flex items-center text-white text-base font-medium">
                            <ul className="flex items-center pr-3 xl:pr-12">
                                <li className="cursor-pointer hover:text-gray-300 ease-in">
                                    <Link to="/" className="text-white text-decoration-none focus:outline-none focus:ring-2 focus:ring-white">Home</Link>
                                </li>
                                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                    <Link to="about" className="text-white text-decoration-none focus:outline-none focus:ring-2 focus:ring-white">About Us</Link>
                                </li>
                                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                    <Link to="contact" className="text-white text-decoration-none focus:outline-none focus:ring-2 focus:ring-white">Contact Us</Link>
                                </li>
                                {/* <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                    <Link to="callService" className="text-white text-decoration-none focus:outline-none focus:ring-2 focus:ring-white">House Call Service</Link>
                                </li> */}
                                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                    <Link to="laboratories" className="text-white text-decoration-none focus:outline-none focus:ring-2 focus:ring-white">Laboratories</Link>
                                </li>
                            </ul>
                            <Link to="Signup">
                                <button className="px-6 py-3 bg-indigo-700 hover:bg-indigo-500 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700" style={{ backgroundColor: "#3AA6B9" }}>
                                    Sign Up
                                    <img className="ml-4" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg5.svg" alt="arrow" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
                    <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
                        <h1 className="text-white text-decoration-none text-xl md:text-xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-bold f-f-l">Making
                            Health Care <br /> <br /> Better Together</h1>
                        <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            {/* <h2>offers you a group of medical services
                                that connect you with your laboratory in the fastest way
                                possible</h2> */}
                        </div>
                        <div className="lg:flex">
                            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg" style={{ backgroundColor: "#3AA6B9" }}>Tests Offers</button>
                            <Link to="laboratories" className="text-center hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg text-decoration-none" >Our Labs</Link>
                        </div>
                    </div>
                    {/* <img className="w-full mt-8 md:mt-0 object-fill md:w-1/3 md:-ml-2 lg:-ml-2 xl:ml-0" style={{
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '20px'
                    }}
                        src="https://www.thermofisher.com/blog/wp-content/uploads/sites/5/2018/03/shutterstock_460197343.jpg" alt="sample page" role="img" /> */}
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Tests Offers</button>
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Our Labs</button>
                </div>
            </div>


            <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
        </>
    );
}

export default ComplexNavbar;
