import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import loginimg from '../../../Picture/login.png';

function Login({ users, setCurrentUser }) {
  const navigate = useNavigate()
  const [setSaveData] = ("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // alert แจ้งเตือน
  const handleValidation = () => {
    if (email === "" && email === null) {
      alert("กรุณาใส่อีเมลของคุณ!");
      return false;
    } else if (pwd === "" && pwd === null) {
      alert("กรุณาใส่รหัสผ่านของคุณ!");
      return false;
    }
    setEmail("");
    setPwd("");
    return true;
  };

  // Check user
  const checkUser = () => {
    const emailCheck = users.find(
      (user) => user.email === email && user.pwd === pwd);
    if (emailCheck) {
      return true;
    } else {
      return false;
    }
  };

  // login event
  const login = (event) => {
    event.preventDefault(); // เมื่อไหร่ที่กดเข้าสู่ระบบจะทำการรีเฟรชและ save data

    if (handleValidation() === true && checkUser() === true) {
      users.find((user) => {
        //loop
        if (
          (user.email === email && user.pwd === pwd) === true
        ) {
          setCurrentUser({
            email: user.email,
          });
          setSaveData({
            email: user.email,
          });
        }
      });
      navigate("/dashboard");
    } else {
      alert("อีเมล หรือ รหัสผ่าน ไม่ถูกต้อง!");
    }
  };

  return (
    <div className="bg-[#091F59] h-screen flex justify-between">
      <div className='product flex items-center justify-center w-full h-full bg-[#091F59] '>
        <img className='w-96 h-96' src={loginimg} alt="product" />
      </div>
      <div className='bg-[#f8fafc] h-full w-[70rem] grid justify-items-center rounded-l-lg '>
        <div className='font-bold text-4xl text-[#091F59] pt-[15rem] my-[-4rem]'>Q&A Consult</div>
        <div className='font-regular text-xs text-[#7E7878] pt-1 my-8'>ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว</div>

        <div className='relative mt-[-51px] mb-[48px]'>
          <div className='font-regular text-sm text-[#091F59]'>อีเมล
            <input type="Email" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:'
            />
          </div>
        </div>
        <div className='mt-[-63px] mb-[48px]'>
          <div className='font-regular text-sm text-[#091F59]'>รหัสผ่าน
            <input type="Password" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:'

            />
          </div>
        </div>
        <div className='forgetpassword'>
          <p onClick={() => navigate("/forget")} id="helper-text-explanation" class="mt-[-5.5rem] pl-[205px] text-sm text-gray-500 dark:text-gray-400"><a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">ลืมรหัสผ่าน</a>?</p>
        </div>
        <div className='mt-[-63px] mb-[48px]'>
          <button onClick={() => navigate("/dashboard")} onKeyPress={(event) => {
            event.key === "Enter" && login();
          }} type="submit" class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800">เข้าสู่ระบบ</button>
        </div>
        <div className='textRegister'>
          <p onClick={() => navigate("/register")} id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">ไม่มีบัญชีใช่หรือไม่? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">ลงทะเบียน</a></p>
        </div>

        {/* <div className='relative mt-[-51px] mb-[48px]'>
          <div className='font-regular text-sm text-[#091F59]'>อีเมล
            <input type="Email" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='mt-[-63px] mb-[48px]'>
          <div className='font-regular text-sm text-[#091F59]'>รหัสผ่าน
            <input type="Password" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='forgetpassword'>
          <p id="helper-text-explanation" class="mt-[-5.5rem] pl-[205px] text-sm text-gray-500 dark:text-gray-400"><a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">ลืมรหัสผ่าน</a>?</p>
        </div>
        <div className='mt-[-63px] mb-[48px]'>
          <button type="button" class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800">เข้าสู่ระบบ</button>
        </div>
        <div className='textRegister'>
          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">ไม่มีบัญชีใช่หรือไม่? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">ลงทะเบียน</a></p>
        </div> */}

      </div>
    </div >
  )
}

export default Login



// import React from "react";
// import "./Login.css";
// import login from "../../../Picture/login.png";

// const Login = () => {
//   return (
//     <div className="bg-primary h-screen grid grid-cols-login lg:grid-cols-1">
//       <div className="flex items-center justify-center w-full h-full bg-primary">
//         <img className="w-96 h-96" src={login} alt="product" />
//       </div>
//       <div className="bg-slate-50 flex flex-col justify-center items-center relative">
//         <div className="space-y-9">
//           <div className="font-bold text-center text-4xl text-prbg-primary">
//             Q&A Consult
//           </div>
//           <div className="font-regular text-center text-xs text-custom-gray">
//             ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว
//           </div>
//           <div className="relative">
//             <div className="font-regular text-sm text-prbg-primary">
//               อีเมล
//               <input
//                 type="Email"
//                 className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
//               />
//             </div>
//           </div>
//           <div className="">
//             <div className="font-regular text-sm text-prbg-primary">
//               รหัสผ่าน
//               <input
//                 type="Password"
//                 className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
//               />
//             </div>
//           </div>
//           <div className="w-full text-right">
//             <p className="font-medium text-blue-600 hover:underline dark:text-blue-500">
//               ลืมรหัสผ่าน{" "}
//               <span className="text-sm text-gray-500 dark:text-gray-400">
//                 ?
//               </span>
//             </p>
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               type="button"
//               className="text-white bg-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               เข้าสู่ระบบ
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center justify-center absolute bottom-0 my-28 lg:my-4 sm:my-0 sm:relative">
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             ไม่มีบัญชีใช่หรือไม่?{" "}
//             <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">
//               ลงทะเบียน
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

