import React from "react";
export default function TopBar() {
  return (
    <>
      <div className="bar w-[100%] h-[30px] bg-[#000] text-white">
        <div className="barinner w-[80%] flex justify-between  ml-[5%]">
          <p className="ml-[30%] text-[13px] pt-[5px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<a>shop Now</a>
          </p>
          <select name="" id="" className="text-b border-0 outline-0 bg-transparent">
            <option value="" className="text-black">english</option>
            <option value="" className="text-black">english</option>
            <option value="" className="text-black">english</option>
            <option value="" className="text-black">english</option>
          </select>
        </div>
      </div>
    </>
  );
}
