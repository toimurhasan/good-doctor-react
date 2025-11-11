import React from "react";
import { PiBuildingOfficeThin } from "react-icons/pi";

export const Doctor = () => {
  return (
    <div>
      <h3 className="font-semibold pb-2">Selected Doctor</h3>
      <div className="flex items-center gap-2 text-xs bg-white p-4 rounded-xl">
        {/* Doctor Picture --> */}
        <img
          src="https://i.ibb.co.com/d4XMM01r/woman-doctor-wearing-lab-coat-with-stethoscope-isolated-1303-29791.jpg"
          alt="doctor"
          className="w-32 h-36 object-cover rounded-2xl shadow-lg p-1"
        />

        {/* Doctor Information --> */}
        <div className="space-y-2.5">
          <h3 className="text-2xl font-semibold">Dr. Samia Rahman</h3>
          <p>MBBS, Diploma (Dermatologist), FCPS (London)</p>
          <div>
            <span className="text-blue-600 bg-blue-100 py-1 px-2 rounded-full">
              Dermatologist
            </span>
          </div>
          <div>
            <PiBuildingOfficeThin className="inline mr-1" /> Currently Working
            At
            <br />
            Popular Diagnostic Centre , Bogura
          </div>
        </div>
      </div>
    </div>
  );
};
