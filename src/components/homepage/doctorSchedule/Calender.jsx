import React from "react";

export const Calender = () => {
  return (
    <div className="flex items-center gap-2 text-xs ">
      <div className="bg-white rounded-xl pt-7 pb-6.5 px-6 xl:w-[311px] w-full t-1.5">
        {/* <!-- Month --> */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold">June 2025</h2>
          <p>
            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>

        {/* <!-- Days of the week --> */}
        <div className="grid grid-cols-7 gap-2 text-gray-500 text-sm font-medium mb-2">
          <div className="text-center">Sun</div>
          <div className="text-center">Mon</div>
          <div className="text-center">Tue</div>
          <div className="text-center">Wed</div>
          <div className="text-center">Thu</div>
          <div className="text-center">Fri</div>
          <div className="text-center">Sat</div>
        </div>

        {/* <!-- Dates --> */}
        <div className="grid grid-cols-7 gap-2">
          {/* <!-- Empty placeholders for previous month's days --> */}
          <div></div>
          <div></div>

          {/* <!-- Dates --> */}
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            1
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            2
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            3
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            4
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            5
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            6
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            7
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            8
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            9
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            10
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            11
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            12
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            13
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            14
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            15
          </div>

          {/* <!-- Selected day --> */}
          <div className="text-center py-1.5 rounded-full bg-blue-600 text-white cursor-pointer">
            16
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full border hover:bg-gray-200 border-blue-600 text-blue-600 cursor-pointer">
            17
          </div>

          {/* <!-- Remaining days --> */}
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            18
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            19
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            20
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            21
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            22
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            23
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            24
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            25
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            26
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            27
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            28
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            29
          </div>
          <div className="bg-gray-100 text-center py-1.5 rounded-full hover:bg-gray-200 cursor-pointer">
            30
          </div>
        </div>
      </div>
    </div>
  );
};
