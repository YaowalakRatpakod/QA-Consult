import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from "../../../Picture/login.png";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!email) {
        throw new Error("กรุณากรอกอีเมล");
      }
      if (!password) {
        throw new Error("กรุณากรอกรหัสผ่าน");
      }
      
      // response
      const response = await fetch('http://localhost:8000/api/v1/auth/jwt/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          password: password,
         }),
      });

      const data = await response.json();

      if (!response.ok){
        throw new Error(data.detail || 'เข้าสู่ระบบไม่สำเร็จ');
      }

      // เก็บ token ที่ได้จากการ login ไว้ใน localStorage
      localStorage.setItem('token', data.access);

      // // ดึงข้อมูลผู้ใช้งานจาก Django API
      // const userResponse = await fetch('http://localhost:8000/api/v1/auth/user/', {
      //   method: 'GET',
      //   headers: {
      //     'Authorization': `Bearer ${data.access}`,
      //   },
      // });

      // const userData = await userResponse.json();

      // if (!userResponse.ok) {
      //   throw new Error(userData.detail || 'Failed to fetch user data');
      // }

      // console.log('User data:', userData);


      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      setError(error.message);
    }

    console.log("Email:", email);
    console.log("Password:", password);

    setIsLoading(false);
  };

  return (
    <div className="bg-[#091F59] h-screen flex justify-between">
      <div className="product flex items-center justify-center w-full h-full bg-[#091F59] ">
        <img className="w-96 h-96" src={loginimg} alt="product" />
      </div>
      <div className="bg-[#f8fafc] h-full w-[70rem] rounded-l-lg  ">
        <div className="flex flex-col space-y-2">
          <div className="font-bold text-4xl text-center text-[#091F59] pt-44 ">
            Q&A Consult
          </div>
          <div className="font-regular text-xs text-center text-[#7E7878]  ">
            ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว
          </div>
        </div>

        <form>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-center">
              <div className="font-regular text-sm text-[#091F59]">
                อีเมล
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
                />
                <div className="text-red-500 text-sm text-center">{error}</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="font-regular text-sm text-[#091F59]">
                รหัสผ่าน
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
                />
                <div className="w-full text-right ">
                  <p
                    onClick={() => navigate("/forget")}
                    id="helper-text-explanation"
                    class="text-sm text-gray-500 dark:text-gray-400"
                  >
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      ลืมรหัสผ่าน
                    </a>
                    ?
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
          <div className="flex justify-center ">
            <p
              id="helper-text-explanation"
              class="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              ไม่มีบัญชีใช่หรือไม่?{" "}
              <a
                onClick={() => navigate("/register")}
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                ลงทะเบียน
              </a>
            </p>
          </div>
        </form>

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
    </div>
  );
}

export default Login;

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
