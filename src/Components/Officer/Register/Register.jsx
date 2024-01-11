import { React, useState } from "react";
import regisofficer from "../../../Asset/register-officer.png";

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  return (
    <>
      <div className="bg-[#091F59] h-screen flex">
        <div className="bg-[#F7F2EB] h-full w-[104rem] grid justify-items-center rounded-r-lg">
          <div className="font-bold text-4xl text-[#091F59] pt-14">
            Q&A Consult
          </div>
          <div className="font-regular text-xs text-[#7E7878]">
            ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว
          </div>
          <form className="relative my-0">
            <div className="font-regular text-base text-[#091F59]">
              ชื่อ-นามสกุล
              <input
                className="block w-72 py-0 px-0 text-base text-black bg-transparent border-0 border-b-2 border--[#091F59] appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
                type="text"
                name="full_name"
              />
            </div>
            <div className="font-regular text-base text-[#091F59]">
              เบอร์โทร
              <input
                className="block w-72 py-2.3 px-0 text-base text-black bg-transparent border-0 border-b-2 border--[#091F59] appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
                type="phone"
                name="phone"
              />
            </div>
            <div className="font-regular text-base text-[#091F59]">
              อีเมล
              <input
                className="block w-72 py-2.3 px-0 text-base text-black bg-transparent border-0 border-b-2 border--[#091F59] appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
                type="email"
                name="email"
              />
            </div>
            <div className="font-regular text-base text-[#091F59]">
              รหัสผ่าน
              <input
                className="block w-72 py-2.3 px-0 text-base text-black bg-transparent border-0 border-b-2 border--[#091F59] appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
                type="password"
                name="password"
              />
            </div>
            <div className="font-regular text-base text-[#091F59]">
              ยืนยันรหัสผ่าน
              <input
                className="block w-72 py-2.3 px-0 text-base text-black bg-transparent border-0 border-b-2 border--[#091F59] appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
                type="password"
                name="re_password"
              />
            </div>
            <button
              class=" text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
              onClick={() => console.log("Register Successfully")}
            >
              ลงทะเบียน
            </button>
          </form>
        </div>
        <div className="product flex items-center justify-center w-full h-full bg-[#091F59] ">
          <img className="w-72 h-72" src={regisofficer} alt="product" />
        </div>
      </div>
    </>
  );
};

export default Register;
