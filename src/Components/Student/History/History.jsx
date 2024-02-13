import React from 'react'
import Header from '../../Layout/Header/Header'
import { Link } from "react-router-dom";

function History() {
  return (
    <div>
      <Header />
      <div className='ltr'>
        <div className='ms-48 p-4 text-medium text-black' >ประวัติคำถาม</div>
      </div>
      <div className='max-w-screen-xl flex flex-col items-center justify-around mx-auto p-4 '>
        <div className=''>
          <div class="relative overflow-x-auto rounded-md">
            <table class="w-full text-sm text-left rtl:text-right  text-black dark:text-black">
              <thead class="text-xs text-white uppercase bg-[#091F59] dark:bg-[#091F59] dark:text-white-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    รหัสหัวข้อ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อหัวข้อ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ชื่อผู้ขอคำปรึกษา
                  </th>
                  <th scope="col" class="px-6 py-3">
                    วันที่เสร็จสิ้น
                  </th>
                  <th scope="col" class="px-6 py-3">
                    สถานะ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-green-100 border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    UP01
                  </th>
                  <td class="px-6 py-4">
                    คำร้องขอส่งใบรับรองแพทย์
                  </td>
                  <td class="px-6 py-4">
                    เยาวลักษณ์
                  </td>
                  <td class="px-6 py-4">
                    8 ธ.ค. 2566 10:00:00
                  </td>
                  <td class="px-6 py-4">
                    <Link to="/completed">เสร็จสิ้น</Link>
                  </td>
                </tr>
                <tr class="bg-green-100 border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    UP08
                  </th>
                  <td class="px-6 py-4">
                    คำร้องขอถอนรายวิชา โดยได้รับอักษร W
                  </td>
                  <td class="px-6 py-4">
                    เยาวลักษณ์
                  </td>
                  <td class="px-6 py-4">
                    8 ธ.ค. 2566 10:00:00
                  </td>
                  <td class="px-6 py-4">
                    เสร็จสิ้น
                  </td>
                </tr>
                <tr class="bg-green-100 border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    UP09
                  </th>
                  <td class="px-6 py-4">
                    คำร้องขอเทียบโอนรายวิชา
                  </td>
                  <td class="px-6 py-4">
                    เยาวลักษณ์
                  </td>
                  <td class="px-6 py-4">
                    8 ธ.ค. 2566 10:00:00
                  </td>
                  <td class="px-6 py-4">
                    เสร็จสิ้น
                  </td>
                </tr>
                <tr class="bg-green-100 border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    UP03.1
                  </th>
                  <td class="px-6 py-4">
                    คำร้องขอใบรายงานผลการศึกษา (Digital Transcript)
                  </td>
                  <td class="px-6 py-4">
                    เยาวลักษณ์
                  </td>
                  <td class="px-6 py-4">
                    8 ธ.ค. 2566 10:00:00
                  </td>
                  <td class="px-6 py-4">
                    เสร็จสิ้น
                  </td>
                </tr>
                <tr class="bg-green-100 border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    UP01
                  </th>
                  <td class="px-6 py-4">
                    คำร้องทั่วไป
                  </td>
                  <td class="px-6 py-4">
                    เยาวลักษณ์
                  </td>
                  <td class="px-6 py-4">
                    8 ธ.ค. 2566 10:00:00
                  </td>
                  <td class="px-6 py-4">
                    เสร็จสิ้น
                  </td>
                </tr>
                <tr class="bg-green-100 border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    UP01
                  </th>
                  <td class="px-6 py-4">
                    คำร้องทั่วไป
                  </td>
                  <td class="px-6 py-4">
                    เยาวลักษณ์
                  </td>
                  <td class="px-6 py-4">
                    8 ธ.ค. 2566 10:00:00
                  </td>
                  <td class="px-6 py-4">
                    เสร็จสิ้น
                  </td>
                </tr>
                <tr class="bg-green-100 border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    UP01
                  </th>
                  <td class="px-6 py-4">
                    คำร้องทั่วไป
                  </td>
                  <td class="px-6 py-4">
                    เยาวลักษณ์
                  </td>
                  <td class="px-6 py-4">
                    8 ธ.ค. 2566 10:00:00
                  </td>
                  <td class="px-6 py-4">
                    เสร็จสิ้น
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>


    </div>
  )
}

export default History
