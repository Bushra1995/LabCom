import React, { useEffect, useState, useRef } from 'react'
import svg1 from '../img/shapes/shape-1.svg';
import svg3 from '../img/shapes/shape-3.svg';
import { Link } from "react-router-dom";
import axios from "axios";

const LabPage = () => {
    // To not scroll to the bottom when user comes from another page here
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // To scroll from about us button to the about us section
    const programsRef = useRef(null);

    const scrollToPrograms = () => {
        if (programsRef.current) {
            window.scrollTo({
                top: programsRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    
    // Get the lab name from DB
    const [labName, setLabName] = useState('');

    useEffect(() => {
        fetchLabName();
    }, []);

    const fetchLabName = async () => {
        try {
            const response = await axios.get('http://localhost:4000/lab/laboratories');
            const data = response.data;

            // Update the lab name in the state
            const labNames = data.map((item) => item.labName);
            setLabName(labNames);
        } catch (error) {
            console.error('Error fetching lab name:', error);
        }
    };


    // Get the Tests from DB
    const [tests, setTests] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/test/getTest')
            .then(response => {
                setTests(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    

    const handleAddToCheckout = (test) => {
        const selectedTests = sessionStorage.getItem('selectedTests');
        let addedTests = selectedTests ? JSON.parse(selectedTests) : [];

        // Check if the test is already in the tests array
        const isTestAlreadyAdded = addedTests.some((test) => test._id === test._id);

        if (!isTestAlreadyAdded) {
            addedTests = [...addedTests, test];
            sessionStorage.setItem('selectedTests', JSON.stringify(addedTests));
        }
    };


    
    return (
        <>

            {/* -------------------------------------------------------- Hero Section --------------------------------------------------------------------------- */}
            <section
                className="relative bg-[url(https://images.wsj.net/im-190981/IM)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-30 backdrop-blur-sm"
                />

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6">
                    <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div>
                            <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
                                <h1 className="text-white text-decoration-none text-xl md:text-xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-bold f-f-l">
                                    {labName.length > 0 ? labName[0] : 'Loading...'}
                                </h1>
                                <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                                </div>
                            </div>
                        </div>
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                                You can find wide
                                <strong className="block font-extrabold text-white">Range of tests</strong>
                            </h1>
                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            we are dedicated to providing you with comprehensive medical testing services. With a wide array of tests available,
                             our laboratory is equipped to cater to a diverse range of medical needs
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a
                                    href="#"
                                    className="block w-full text-decoration-none rounded px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                >
                                    Our Tests
                                </a>
                                <button
                                    onClick={scrollToPrograms}
                                    className="block w-full text-decoration-none rounded px-12 py-3 text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                    style={{ backgroundColor: "#3AA6B9" }}
                                >
                                    About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* -------------------------------------------------------------- Lab Tests Section -------------------------------------------------------------- */}

            <section id="services" className="service-section pt-80 mb-5">
                <div className=" shape-1">
                    <img src={svg1} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            <div className="section-title text-center mb-55">
                                <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                                    Available Tests
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    A group of the most performed tests that
                                    <br className="d-none d-lg-block" /> is being worked on with
                                    the latest technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {tests.map((test) => (
                            <div className="col-lg-4 col-md-6" key={test._id}>
                                <div className="service-item mb-30">
                                    <div className="service-icon mb-25"></div>
                                    <div className="service-content">
                                        <h1>{test.labName}</h1>
                                        <h4>{test.testName}</h4>
                                        <p>{test.testDescription}</p>
                                        <p>Sample Type : {test.sampleType}</p>
                                        <p>Test Duration : {test.testTiming}</p>
                                        <p>Test Requirements : {test.testConditions}</p>
                                        <p>Test Price : {test.price}</p>
                                        <Link
                                            to="checkout"
                                            className="read-more text-decoration-none"
                                            onClick={() => handleAddToCheckout(test)}
                                        >
                                            Add To Checkout <i className="lni lni-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="service-overlay img-bg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ------------------------------------------------------------ About Us ------------------------------------------------------------------------- */}


            <div
                ref={programsRef}
                className="py-16 bg-white"
            >
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center" style={{ boxShadow: '8px 8px 10px rgba(0, 0, 255, 0.1)' }}>
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src="https://cdn.labmanager.com/assets/articleNo/5407/iImg/12323/942652e3-681c-4acd-973e-15a1beb0baa8-ls-teamtrouble-640x360.jpg"
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                                style={{ borderTopRightRadius: '65px', borderBottomLeftRadius: '65px' }}
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Nuxt development is carried out by passionate developers
                            </h2>
                            <p className="mt-6 text-gray-600">
                            Welcome to our state-of-the-art medical laboratory! Here, we are dedicated to providing you with comprehensive medical testing services. With a wide array of tests available,
                             our laboratory is equipped to cater to a diverse range of medical needs.
                            </p>
                            <p className="mt-4 text-gray-600">
                                {" "}
                                From routine screenings to specialized diagnostics, we are committed to delivering accurate results and contributing to your health and well-being. Trust in our expertise as we prioritize precision and care in every test we conduct.
                                 Your health is our priority, and we're here to support you on your medical journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" shape-3">
                <img src={svg3} alt="" />
            </div>

            {/* --------------------------------------------------------- Our Team Section ------------------------------------------------------------------- */}

            <div className="py-20">
                <div className="container mx-auto px-6 text-center md:px-12">
                    <div className="mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            Our Team
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                            Tailus prides itself not only on award-winning technology, but also on
                            the talent of its people of some of the brightest minds and most
                            experienced executives in business.
                        </p>
                    </div>
                    <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
                        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                                <img
                                    className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                                    src="https://wecare.com.cy/wp-content/uploads/2020/05/2-298x300_ccexpress.jpeg"
                                    alt="woman"
                                    loading="lazy"
                                    width={640}
                                    height={805}
                                />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl text-gray-700 dark:text-white">
                                        Hentoni Doe
                                    </h4>
                                    <span className="block text-sm text-gray-500">CEO-Founder</span>
                                </div>
                                <a href="#" className="mx-auto block w-max text-primary text-decoration-none">
                                    View Bio
                                </a>
                            </div>
                        </div>
                        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                                <img
                                    className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                                    src="https://thumbs.dreamstime.com/z/%D0%B2%D1%80%D0%B0%D1%87-%D0%B8%D0%BB%D0%B8-%D0%BC%D0%B5%D0%B4%D1%81%D0%B5%D1%81%D1%82%D1%80%D0%B0-%D0%B2-%D0%B2%D0%B8%D0%B4%D0%B5-ppe-%D0%B8-%D0%BF%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B8-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D1%81-%D0%BB%D0%B8%D1%86%D0%B5%D0%B2%D0%BE%D0%B9-181876326.jpg"
                                    alt="woman"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl text-gray-700 dark:text-white">
                                        Anabelle Doe
                                    </h4>
                                    <span className="block text-sm text-gray-500">
                                        Chief Operations Officer
                                    </span>
                                </div>
                                <a href="#" className="mx-auto block w-max text-primary text-decoration-none">
                                    View Bio
                                </a>
                            </div>
                        </div>
                        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                                <img
                                    className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                                    src="https://victoria.mediaplanet.com/app/uploads/sites/103/2019/12/MainImage_A1-1-888x500.jpg"
                                    alt="man"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl text-gray-700 dark:text-white">
                                        Jonathan Doe
                                    </h4>
                                    <span className="block text-sm text-gray-500">
                                        Chief Technical Officer
                                    </span>
                                </div>
                                <a href="#" className="mx-auto block w-max text-primary text-decoration-none">
                                    View Bio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default LabPage