import React from 'react'
import Headeroffice from '../../Layout/Header/Headeroffice'
import Linech from './Linech'


function statistic() {


  return (
    <div>
      <Headeroffice />
      <div className='flex flex-row  ms-28 p-4 text-medium text-[#091F59] font-semibold '>สถิติ</div>
      <div className='flex flex-col items-center justify-around '>
        <div className='mx-auto w-4/5 h-full  '>
          <div className='rounded-lg shadow-lg border  bg-white -mt-35 md:py30  md:px-5 p-8'>
            <div className='flex justify-between'>
              <div className=''>
                <div className='font-semibold text-[#091F59]'>สรุปรายการขอคำปรึกษา</div>
                <div className='font-semibold text-[#091F59] text-2xl'>1000</div>
                <div className='font-semibold text-[#091F59]'>จำนวน</div>
              </div>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                <div>
                  
                </div>

              </div>

            </div>
            <div className=''>
              <Linech />
            </div>
          </div>
        </div>
      </div>


    </div >

  )
}

export default statistic
