import React from "react";

const Monitor = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b-2 border-b-[#002956] flex items-center justify-between py-4 px-32">
        <div className="rounded-[30px] py-4 px-6 flex flex-col items-center bg-white w-[45%]">
          <h1 className="text-[#808080] text-[20px] font-extrabold mb-3">
            Pothole Indicator
          </h1>
          <div className="flex items-center justify-between w-full px-10">
            <p className="text-[#1259A5] text-[20px] font-bold">True</p>
            <p className="text-[#165DA969] text-[20px] font-bold">False</p>
          </div>
        </div>
        <div className="rounded-[30px] py-4 px-6 flex flex-col items-center bg-white w-[45%]">
          <h1 className="text-[#808080] text-[20px] font-extrabold mb-3">
            Bump Indicator
          </h1>
          <div className="flex items-center justify-between w-full px-10">
            <p className="text-[#1259A5] text-[20px] font-bold">True</p>
            <p className="text-[#165DA969] text-[20px] font-bold">False</p>
          </div>
        </div>
      </div>
      <div className="mt-20 w-[80%] self-center"></div>
    </div>
  );
};

export default Monitor;
