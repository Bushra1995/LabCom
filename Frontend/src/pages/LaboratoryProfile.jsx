import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import jwtDecode from "jwt-decode";
import Inputs from "../components/UI/History";
import Helpform from "../components/UI/DataForm";
import { FaUser } from "react-icons/fa";
import axios from "axios";

const LaboratoryProfile = () => {
    // To not scroll to the bottom when user comes from another page here
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [user, setUser] = useState(null);

    // Lab Form Submission Start --------------------------------------------------------------------------------------------------------------------------
    const [labInfoFormData, setLabInfoFormData] = useState({
        labName: '',
        phoneNumber: '',
        location: '',
        images: [],
        // email: '',
    });
    console.log(labInfoFormData)

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleLabInfoInputChange = (event) => {
        const { name, value } = event.target;
        setLabInfoFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLabInfoFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/lab/laboratories', labInfoFormData);
            console.log(labInfoFormData)
            console.log('Laboratory created:', response.data);
            setLabInfoFormData({
                labName: '',
                phoneNumber: '',
                location: '',
                images: '',
                // email: '',
            });
            setIsSubmitted(true); // Set isSubmitted to true after successful submission
        } catch (error) {
            console.error('Failed to create laboratory:', error);
        }
    };
    // Lab Form Submission End -------------------------------------------------------------------------------------------------------------------------

    //  Test Form Submission Start ---------------------------------------------------------------------------------------------------------------------

    const [testName, setTestName] = useState("");
    const [testDescription, setTestDescription] = useState("");
    const [sampleType, setSampleType] = useState("");
    const [testRequirements, setTestRequirements] = useState("");
    const [testTiming, setTestTiming] = useState("");
    const [testPrice, setTestPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            testName,
            testDescription,
            sampleType,
            testRequirements,
            testTiming,
            testPrice,
        };

        try {
            await axios.post("http://localhost:4000/test/tests", formData);
            console.log(formData)
            console.log("Data saved successfully!");
            // Optionally, you can perform additional actions after the data is saved
        } catch (error) {
            console.error("Error saving data:", error);
            // Handle the error appropriately
        }
    };

    // Test Form Submission End ----------------------------------------------------------------

    // User Info Fetching Start ------------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    return;
                }
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.user_id;

                const response = await fetch(
                    `http://localhost:4000/user/getdata/${userId}`
                );
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    const token = localStorage.getItem("token");
    let role = "";
    if (token) {
        const decodedToken = jwtDecode(token);
        role = decodedToken.role;
    }

    const [userId, setUserId] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.user_id;
        setUserId(userId);
    }, []);
    // User Info Fetching End --------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
            />
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
            />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover">
                        <img
                            src="https://www.just.edu.jo/Centers/HealthCenter/SiteAssets/Pages/Laboratory-Division/Lab.jpg"
                            alt=""
                            className="absolute top-0 w-full h-full bg-center bg-cover"
                        />
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        />
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <br />
                                            <FaUser className="w-32 h-32 rounded-full mx-auto text-gray-500" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <br />
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <Link
                                                to="/EditProfile"
                                                className=" active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-4 rounded-full outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                style={{ backgroundColor: "#3AA6B9" }}
                                            >
                                                Edit Profile
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <br />
                                        <Link
                                            to="/"
                                            className="inline-block bg-white  text-black font-black py-2 px-4 rounded flex items-center gap-1 focus:outline-none"
                                        >
                                            <FiArrowLeft />
                                            Back to Home
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        {user && user.username}
                                    </h3>

                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-envelope mr-2 text-lg text-blueGray-400" />
                                        {user && user.email}
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex justify-center">
                                        <div className="w-full bg-white p-10">
                                            <h1
                                                tabIndex={0}
                                                role="heading"
                                                aria-label="profile information"
                                                className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
                                            >
                                                Profile info
                                            </h1>
                                            <div className="mt-8 md:flex md:flex-wrap md:justify-between">
                                                <div className="flex flex-col mb-8 md:w-64">
                                                    <label className="mb-3 text-lg leading-none text-gray-800">
                                                        First name
                                                    </label>
                                                    <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                                                        {user && user.firstname}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col mb-8 md:w-64">
                                                    <label className="mb-3 text-lg leading-none text-gray-800">
                                                        Last name
                                                    </label>
                                                    <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                                                        {user && user.lastname}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col mb-8 md:w-64">
                                                    <label className="mb-3 text-lg leading-none text-gray-800">
                                                        Username
                                                    </label>
                                                    <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                                                        {user && user.username}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col mb-8 md:w-64">
                                                    <label className="mb-3 text-lg leading-none text-gray-800">
                                                        Email Address
                                                    </label>
                                                    <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                                                        {user && user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="relative bg-blueGray-200 pt-8 pb-2 mt-8">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
                            </div>
                        </div>
                    </footer>

                    {/* -------------------------------------------------------Navigate bar on top of forms----------------------------------------------------------------------------- */}

                    <div className="flex flex-wrap items-center justify-center text-center">
                        <div className="w-75 bg-gray-100 py-8 flex flex-wrap items-start justify-center mb-8">
                            <div className="w-full h-16 relative md:mt-0 mt-4">
                                <div
                                    className="w-full h-full relative"
                                >
                                    {/* <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" className="w-full h-full" /> */}
                                    <div className="w-full flex flex-col px-10 items-center justify-center inset-0 m-0">
                                        <p className="w-full text-m font-medium leading-4 text-gray-700">Lab Info Form</p>
                                        <p className="w-full text-xs mt-4 leading-none text-gray-400">Send a request to the ADMIN to view your laboratory and tests on the home page</p>
                                        {/* It will be 2 forms here : one for adding the lab itself by posting it to the admin to get approval
                                        other form for adding tests (POST) in cards in the home page ( use the same infos from there )
                                        so we will have 2 endpoints here for this : http://localhost:3100/labs/addlaboratory */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------End navigate-------------------------------------------------- */}

                    {/* ------------------------------------------------Lab Card Form Start-------------------------------------------------- */}
                    {!isSubmitted && (
                        <form
                            className="container mx-auto px-4"
                            onSubmit={handleLabInfoFormSubmit}
                        >
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-10" style={{ backgroundColor: "#E3F4F4" }}>
                                <div className="container mx-auto px-4">
                                    <div className="flex items-center justify-center mt-4" >
                                        <div class="xl:w-10/12 w-full px-8">
                                            <div class="xl:px-24 lg:flex items-center justify-center">
                                                <div class="w-80" >
                                                    <div class="flex items-center">
                                                        <h1 class="text-xl font-bold pr-2 leading-5 text-gray-800">Laboratory Information</h1>
                                                    </div>
                                                </div>
                                                <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                                                    <div>
                                                        <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                                            <div class="md:w-64">
                                                                <label class="text-sm leading-none text-gray-800" id="firstName" >Laboratory Name</label>
                                                                <input
                                                                    type="text"
                                                                    name="labName"
                                                                    tabindex="0"
                                                                    class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                                                    aria-labelledby="firstName"
                                                                    value={labInfoFormData.laboratoryName}
                                                                    onChange={handleLabInfoInputChange}
                                                                />
                                                            </div>
                                                            <div class="md:w-64 md:ml-12 md:mt-0 ">
                                                                <label class="text-sm leading-none text-gray-800" id="lastName">Phone Number</label>
                                                                <input
                                                                    type="text"
                                                                    name="phoneNumber"
                                                                    tabindex="0"
                                                                    class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                                                    aria-labelledby="lastName"
                                                                    value={labInfoFormData.phoneNumber}
                                                                    onChange={handleLabInfoInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="md:flex items-center lg:ml-24 mt-8">
                                                            <div class="md:w-64">
                                                                <label class="text-sm leading-none text-gray-800" id="emailAddress">Laboratory Location</label>
                                                                <input
                                                                    type="text"
                                                                    name="location"
                                                                    tabindex="0"
                                                                    class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                                                    aria-labelledby="emailAddress"
                                                                    value={labInfoFormData.laboratoryLocation}
                                                                    onChange={handleLabInfoInputChange}
                                                                />
                                                            </div>
                                                            <div className="md:w-64 md:ml-12 md:mt-0 ">
                                                                <label
                                                                    className="block mb-8 text-sm  text-gray-900 dark:text-white"
                                                                    htmlFor="multiple_files"
                                                                >
                                                                    Upload Your Lab Image (images):
                                                                </label>
                                                                <input
                                                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:shadow-outline-gray form-input"
                                                                    value={labInfoFormData.images}
                                                                    onChange={handleLabInfoInputChange}
                                                                    type="file"
                                                                    id="multiple_files"
                                                                    name="multiple_files"
                                                                    multiple
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* <div class="md:flex items-center lg:ml-24 mt-8">
                                                            <div class="md:w-64">
                                                                <label class="text-sm leading-none text-gray-800" id="emailAddress">Laboratory Email</label>
                                                                <input
                                                                    type="email"
                                                                    name="location"
                                                                    tabindex="0"
                                                                    class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                                                    aria-labelledby="emailAddress"
                                                                    value={labInfoFormData.laboratoryEmail}
                                                                    onChange={handleLabInfoInputChange}
                                                                />
                                                            </div>
                                                        </div> */}
                                                        <div class="md:flex items-center lg:ml-24 mt-10">
                                                            <div class="md:w-64">
                                                                <button
                                                                    type="submit"
                                                                    className="active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-3 py-3 rounded-full outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                                    style={{ backgroundColor: "#3AA6B9" }}
                                                                >
                                                                    Submit To Admin
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                    <br />
                    {/* ------------------------------------------------Lab Card Form End-------------------------------------------------- */}

                    {/* ------------------------------------------------Lab Tests Form Start-------------------------------------------------- */}
                    <form
                        className="container mx-auto px-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-6" style={{ backgroundColor: "#E3F4F4" }}>
                            <div className="container mx-auto px-4">
                                <div className="flex items-center justify-center mt-4" >
                                    <div class="xl:w-10/12 w-full px-8">

                                        <div class="xl:px-24 lg:flex items-center justify-center">
                                            <div class="w-80" >
                                                <div class="flex items-center">
                                                    <h1 class="text-xl font-bold pr-2 leading-5 text-gray-800">Laboratory Tests</h1>
                                                </div>
                                            </div>
                                            <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                                                <div>
                                                    <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                                        <div class="md:w-64">
                                                            <label class="text-sm leading-none text-gray-800" id="password">Test Name</label>
                                                            <input type="text" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="" />
                                                        </div>
                                                        <div class="md:w-64 md:ml-12 md:mt-0 ">
                                                            <label class="text-sm leading-none text-gray-800" id="securityCode">Test Description</label>
                                                            <input type="text" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="securityCode" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="md:flex items-center lg:ml-24 mt-8">
                                                        <div class="md:w-64">
                                                            <label class="text-sm leading-none text-gray-800" id="emailAddress">Sample Type</label>
                                                            <input type="text" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="" />
                                                        </div>
                                                        <div class="md:w-64 md:ml-12 md:mt-0 ">
                                                            <label class="text-sm leading-none text-gray-800" id="phone" >Test Requirements</label>
                                                            <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="md:flex items-center lg:ml-24 mt-8">
                                                        <div class="md:w-64">
                                                            <label class="text-sm leading-none text-gray-800" id="emailAddress">Test Timing</label>
                                                            <input type="text" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="" />
                                                        </div>
                                                        <div class="md:w-64 md:ml-12 md:mt-0 ">
                                                            <label class="text-sm leading-none text-gray-800" id="phone" >Test Price</label>
                                                            <input type="text" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="md:flex items-center lg:ml-24 mt-10">
                                                        <div class="md:w-64">
                                                            <button
                                                                type="submit"
                                                                className="active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-3 py-3 rounded-full outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                                style={{ backgroundColor: "#3AA6B9" }}
                                                            >
                                                                Submit To Admin
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br />
                    <br />
                    {/* ------------------------------------------------Lab Tests Form End-------------------------------------------------- */}




                    {/* {role === "patient" ? <Helpform /> : null}
                    {role === "laboratory" ? <Inputs /> : null}      {/* make the role laboratory } */}

                    {/* ----------------------------------------------Lab Tests Start------------------------------------------------- */}



                </section>
            </main>
        </>
    );
};

export default LaboratoryProfile;
