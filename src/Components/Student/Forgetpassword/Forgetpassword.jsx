import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import forgetpassword from "../../../Picture/forgetpassword.png";

const Forgetpassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    })
    );
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const userData = {
    //   email,
    // };
  };

  return (
    <div className="bg-[#091F59] h-screen flex justify-between">
      <div className="product  flex items-center justify-center w-full h-full bg-[#091F59] ">
        <img className="w-96 h-96" src={forgetpassword} alt="product" />
      </div>
      <div className="bg-[#f8fafc] h-full w-[70rem] grid justify-items-center rounded-l-lg ">
        <div className="font-bold text-4xl text-[#091F59] pt-[15rem] my-[-4rem] pr-[8rem]">
          ลืม
          <br />
          รหัสผ่านของคุณ?
        </div>
        <div className="relative mt-[-3px] mb-[78px] mr-[89px]">
          <div className="font-regular text-sm text-[#091F59]">
            อีเมล
            <input
              type="email" name="email"
              onChange={handleChange} value={email} required
              className="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:"
            />
          </div>
        </div>
        <div className="mt-[-63px] mb-[48px] mr-[108px]">
          <button
            type="submit" onClick={handleSubmit}
            class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            รีเซ็ตรหัสผ่าน
          </button>
        </div>
        <div className="backlogin">
          <p
            onClick={() => navigate("/")}
            id="helper-text-explanation"
            class="mt-[-8.5rem] pr-[117px] text-sm text-gray-500 dark:text-gray-400"
          >
            <a
              href="#"
              class="font-medium text-[#7E7878] hover:underline dark:text-[#7E7878]"
            >
              กลับหน้าล็อคอิน
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
