import React, { useEffect, useState } from "react";
import axios from 'axios';

const TestTable = () => {
    const [test, setTest] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4000/test/getTest')
            .then((response) => {
                setTest(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    return (
        <>
            <div className="py-20 container mx-auto md:w-4/5 w-11/12 px-1">
                <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                        <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                            <div className="flex items-center">
                            </div>

                        </div>
                    </div>
                    <h2 className="text-center mb-4"> Approved Laboratory </h2>
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center text-sm tracking-normal leading-4">Test Name</th>
                                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center text-sm tracking-normal leading-4">Test Price</th>

                                </tr>
                            </thead>
                            {test.map((test) => (
                                <tbody>
                                    <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                        <td className="text-sm text-center pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                            {test.testName}
                                        </td>
                                        <td className="text-sm text-center pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                            {test.testPrice} JD
                                        </td>

                                        <div className="flex items-center mt-6">
                                            {/* edit icon */}
                                            {/* <a className="text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                    <line x1={16} y1={5} x2={19} y2={8} />
                                                </svg>
                                            </a> */}
                                        </div>
                                    </tr>
                                </tbody>
                            ))}


                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TestTable;
