import { Dropdown } from 'flowbite-react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import proflie1 from '../../../Picture/proflie1.png'
import { Link ,useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false)
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
         // ดึง token จาก localStorage
         const accessToken = localStorage.getItem('access_token');

         // ใช้ token เพื่อดึงข้อมูลผู้ใช้จาก Django backend
         const response = await axios.get('http://127.0.0.1:8000/api/v1/auth/users/me/', {
          headers :{
            Authorization:`Bearer ${accessToken}`,
          },
         })

        setUserInfo(response.data);
      } catch(error) {
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
              <Link to="/dashboard" className="block py-2 px-3 text-white bg-blue-700 rounded xl:bg-transparent xl:text-blue-700 xl:p-0 dark:text-white xl:dark:text-blue-500" aria-current="page">รายการขอคำปรึกษา</Link>
            </li>
            <li>
              <Link to="/history" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">ประวัติคำถาม</Link>
            </li>
            <li>
              <Link to="/notifications" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">แจ้งเตือน</Link>
            </li>
          </ul>
        </div>
        <div class="relative inline-block text-center">
          <div className="container">
            <button onClick={() => setDropdown(val => !val)} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
             
              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" >
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          {dropdown ? (
          <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
              <a href="#" className="block px-16 py-2" role="menuitem" tabindex="-1"  ><img className="w-20 h-20 "src={proflie1} alt="" /></a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"> {userInfo.full_name}</a>
              <button onClick={() => navigate("/")} class="text-gray-700 flex flex-col  w-full px-4 py-2 text-center text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
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
