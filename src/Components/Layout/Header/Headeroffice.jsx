import React from 'react';
import NavOf from './NavOf';

const Headeroffice = () => {
    return (
        <header>
             <div className="bg-[#000000] sticky top-0 z-[20] flex w-full border-gray-500 p-5 ">
                     {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                     <span className="pr-4 text-xl font-semibold whitespace-nowrap text-[#F2F0DE]">Q&A Consult</span>
                     <NavOf />
                
                {/* <div className="hidden w-full xl:block xl:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 xl:bg-white dark:bg-[#091F59] xl:dark:bg-[#091F59] dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded xl:bg-transparent xl:text-blue-700 xl:p-0 dark:text-white xl:dark:text-blue-500" aria-current="page">รายการขอคำปรึกษา</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">สถิติ</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">ประวัติคำถาม</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">แจ้งเตือน</a>
                        </li> */} 
                        {/* <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
                            <span className="sr-only">Open user menu</span>
                            {/* <img className="w-8 h-8 me-2 rounded-full" src="" alt="user photo"/> */}
                            {/* เยาวลักษณ์ ราชปรากฎ
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button> */} 
                        {/* <div id="dropdownAvatarName" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div className="font-medium ">Pro User</div>
                                <div className="truncate">name@flowbite.com</div>
                            </div>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                            </ul>
                            <div className="py-2">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </div>
                        </div> */}
                    {/* </ul>

                </div> */}
            </div>
        </header>
    )
}
export default Headeroffice;