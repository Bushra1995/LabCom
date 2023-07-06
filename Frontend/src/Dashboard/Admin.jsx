import React, { useState } from "react";
import LabReq from './LabReq';
import Sidebar from "./Sidebar";

export default function Admin() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);


    return (
        <>
          < Sidebar />
         
            {/* <div className="w-full h-full bg-gray-200">
                <div className="flex flex-no-wrap">
                    Sidebar starts
                    Mobile responsive sidebar
                    Mobile responsive sidebar
                    Sidebar ends
                    <div className="w-full">
                        Navigation starts
                        Navigation ends
                    </div>
                </div>
            </div> */}
        </>
    );
}
