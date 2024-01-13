import { React, useState } from "react";
import regisofficer from "../../../Asset/register-officer.png";

const Register = () => {

  return (
    <div className="bg-[#091F59] h-screen flex justify-between ">
      <div className="bg-[#f8fafc] h-full w-[104rem] grid justify-items-center rounded-r-lg">
        <div className="font-bold text-4xl text-[#091F59] pt-40">
          Q&A Consult
        </div>
        <div className="px-7  font-regular text-xs text-[#7E7878]">
          ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว
        </div>
        <form>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              ชื่อ-นามสกุล
              <input
                type="text"
                className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              เบอร์โทร
              <input
                type="tel"
                className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              อีเมล
              <input
                type="email"
                className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              รหัสผ่าน
              <input
                type="password"
                className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              ยืนยันรหัสผ่าน
              <input
                type="password"
                className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="flex justify-center flex-col space-y-4 mx-2">
              <button
                type="submit"
                class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center  dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ลงทะเบียน
              </button>
            </div>
          </div>
        </form>

      </div>
      <div className="product flex items-center justify-center w-full h-full bg-[#091F59] ">
        <img className="w-72 h-72" src={regisofficer} alt="product" />
      </div>
    </div>
  );
};

export default Register;
