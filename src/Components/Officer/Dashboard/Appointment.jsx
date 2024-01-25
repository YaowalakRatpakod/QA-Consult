import React, { useState, useEffect } from 'react'
import Header from '../../Layout/Header/Headeroffice'
import { Button } from 'flowbite-react'
import { Link, } from "react-router-dom";
import ss from "../../../Picture/ss.png";

function Appointment() {
    const [date, setDate] = useState("")


    return (
        <div>
            <Header />

            <div className='ltr'>
                <div className='flex flex-row  ms-28 p-4 text-medium text-black'>รายการขอคำปรึกษา </div>
                <Link to="/dashboardOF">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute top-24 right-32 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </Link>

            </div>

            <div className='flex flex-col items-center justify-around '>
                {/* <div className='flex justify-center w-full'></div> */}
                <div className='mx-auto w-4/5 h-full  '>
                    <div className='rounded-lg shadow-lg border border-black bg-white -mt-35 pb-px pr-px md:py30  md:px-5 '>
                        <div className='flex'>
                            <div className="text-[#091F59] w-1/2 bg-[#F2F0DE] rounded-md focus:outline-none font-semibold text-xs px-4 py-2.5">รายละเอียดการขอคำปรึกษา </div>
                            <div className="text-[#F2F0DE] w-1/2 bg-[#091F59] rounded-md focus:outline-none font-semibold text-xs px-4 py-2.5">การนัดหมาย</div>
                        </div>

                        <div className='flex mt-6 mb-1 ml-10 text-black font-semibold text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" h-3 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg> รายละเอียด</div>

                        <div className='bg-yellow-100  rounded-md mx-2 my-4 py-4 px-7'>
                            <div className='flex'>
                                <div className=''>
                                    <div className='text-black px-7 py-1 font-medium text-sm' name='name' >ชื่อ-นามสกุล : <span className='bg-white rounded-sm p-1'>เยาวลักษณ์ ราชปรากฎ</span></div>
                                    <div className='text-black px-7 py-1 font-medium text-sm'>คณะ : <span className='bg-white rounded-sm p-1'>เทคโนโลยีสารสนเทศและการสื่อสาร</span></div>
                                    <div className='px-7 py-1 font-medium text-sm' >รหัสหัวข้อ: <span className='bg-white rounded-sm p-1'>UP07</span></div>
                                    <div class='px-7 py-1 font-medium text-sm'>วันที่: <span className='bg-white rounded-sm p-1'>8 ธ.ค. 2566</span> </div>

                                </div>

                                <div className=''>
                                    <div className='text-black px-7 py-1 font-medium text-sm'>เบอร์โทร : <span className='bg-white rounded-sm p-1'>0612548848</span></div>
                                    <div className='text-black px-7 py-1 font-medium text-sm'>สาขา : <span className='bg-white rounded-sm p-1'>วิศวกรรมซอฟต์แวร์</span></div>
                                    <div className='px-7 py-1 font-medium text-sm' >หัวข้อ: <span className='bg-white rounded-sm p-1'>คำร้องขออนุมัติเทียบรายวิชา</span></div>

                                </div>
                                <div className=''>
                                    <div className='text-black px-7 py-1 font-medium text-sm' name='name' >เลขที่คำร้อง : <span className='bg-white rounded-sm p-1'>#002</span></div>
                                </div>
                            </div>

                            <form>
                                <div class='px-7 py-1 font-medium text-sm'>รายละเอียด
                                    <p className='bg-white w-full h-20 mr-10 rounded-md  font-medium text-sm form-control form-control-lg px-1 py-1'>หนูไม่สามารถยื่นคำร้องขอเทียบรายวิชาได้ค่ะ</p>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <div class='px-7 py-1 font-medium text-sm'>นัดหมายวันที่ :
                                            <input type="date" className='bg-white rounded-sm form-control form-control-lg px-1 py-1'
                                                name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                        <div className='flex text-black px-7 py-1 font-medium text-sm'>สถานที่ :
                                            <input type="text" className='bg-white w-8/12 h-10 mx-2 rounded-md  font-medium text-sm form-control form-control-lg px-1 py-1'
                                                placeholder='กรอกสถานที่' />
                                        </div>
                                        <div className='px-7 py-1 font-medium text-sm' >เวลาที่นัดหมาย :
                                            <input type="text" className='bg-white w-6/12 h-10 mx-2 rounded-md  font-medium text-sm form-control form-control-lg px-1 py-1'
                                                placeholder='กรอกเวลา' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='px-7 py-1 font-medium text-sm' >ตารางเรียน : <img className="h-15 w-15 rounded-md bg-white  p-5" src={ss} alt="" /></div>
                                    </div>
                                </div>
                            </form>

                            <form>
                                <div>
                                    <div className='order-last'>
                                        <Button type="button" className=" text-[#091F59] shadow-lg bg-[#F2F0DE] hover:bg-white focus:outline-none focus:ring-1 focus:ring-black-30 font-bold rounded-md  text-xs  px-2 py-2.5 text-center dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800">การนัดหมาย</Button>
                                    </div>
                                </div>
                            </form>



                        </div>
                    </div>

                </div>
            </div >


        </div >
    )
}

export default Appointment
