import React from 'react'
import Headeroffice from '../../Layout/Header/Headeroffice'
import { Link, useNavigate } from "react-router-dom";


const dashboard = () => {

  return (
    <div>
      <Headeroffice />
      <div className='ltr'>
        <div className='ms-48 p-4 text-medium text-black' >รายการขอคำปรึกษา</div>
        <div className='max-w-screen-xl flex flex-col items-center justify-around mx-auto p-4 '>
          <div className=''>
            <div class="relative overflow-x-auto rounded-md">
              <table class="w-full text-sm text-left rtl:text-right  text-black dark:text-black">
                <thead class="text-xs text-white uppercase bg-[#091F59] dark:bg-[#091F59] dark:text-white-400">
                  <tr>
                    <th scope="col" class="px-6 py-3" >
                      ลำดับ
                    </th>
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
                      วันที่ยื่น
                    </th>
                    <th scope="col" class="px-6 py-3">
                      วันที่รับเรื่อง
                    </th>
                    <th scope="col" class="px-6 py-3">
                      สถานะ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-[#F2F1DF] border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                      1
                    </th>
                    <td class="px-6 py-4">
                      UP01
                    </td>
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

                    </td>
                    <td class="px-6 py-4">
                      <Link to="/waitingOF" >รอดำเนินการ</Link>
                    </td>
                  </tr>
                  <tr class="bg-[#F2F1DF] border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                      2
                    </th>
                    <td class="px-6 py-4">
                      UP01
                    </td>
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
                      8 ธ.ค. 2566 10:40:00
                    </td>
                    <td class="px-6 py-4">
                      <Link to="/inprogressOF" >กำลังดำเนินการ</Link>
                    </td>
                  </tr>
                  <tr class="bg-[#F2F1DF] border-b dark:bg-[#F2F1DF] dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                      3
                    </th>
                    <td class="px-6 py-4">
                      UP01
                    </td>
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
                      8 ธ.ค. 2566 10:40:00
                    </td>
                    <td class="px-6 py-4">
                      <Link to="/appointmentOF" >การนัดหมาย</Link>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default dashboard