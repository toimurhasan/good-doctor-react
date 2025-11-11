import React from "react";
import { Doctor } from "../components/homepage/selectedDoctor/Doctor";
import { Family } from "../components/homepage/selectedDoctor/Family";
import { Information } from "../components/homepage/infoSection/Information";
import { Calender } from "../components/homepage/doctorSchedule/Calender";
import { Timeblocks } from "../components/homepage/doctorSchedule/Timeblocks";
import { Coupon } from "../components/homepage/videoConsult/Coupon";
import { VideoConsult } from "../components/homepage/videoConsult/VideoConsult";
import { PaymentSummary } from "../components/homepage/paymentSummary/PaymentSummary";

export const Layout = () => {
  return (
    <div className="grid md:grid-cols-8 max-w-7xl xl:mx-auto my-6 gap-4 mx-2">
      <div className="md:col-span-3">
        {/* Selected Doctor Section */}
        <div className="bg-gray-100 rounded-xl p-4">
          <Doctor />
          <Family />
        </div>
        <Information />
      </div>

      <div className="md:col-span-5 self-start">
        <div className="p-4 bg-gray-100 rounded-xl">
          {/* Doctor Schedules Section  */}
          <h3 className="font-semibold pb-2">Doctor Schedules</h3>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-5 md:flex justify-center">
              <Calender />
            </div>
            <div className="md:col-span-7">
              <Timeblocks />
            </div>
          </div>
        </div>

        <div className="col-span-5 bg-gray-100 rounded-xl mt-4 p-4">
          <div className="grid md:grid-cols-12 gap-3">
            {/* Schedule Video Consultation Section  */}
            <div className="md:col-span-5">
              <VideoConsult />
            </div>
            {/* Coupon Code  */}
            <div className="md:col-span-7 ">
              <Coupon />
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-gray-100 rounded-xl mt-4 p-4">
          <div>
            {/* Payment Summary Section  */}
            <PaymentSummary />
          </div>
        </div>
      </div>
    </div>
  );
};
