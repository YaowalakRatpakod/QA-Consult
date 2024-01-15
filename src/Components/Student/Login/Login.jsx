import React, { useState , useEffect } from "react";
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
        throw new Error("*กรุณากรอกอีเมล");
      }
      if (!password) {
        throw new Error("*กรุณากรอกรหัสผ่าน");
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
                <p className="text-red-500 text-sm ">{error}</p>
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
                <p className="text-red-500 text-sm ">{error}</p>
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
      </div>
    </div>
  );
}

export default Login;


//Alert ได้แล้ว กด เข้าสู้ระบบจะเอาข้อมมูลไปเช็คหลังบ้าน
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import loginimg from "../../../Picture/login.png";


// function Login() {
//     const navigate = useNavigate();
//     const initialValues = { email: "", password: "" };
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);
//         const response = await fetch('http://localhost:8000/api/v1/auth/jwt/create/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: formValues.email,
//                 password: formValues.password,
//             }),
//         });

//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error(data.detail || 'เข้าสู่ระบบไม่สำเร็จ');
//         }

//         // เก็บ token ที่ได้จากการ login ไว้ใน localStorage
//         localStorage.setItem('token', data.access);

//         console.log("Email:", formValues.email);
//         console.log("Password:", formValues.password);
//     };

//     useEffect(() => {
//         console.log(formErrors);
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//             console.log(formValues);
//         }
//     }, [formErrors]);
//     const validate = (values) => {
//         const errors = {};
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//         if (!values.email) {
//             errors.email = "*กรุณาใส่อีเมล";
//         } 
//         // else if (!regex.test(values.email)) {
//         //     errors.email = "This is not a valid email format!";
//         // }
//         if (!values.password) {
//             errors.password = "*กรุณาใส่รหัสผ่าน";
//         }
//         // } else if (values.password.length < 4) {
//         //   errors.password = "Password must be more than 4 characters";
//         // } else if (values.password.length > 10) {
//         //   errors.password = "Password cannot exceed more than 10 characters";
//         // }
//         return errors;
//     };



//     return (
//         <div className="bg-[#091F59] h-screen flex justify-between">
//             <div className="product flex items-center justify-center w-full h-full bg-[#091F59] ">
//                 <img className="w-96 h-96" src={loginimg} alt="product" />
//             </div>
//             <div className="bg-[#f8fafc] h-full w-[70rem] rounded-l-lg  ">
//                 <div className="flex flex-col space-y-2">
//                     <div className="font-bold text-4xl text-center text-[#091F59] pt-44 ">
//                         Q&A Consult
//                     </div>
//                     <div className="font-regular text-xs text-center text-[#7E7878]  ">
//                         ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว
//                     </div>
//                 </div>

//                 <form>
//                     <div className="flex flex-col space-y-4">
//                         <div className="flex items-center justify-center">
//                             <div className="font-regular text-sm text-[#091F59]">
//                                 อีเมล
//                                 <input
//                                     type="text"
//                                     name="email"
//                                     placeholder="Email"
//                                     value={formValues.email}
//                                     onChange={handleChange}
//                                     className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
//                                 />
//                                 <p className="text-red-500 text-sm ">{formErrors.email}</p>
//                                 {/* <p className="text-red-500 text-sm ">{error}</p> */}
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-center">
//                             <div className="font-regular text-sm text-[#091F59]">
//                                 รหัสผ่าน
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     value={formValues.password}
//                                     onChange={handleChange}
//                                     className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
//                                 />
//                                 <p className="text-red-500 text-sm ">{formErrors.password}</p>
//                                 {/* <p className="text-red-500 text-sm ">{error}</p> */}
//                                 <div className="w-full text-right ">
//                                     <p
//                                         onClick={() => navigate("/forget")}
//                                         id="helper-text-explanation"
//                                         class="text-sm text-gray-500 dark:text-gray-400"
//                                     >
//                                         <a
//                                             href="#"
//                                             class="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                                         >
//                                             ลืมรหัสผ่าน
//                                         </a>
//                                         ?
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-center">
//                             <button
//                                 type="submit"
//                                 onClick={handleSubmit}
//                                 class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                             >
//                                 เข้าสู่ระบบ
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex justify-center ">
//                         <p
//                             id="helper-text-explanation"
//                             class="mt-2 text-sm text-gray-500 dark:text-gray-400"
//                         >
//                             ไม่มีบัญชีใช่หรือไม่?{" "}
//                             <a
//                                 onClick={() => navigate("/register")}
//                                 class="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                             >
//                                 ลงทะเบียน
//                             </a>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;


