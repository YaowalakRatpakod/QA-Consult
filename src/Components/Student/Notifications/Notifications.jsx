import React from 'react'
import Header from '../../Layout/Header/Header'
import proflie2 from '../../../Picture/proflie2.png'

function Notifications() {


  return (
    <div>
      <Header />
      <div className='ltr'>
        <div className='ms-48 p-4 text-medium text-black' >การแจ้งเตือนทั้งหมด</div>
      </div>
      <div className='flex justify-center items-center'>
        <p class="flex px-8 mt-8 font-medium text-gray-500 text-sm  dark:text-white">รอดำเนินการ
          <div class=" w-5 h-5 bg-red-300 rounded-full"></div></p>

        <p class="flex px-8 mt-8 font-medium text-gray-500 text-sm  dark:text-white">กำลังดำเนินการ
          <div class=" w-5 h-5 bg-orange-300 rounded-full"></div></p>

        <p class="flex px-8 mt-8 font-medium text-gray-500 text-sm  dark:text-white">การนัดหมาย
          <div class=" w-5 h-5 bg-yellow-100  rounded-full"></div></p>

      </div>
      <div className='flex flex-col justify-center items-center'>
        <div class="mt-2 px-6 py-4 bg-blue-200 rounded-lg shadow w-8/12">
          <div class="inline-flex items-center justify-between w-full">
            <div class="inline-flex items-center">
              <a href="#" className="py-2"  ><img className="w-20 h-20 " src={proflie2} alt="" /></a>
              <h3 class="font-bold text-base text-gray-800">เจ้าหน้าที่บุษบา ตอบกลับการขอคำปรึกษาของคุณ !</h3>
            </div>
            <div class="text-xs text-gray-500 w-5 h-5 bg-orange-300 rounded-full"></div>
          </div>
          <p className=' font-medium text-base text-gray-800'>1  นาทีที่แล้ว , 08 ธ.ค. 2566</p>
        </div>
      </div>
    </div>
  )
}

export default Notifications
