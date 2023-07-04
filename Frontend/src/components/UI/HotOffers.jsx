import React, { useRef }  from "react";
import TestCards from "../../pages/TestCards";

const Banner = () => {

    const programsRef = useRef(null);

    const scrollToPrograms = () => {
        if (programsRef.current) {
            window.scrollTo({
                top: programsRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
        <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
            <div className="flex justify-between bg-gray-50 items-stretch flex-row">
                <div className="flex items-center bg-gray-800 justify-center">
                    <h4 className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-red-600">50% OFF</h4>
                </div>
                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
                    <div>
                        <h3 className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Best Tests Offers</h3>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">Furniture that looks modern and is comfortable as well. Avail the 50% offer now.</p>
                        <button className="block w-full rounded px-12 py-3 text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" style={{ backgroundColor: "#3AA6B9" }} onClick={scrollToPrograms}>Get It Now</button>
                    </div>
                </div>
                <div className="hidden md:block h-44 md:h-60 xl:h-72">
                    <img className="hidden h-full xl:block" src="https://i.guim.co.uk/img/media/f8b4528fd2b24da6bd19015a94899633d668251d/0_335_3000_1800/master/3000.jpg?width=620&quality=45&dpr=2&s=none" alt="pexels-dmitry-zvolskiy-2082090-1" />
                    <img className="xl:hidden h-full" src="https://i.ibb.co/KWgn5zQ/pexels-dmitry-zvolskiy-2082090-1-1.png" alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                </div>
            </div>
            <div className="md:hidden mt-6 w-full">
                <img src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png" alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
            </div>
        </div>

        <div ref={programsRef}>
                <TestCards/>
            </div>
        </>
    );
};

export default Banner;
