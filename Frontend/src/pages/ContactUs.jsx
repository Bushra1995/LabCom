import axios from "axios";
import React, { useState } from "react";


function MyApp() {
    const [show, setShow] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit() {
        setIsLoading(true);
        const data = {
            name, email, msg
        }
        // console.log(data);
        axios.post('http://localhost:4000/contact', data)
            .then(() => {
                console.log(data)
                setName("")
                setEmail("")
                setMsg("")
            }).catch((error) => { console.log(error) })
            .finally(() => { setIsLoading(false); })
    }

    return (

        <div className="flex flex-col min-h-screen mb-8 md:mb-16 lg:mb-24">
            <div className="h-96 w-full bg-gradient-to-b from-purple-600 to-indigo-700">
                <div className="w-full flex items-center justify-center my-12">
                    <div className="absolute top-40 bg-white shadow rounded py-6 lg:px-28 px-6">
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>

                        <form onSubmit={handleSubmit}>
                            <div className="md:flex items-center mt-12">
                                <div className="md:w-72 flex flex-col">
                                    <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                                    <input value={name} onChange={(e) => { setName(e.target.value) }} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                                </div>
                                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                                </div>
                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                                    <input value={msg} onChange={(e) => { setMsg(e.target.value) }} tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                                </div>
                            </div>
                            <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                            <div className="flex items-center justify-center w-full">
                                <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none" type="submit" disabled={isLoading}>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
