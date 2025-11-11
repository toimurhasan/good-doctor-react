import React from "react";

export const PaymentSummary = () => {
  return (
    <>
      <h3 className="font-semibold pb-2">Payment Summary</h3>
      <div>
        <div className="text-sm bg-white p-4 rounded-xl space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-500"> Consultation Fee</p>
            <p>৳800</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500"> VAT (3%)</p>
            <p className="text-gray-500">৳30</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Platform Fee</p>
            <p className="text-gray-500">৳20</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Coupon Discount</p>
            <p className="text-gray-500">(-)৳100</p>
          </div>
          <div className="flex justify-between border-t pt-4 border-dashed border-blue-500">
            <p>Total Payable</p>
            <p>৳750</p>
          </div>
          <div className="md:flex gap-2 items-center">
            <input type="checkbox" /> I agree to the{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms & Conditions , Privacy Policy and Refund
            </span>{" "}
            &{" "}
            <span className="text-blue-600 cursor-pointer">Return Policy</span>
          </div>
        </div>
        <div className="flex gap-4 mt-4 text-sm">
          <button className="border border-blue-500 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white rounded-full py-2 w-full">
            Go Back
          </button>
          <button className="w-full bg-blue-500 text-white cursor-pointer hover:bg-blue-600 rounded-full">
            Confirm & Pay
          </button>
        </div>
      </div>
    </>
  );
};
