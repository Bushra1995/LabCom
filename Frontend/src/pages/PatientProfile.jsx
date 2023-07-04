import React from 'react'
import { Link } from 'react-router-dom';
import SummaryTable from "../components/UI/SummaryTable";


const PatientProfile = () => {
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
              //   src={education}
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
                      {/* <FaUser className="w-32 h-32 rounded-full mx-auto text-gray-500" /> */}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <br />
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link
                        to="/EditProfile"
                        className="bg-blue-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-4 rounded-full outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      >
                        Edit Profile
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <br />
                    <Link
                      to="/Home"
                      className="inline-block bg-white  text-black font-black py-2 px-4 rounded flex items-center gap-1 focus:outline-none"
                    >
                      {/* <FiArrowLeft /> */}
                      Back to Home
                    </Link>
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {/* {user && user.username} */}
                  </h3>

                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-envelope mr-2 text-lg text-blueGray-400" />
                    {/* {user && user.email} */}
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
                        Patient Personal Information
                      </h1>
                      <div className="mt-8 md:flex md:flex-wrap md:justify-between">
                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Patient First Name
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {/* {user && user.firstname} */}
                          </p>
                        </div>
                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Patient Middle Name
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {/* {user && user.firstname} */}
                          </p>
                        </div>
                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Patient Last Name
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {/* {user && user.lastname} */}
                          </p>
                        </div>
                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Gender
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {/* {user && user.username} */}
                          </p>
                        </div>

                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Age
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {/* {user && user.email} */}
                          </p>
                        </div>

                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Home Address
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {/* {user && user.email} */}
                          </p>
                        </div>

                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Email Address
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {/* {user && user.email} */}
                          </p>
                        </div>

                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Phone Number
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {/* {user && user.email} */}
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

          {/* {role === "student" ? <Helpform /> : null}
          {role === "donor" ? <Inputs /> : null} */}
        </section>

        {/* Patient Test History that the lab sent with its results with normal ranges */}
        <div className="w-3/4 mx-auto">
          <SummaryTable />
        </div>
      </main>




      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mt-4" >
          <div class="xl:w-10/12 w-full px-8">
            
            <div class="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
              <div className="w-52 h-16 relative md:mt-0 mt-4">
                <button
                  className="w-full h-full relative"
                  onClick={() => {
                    // Handle button click event here
                    // You can add your logic to render data in the same page
                  }}
                >
                  <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" className="w-full h-full" />
                  <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                    <p className="w-full text-sm font-medium leading-4 text-white">Lab Info</p>
                    {/* <p className="w-full text-xs mt-1 leading-none text-white">description of step 1</p> */}
                  </div>
                </button>
              </div>

              <div className="w-52 h-16 relative md:mt-0 mt-4">
                <button
                  className="w-full h-full relative"
                  onClick={() => {
                    // Handle button click event here
                    // You can add your logic to render data in the same page
                  }}
                >
                  <img src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step2" className="w-full h-full" />
                  <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                    <p className="w-full text-sm font-medium leading-4 text-indigo-800">Lab Tests</p>
                    {/* <p className="w-full text-xs mt-1 leading-none text-indigo-800">Some info about you</p> */}
                  </div>
                </button>
              </div>
            </div>

            <div class="xl:px-24">
              <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Laboratory Information</h1>
                  </div>
                </div>
                <div>
                  <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div class="md:w-64">
                      <label class="text-sm leading-none text-gray-800" id="firstName" >Laboratory Name</label>
                      <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="" />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 ">
                      <label class="text-sm leading-none text-gray-800" id="lastName">Laboratory Owner Name</label>
                      <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="" />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label class="text-sm leading-none text-gray-800" id="emailAddress">Email Address</label>
                      <input type="email" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 ">
                      <label class="text-sm leading-none text-gray-800" id="phone" >Password</label>
                      <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="" />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label class="text-sm leading-none text-gray-800" id="emailAddress">Laboratory Phone Number</label>
                      <input type="email" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="+962-712-1234567" />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 ">
                      <label class="text-sm leading-none text-gray-800" id="phone" >Owner Phone Number</label>
                      <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="+962-712-1234567" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Laboratory Tests</h1>
                  </div>
                </div>
                <div>
                  <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div class="md:w-64">
                      <label class="text-sm leading-none text-gray-800" id="password">Test Type</label>
                      <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="" />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0">
                      <label class="text-sm leading-none text-gray-800" id="securityCode">Test Name</label>
                      <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="securityCode" placeholder="" />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label class="text-sm leading-none text-gray-800" id="recoverEmail">Test Categories</label>
                      <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="recoveryEmail" placeholder="" />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0">
                      <label class="text-sm leading-none text-gray-800" id="altPhone">Test Description</label>
                      <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="altPhone" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientProfile