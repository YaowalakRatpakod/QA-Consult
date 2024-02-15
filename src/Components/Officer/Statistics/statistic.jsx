import React, { useState } from 'react';
import Headeroffice from '../../Layout/Header/Headeroffice';
import Linech from './Linech';

function Statistic() {
  const [filter, setFilter] = useState('week'); // เริ่มต้นด้วยการกรองตามสัปดาห์

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

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
              <div className='flex items-center'>
                <select value={filter} onChange={handleFilterChange} className="bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base">
                  <option value="week">สัปดาห์</option>
                  <option value="month">เดือน</option>
                </select>
              </div>
            </div>
            <div className=''>
              <Linech filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
