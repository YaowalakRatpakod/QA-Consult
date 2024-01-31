import React, { useState, useEffect } from 'react';
import Header from '../../Layout/Header/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios'


function Dashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);

  useEffect(() => {
    // เรียกข้อมูลคำขอปรึกษาที่สร้างขึ้นใหม่
    axios.get('http://127.0.0.1:8000/api/user-consultation-requests/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('accessToken')}` // ส่ง Token ใน request
      }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching consultation requests:', error);
      });
  }, []);



  return (
    <div>
      <Header />
      <div className='ltr'>
        <div className='ms-48 p-4 text-medium text-black' >รายการขอคำปรึกษา</div>
        <div className='ms-52 p-1'>
          <button onClick={() => navigate("/createreq")} type="button" className="text-black bg-[#D1E4FF] shadow-lg hover:bg-[#D1E4FF]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
            {/* <svg aria-hidden="true" class="w-10 h-3 me-2 -ms-1" viewBox="0 0 256 64" fill="none" xmlns="http://www.w3.org/2000/svg"><img d="" fill="white" /></svg> */}
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.5 26.25H8.75V10.5H19.25V8.75H8.75C7.7875 8.75 7 9.5375 7 10.5V26.25C7 27.2125 7.7875 28 8.75 28H24.5C25.4625 28 26.25 27.2125 26.25 26.25V15.75H24.5V26.25Z" fill="black" />
              <path d="M12.25 14V15.75H19.25H21V14H12.25Z" fill="black" />
              <path d="M12.25 17.5H21V19.25H12.25V17.5Z" fill="black" />
              <path d="M12.25 21H21V22.75H12.25V21Z" fill="black" />
              <path d="M26.25 5.25H24.5V8.75H21V10.5H24.5V14H26.25V10.5H29.75V8.75H26.25V5.25Z" fill="black" />
            </svg>
            สร้างรายการขอคำปรึกษา
          </button>
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
                  {/* ใช้ map เพื่อแสดงรายการขอคำปรึกษาที่ได้รับมา */}
                  {data.map((request, index) => (
                     <tr key={index} class="bg-white border-b dark:bg-[#F2F1DF] dark:border-gray-700">
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
                      8 ธ.ค. 2566 10:40:00
                    </td>
                    <td class="px-6 py-4"> 
                      <Link to="/waiting" >{request.status}</Link>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
