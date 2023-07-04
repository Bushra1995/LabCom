import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SummaryTable() {
    const [selectedTests, setSelectedTests] = useState([]);

    useEffect(() => {
        const testsData = sessionStorage.getItem('selectedTests');
        if (testsData) {
            const tests = JSON.parse(testsData);
            setSelectedTests(tests);
        }
    }, []);

    const calculateTotal = () => {
        let total = 0;
        selectedTests.forEach((test) => {
            total += parseFloat(test.price);
        });
        return total.toFixed(2);
    };
    

    return (
        <>
            <div className="w-full sm:px-6 mt-6 mb-6">
                <div className="px-4 md:px-10 py-4 md:py-7 rounded-tl-lg rounded-tr-lg" style={{ backgroundColor: '#3AA6B9' }}>
                    <div className="sm:flex items-center justify-center">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-white">Tests Summary</p>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-bold text-lg text-left">Reserved Tests</th>
                                <th className="font-bold text-lg text-left pl-10">Sample Type</th>
                                <th className="font-bold text-lg text-left pl-10">Test Requirements</th>
                                <th className="font-bold text-lg text-left pl-10">Lab Name</th>
                                <th className="font-bold text-lg text-left pl-10">Test Duration</th>
                                <th className="font-bold text-lg text-left pl-10">Price</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {selectedTests.map((test) => (
                                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-t border-gray-100" key={test._id}>
                                    <td>
                                        <div className="flex items-center pl-5">
                                            <div className="pl-2">
                                                <p className="font-medium">{test.testName}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-10">
                                        <p className="text-s leading-3 text-gray-600 mt-2">{test.sampleType}</p>
                                    </td>
                                    <td className="pl-10">
                                        <p className="text-s leading-3 text-gray-600 mt-2">{test.testConditions}</p>
                                    </td>
                                    <td className="pl-10">
                                        <p className="text-s leading-3 text-gray-600 mt-2">{test.labName}</p>
                                    </td>
                                    <td className="pl-10">
                                        <div className="flex items-center">
                                            <p className="text-s leading-3 text-gray-600 mt-2">{test.testTiming}</p>
                                        </div>
                                    </td>
                                    <td className="pl-10">
                                        <div className="flex items-center">
                                            <p className="text-s leading-3 text-gray-600 mt-2">{test.price}</p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="container py-2 bg-gray-100 flex justify-between w-50 items-center mt-50 mb-4">
                <p className="text-xl font-semibold leading-4 text-gray-800">Total Price : </p>
                <p className="text-lg font-semibold leading-4 text-gray-800">{calculateTotal()} JD</p>
            </div>

            {/* <Link to="#" className="flex justify-center items-center text-decoration-none">
                <button
                    className="mt-2 mb-4 font-medium leading-4 py-4 w-50 md:w-4/12 lg:w-50 text-white text-center text-decoration-none rounded"
                    style={{ backgroundColor: '#3AA6B9' }}
                >
                    Complete Payment
                </button>
            </Link> */}
        </>
    );
}

export default SummaryTable;
