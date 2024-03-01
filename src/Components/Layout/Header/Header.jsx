import { Dropdown } from 'flowbite-react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import proflie1 from '../../../Picture/proflie1.png'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false)
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // ดึง token จาก localStorage
        const accessToken = localStorage.getItem('access_token');
        // กำหนดข้อมูลที่จะส่งไปยัง django
        const requestData = {
            full_name: userInfo.full_name}

        // ใช้ token เพื่อดึงข้อมูลผู้ใช้จาก Django backend
        const response = await axios.get('http://127.0.0.1:8000/api/v1/auth/users/me/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        setUserInfo(response.data);
      } catch (error) {
        console.error('Failed to fetch user info', error)
      }
    }
    fetchUserInfo();
  }, []);



  return (
    <nav className="bg-[#091F59] border-gray-200 dark:bg-[#091F59]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
        <a href="{{< param homepage >}}/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">Q&A Consult</span>
        </a>

        <div className="hidden w-full xl:block xl:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 xl:bg-[#091F59] dark:bg-[#091F59] xl:dark:bg-[#091F59] dark:border-gray-700">
            <li>
              <Link to="/dashboard" className="block py-2 px-3 text-white bg-blue-700 rounded xl:bg-transparent xl:p-0 dark:text-white  xl:hover:text-blue-700" aria-current="page">รายการขอคำปรึกษา</Link>
            </li>
            <li>
              <Link to="/history" className="block py-2 px-3 text-white bg-blue-700 rounded xl:bg-transparent xl:p-0 dark:text-white  xl:hover:text-blue-700">ประวัติคำถาม</Link>
            </li>

          </ul>
        </div>
        <div class="relative inline-block text-center">
          <div className="container">
            <button onClick={() => setDropdown(val => !val)} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {userInfo.full_name}
              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" >
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          {dropdown ? (
            <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-4 flex flex-col justify-center items-center" role="none">
                <a href="#" className="py-2"  ><img className="w-20 h-20 " src={proflie1} alt="" /></a>
                <a href="#" className="text-gray-700  text-sm py-2" >{userInfo.full_name}</a>
                <button onClick={() => navigate("/")} class="text-gray-700 rounded-full shadow-lg bg-red-200  text-center text-sm px-3 py-2 " >ออกจากระบบ</button>
              </div>
            </div>
          ) : (
            <></>
          )}

        </div>
      </div>
    </nav>
  )
}

export default Header