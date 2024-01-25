import React, { useState } from 'react'
import proflie2 from '../../../Picture/proflie2.png'
import { Link, useNavigate } from "react-router-dom";

const Headeroffice = () => {
    const [dropdown, setDropdown] = useState(false)
    const navigate = useNavigate();

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
                            <Link to="/dashboardOF" className="block py-2 px-3 text-white bg-blue-700 rounded xl:bg-transparent xl:text-blue-700 xl:p-0 dark:text-white xl:dark:text-blue-500" aria-current="page">รายการขอคำปรึกษา</Link>
                        </li>
                        <li>
                            <Link to="/statistic" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">สถิติ</Link>
                        </li>
                        <li>
                            <Link to="/historyOF" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">ประวัติคำถาม</Link>
                        </li>
                        <li>
                            <Link to="/notificationOF" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">แจ้งเตือน</Link>
                        </li>
                    </ul>
                </div>
                <div class="relative inline-block text-center">
                    <div className="container">
                        <button onClick={() => setDropdown(val => !val)} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            เจ้าหน้าที่บุษบา นำพาใจ
                            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" >
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {dropdown ? (
                        <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-4 flex flex-col justify-center items-center" role="none">
                                <a href="#" className="py-2" ><img className="w-20 h-20 " src={proflie2} alt="" /></a>
                                <a href="#" className="text-gray-700 block text-sm py-2">เจ้าหน้าที่บุษบา นำพาใจ</a>

                                <button onClick={() => navigate("/loginOF")} class="text-gray-700 rounded-full shadow-lg bg-red-200  text-center text-sm px-3 py-2 ">ออกจากระบบ</button>

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
export default Headeroffice;