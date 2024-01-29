import { React, useState } from "react";
import regisofficer from "../../../Asset/register-officer.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    tel: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [errors, setErrors] = useState({
    full_name: false,
    tel: false,
    email: false,
    password: false,
    re_password: false,
  });


  const { full_name, tel, email, password, re_password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: false,
    }))
  };

  const navigate = useNavigate();

  // Create User
  const createUser = (event) => {
    event.preventDefault();

    let hasError = false;

    //ตรวจสอบ
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = true;
        hasError = true;
      }
    })

    // ตรวจรหัส
    if (formData.password !== formData.re_password) {
      newErrors['password'] = true;
      newErrors['re_password'] = true;
      hasError = true;
    }

    // ถ้ามีข้อผิดพลาดให้ตั้ง state ใหม่
    if (hasError) {
      setErrors(newErrors);
      //แสดง แจ้งเตือน
      window.alert('กรุณากรอกข้อมูลให้ครบทุกช่อง')
      return;
    }

    let url = "http://127.0.0.1:8000/api/v1/auth/users/";

    axios
      .post(url, formData)
      .then(() => {
        setFormData({
          full_name: "",
          tel: "",
          email: "",
          password: "",
          re_password: "",
        });

        navigate("/loginOF");
        refreshPage();
      })
      .catch((err) => console.log(err));
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  console.log(formData);

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
                type="text" name="full_name" onChange={handleChange} value={full_name} required
                className={`block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 ${
                  errors.full_name && 'border-red-500'
                } appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]`}
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              เบอร์โทร
              <input
                type="tel" name="tel"
                onChange={handleChange}
                value={tel}
                required
                className={`block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 ${
                  errors.tel && 'border-red-500'
                } appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]`}
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              อีเมล
              <input
                type="email" name="email"
                onChange={handleChange}
                value={email}
                required
                className={`block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 ${
                  errors.email && 'border-red-500'
                } appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]`}
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              รหัสผ่าน
              <input
                type="password" name="password"
                onChange={handleChange}
                value={password}
                required
                className={`block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 ${
                  errors.password && 'border-red-500'
                } appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]`}
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="font-regular text-sm text-[#091F59]">
              ยืนยันรหัสผ่าน
              <input
                type="password" name="re_password"
                onChange={handleChange}
                value={re_password}
                required
                className={`block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 ${
                  errors.re_password && 'border-red-500'
                } appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]`}
              />
            </div>
          </div>
          <div className="px-7 py-1">
            <div className="flex justify-center flex-col space-y-4 mx-2">
              <button
                type="submit"
                onClick={createUser}
                onKeyPress={(event) => {
                  event.key === "Enter" && createUser();
                }}
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
