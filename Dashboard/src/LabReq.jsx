import React from "react";
import ReqTable from './LabReq';

const Table = () => {
    return (
        <>
            <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded">
                    {/* Place your content here */}
                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        {/* <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" /> */}
                        <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                            <div className="p-4 bg-green-300 rounded text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={7} r={4} />
                                    <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl mb-4">Approved Labs</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5 text-center">3</p>
                            </div>
                        </div>
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        {/* <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" /> */}
                        <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                            <div className="p-4 bg-yellow-700 rounded text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={7} r={4} />
                                    <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl mb-4">Pending Labs</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5 text-center">7</p>
                            </div>
                        </div>
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        {/* <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" /> */}
                        <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
                            <div className="p-4 bg-red-400 rounded text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={7} r={4} />
                                    <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl mb-4">Rejected Labs</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5 text-center">5</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-20">
                        <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                            <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                                <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                                    <div className="flex items-center">
                                        {/* edit icon */}
                                        {/* <a className="text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                    <line x1={16} y1={5} x2={19} y2={8} />
                                </svg>
                            </a> */}

                                        {/* setting icon */}
                                        {/* <a className="text-gray-600 dark:text-gray-400 mx-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                            </a> */}

                                        {/* delete icon */}
                                        {/* <a className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={7} x2={20} y2={7} />
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </a> */}
                                    </div>

                                </div>
                            </div>
                            <h2 className="text-center mb-4"> Laboratory Requests</h2>
                            <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                                <table className="min-w-full bg-white dark:bg-gray-800">
                                    <thead>
                                        <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                            <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 px-4 text-center text-m tracking-normal leading-4">Lab Name</th>
                                            <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-end text-m tracking-normal leading-4">Status</th>
                                            {/* <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center text-sm tracking-normal leading-4">Pending</th>
                                    <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center text-sm tracking-normal leading-4">Rejecting</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                            <td className="text-sm text-center pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Lab Name</td>
                                            <td className="text-sm flex-row justify-center mt-8 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                                <button className="bg-green-200 h-8 w-24 rounded-md flex items-center justify-center">
                                                    <div className="flex items-center">
                                                        <span className="text-xs text-gray-700 font-normal">Approve</span>
                                                    </div>
                                                </button>
                                            </td>
                                            <td className="text-sm flex-row justify-center mt-8 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                                <button className="bg-yellow-700 h-8 w-24 rounded-md flex items-center justify-center">
                                                    <div className="flex items-center">
                                                        <span className="text-xs text-gray-700 font-normal">Approve</span>
                                                    </div>
                                                </button>
                                            </td>
                                            <td className="text-sm flex-row justify-center mt-8 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                                <button className="bg-red-400 h-8 w-24 rounded-md flex items-center justify-center">
                                                    <div className="flex items-center">
                                                        <span className="text-xs text-gray-700 font-normal">Approve</span>
                                                    </div>
                                                </button>
                                            </td>
                                            {/* <td className="pr-8 relative">
                                    <div className="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                                        <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                        </ul>
                                    </div>
                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" onclick="dropdownFunction(this)" className="icon icon-tabler icon-tabler-dots-vertical dropbtn" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </button>
                                </td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Table;
