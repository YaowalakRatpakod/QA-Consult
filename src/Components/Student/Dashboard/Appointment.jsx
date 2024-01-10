import React from 'react'
import Header from '../../Layout/Header/Header'
import { Button } from 'flowbite-react'
import x from '../../../Picture/x.png'
import v from '../../../Picture/v.png'

function Appointment() {
  return (
    <div>
      <Header />
      <div className='ltr'>
        <div className='flex flex-row  ms-28 p-4 text-medium text-black'>การนัดหมาย </div>
        <img src={x} alt="" className=' absolute top-24 right-32  h-5 w-5  ' />

      </div>

      <div className='flex flex-col items-center justify-around '>
        {/* <div className='flex justify-center w-full'></div> */}
        <div className='mx-auto w-4/5 h-full  '>
          <div className='rounded-lg shadow-lg border border-black bg-white -mt-35 pb-px pr-px md:py30  md:px-5 '>
            <div className='flex'>
              <div className="text-[#F2F0DE] w-1/2 bg-[#091F59] rounded-md focus:outline-none font-semibold text-xs px-4 py-2.5">การนัดหมาย</div>
              <div className="text-[#F2F0DE] w-1/2 bg-white rounded-md focus:outline-none font-semibold text-xs px-4 py-2.5"> </div>
            </div>

            <img src={v} alt="" className='h-2 w-3 absolute left-36 top-48 ' />
            <div className=' mt-6 mb-1 ml-10 text-black font-semibold text-sm'> รายละเอียด</div>

            <div className='bg-yellow-100 rounded-md mx-2 my-4 py-4 px-7'>
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
                <div className='text-black px-7 py-1 font-medium text-sm' name='name' >นัดหมายวันที่ :  <span className='bg-white rounded-sm p-1'> 10 ธ.ค. 2566 </span></div>
                <div className='text-black px-7 py-1 font-medium text-sm'>สถานที่ :  <span className='bg-white rounded-sm p-1'>ห้องสำนักงานคณะ ชั้น 3 ตึก ICT</span></div>
                <div className='px-7 py-1 font-medium text-sm' >เวลาที่นัดหมาย : <span className='bg-white rounded-sm p-1'>09:00</span></div>

              </form>
            </div>
          </div>

        </div>
      </div>





    </div>
  )
}

export default Appointment
