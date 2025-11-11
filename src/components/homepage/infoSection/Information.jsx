import React from "react";
import { TiPinOutline } from "react-icons/ti";

export const Information = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 mt-4 space-y-4">
      {/* Information Section -->
            <!-- info 01 --> */}
      <div>
        <div className="flex items-center gap-2 font-semibold mb-2">
          <TiPinOutline />
          <h3>Prescription Access</h3>
        </div>
        <p className="font-thin text-xs">
          You’ll be able to view and download your prescription directly from
          the appointment details page once your consultation is complete.
        </p>
      </div>
      {/* info 02 --> */}
      <div>
        <div className="flex items-center gap-2 font-semibold mb-2">
          <TiPinOutline />
          <h3>Pre-Appointment Instructions</h3>
        </div>
        <p className="font-thin text-xs">
          If any special prep is needed (like fasting or pausing meds), we’ll
          let you know ahead of time via email or SMS.
        </p>
      </div>
      {/* info 03 --> */}
      <div>
        <div className="flex items-center gap-2 font-semibold mb-2">
          <TiPinOutline />
          <h3>Online Check-In</h3>
        </div>
        <p className="font-thin text-xs">
          Some doctors may ask you to fill out a quick online form before your
          session — it helps them prep better for you.
        </p>
      </div>
      {/* info 04 --> */}
      <div>
        <div className="flex items-center gap-2 font-semibold mb-2">
          <TiPinOutline />
          <h3>Confirmation & Reminders</h3>
        </div>
        <p className="font-thin text-xs">
          You’ll receive a confirmation via email or text right after booking.
          We’ll also send reminders before your appointment so you don’t miss
          it.
        </p>
      </div>
    </div>
  );
};
