import React from 'react'
import Header from '../../Layout/Header/Header'
import { Button } from 'flowbite-react'
import x from '../../../Picture/x.png'
import v from '../../../Picture/v.png'

function Inprogress() {
  return (
    <div>
      <Header />
      <div className='ltr'>
        <div className='flex flex-row  ms-28 p-4 text-medium text-black'>รายการขอคำปรึกษา </div>
        <img src={x} alt="" className=' absolute top-24 right-32  h-5 w-5  ' />

      </div>

      <div className='flex flex-col items-center justify-around '>
        {/* <div className='flex justify-center w-full'></div> */}
        <div className='mx-auto w-4/5 h-full  '>
          <div className='rounded-lg shadow-lg border border-black bg-white -mt-35 pb-px pr-px md:py30  md:px-5 '>
            <div className='flex'>
              <div className="text-[#F2F0DE] w-1/2 bg-[#091F59] rounded-md focus:outline-none font-semibold text-xs px-4 py-2.5">รายละเอียดการขอคำปรึกษา </div>
              <div className="text-[#F2F0DE] w-1/2 bg-[#F2F0DE] rounded-md focus:outline-none font-semibold text-xs px-4 py-2.5"> </div>
            </div>

            <img src={v} alt="" className='h-2 w-3 absolute left-36 top-48 ' />
            <div className=' mt-6 mb-1 ml-10 text-black font-semibold text-sm'> รายละเอียด</div>

            <div className='bg-orange-300 rounded-md mx-2 my-4 py-4 px-7'>
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
              </div>

              <form>
                <div class='px-7 py-1 font-medium text-sm'>รายละเอียด
                  <p className='bg-white w-full h-20 mr-10 rounded-md  font-medium text-sm form-control form-control-lg px-1 py-1'>หนูไม่สามารถยื่นคำร้องขอเทียบรายวิชาได้ค่ะ</p>
                </div>
                <div class='px-7 py-1 font-medium text-sm'>คอมเมนต์
                  {/* <p className='bg-white w-full h-32 mr-10 rounded-md  font-medium text-sm form-control form-control-lg px-1 py-1'></p> */}

                  <div class="flex items-start gap-2.5">
                    <div class="flex flex-col w-full leading-1.5 bg-white  h-32 mr-10 rounded-md px-1 py-1">
                      <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-sm font-semibold text-gray-900 dark:text-white">เจ้าหน้าที่ : </span>
                        <span class="text-sm font-normal text-gray-900 dark:text-white">นิสิตลองแก้ปัญหาตามนี้ดูก่อนนะคะ...</span>
                      </div>
                    </div>
                  </div>

                </div>
              </form>

              <form>
                <label for="chat" class="sr-only">Your message</label>
                <div className='flex justify-between'>
                  <div class="flex items-center px-3 py-2  ml-8 w-9/12 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="แสดงความคิดเห็น...."></textarea>
                    <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                      <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                      </svg>
                      <span class="sr-only">Send message</span>
                    </button>
                  </div>
                  <div className='order-last'>
                    <Button type="button" className=" text-[#091F59] shadow-lg bg-[#F2F0DE] hover:bg-white focus:outline-none focus:ring-1 focus:ring-black-30 font-bold rounded-md  text-xs  py-2.5 text-center dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800">เสร็จสิ้น</Button>
                  </div>
                </div>
              </form>



            </div>
          </div>

        </div>
      </div>




    </div>
  )
}

export default Inprogress
