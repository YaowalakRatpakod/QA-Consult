import React from 'react'
import "./Register.css"
import register from '/QA-Consult/src/Picture/register.png'

const Register = () => {
  return (
    <div className='bg-[#091F59] h-screen flex justify-between '>
      <div className='bg-[#f8fafc] h-full w-[104rem] grid justify-items-center rounded-r-lg' >
        <div className='font-bold text-4xl text-[#091F59] pt-14'>Q&A Consult</div>
        <div className='font-regular text-xs text-[#7E7878]'>ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว</div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>ชื่อ-นามสกุล
            <input type="Name" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>คณะ
            <select id="countries" class="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:">
              <option selected></option>
              <option value="ICT">เทคโนโลยีสารสนเทศและการสื่อสาร</option>
            </select>
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>สาขา
          <select id="countries" class="block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:">
              <option selected></option>
              <option value="SE">สาขาวิชาวิศวกรรมซอฟต์แวร์</option>
              <option value="CS">สาขาวิชาวิทยาการคอมพิวเตอร์</option>
              <option value="CPE">สาขาวิชาวิศวกรรมคอมพิวเตอร์</option>
              <option value="IT">สาขาวิชาเทคโนโลยีสารสนเทศ</option>
              <option value="BS">สาขาวิชาภูมิสารสนเทศศาสตร์</option>
              <option value="BBA">สาขาวิชาธุรกิจดิจิทัล</option>
              <option value="CG">สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย</option>
              <option value="BSC">สาขาวิชาวิทยาการข้อมูลและการประยุกต์</option>
              <option value="ICTE">สาขาวิชาเทคโนโลยีสารสนเทศและสาขาวิชาภาษาอังกฤษ</option>
            </select>
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>เบอร์โทร
            <input type="Phone" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>อีเมล
            <input type="Email" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>รหัสผ่าน
            <input type="Password" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-regular text-sm text-[#091F59]'>ยืนยันรหัสผ่าน
            <input type="Password" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='relative my-0'>
          <div className='font-medium text-sm text-[#091F59]'>ตารางเรียน
            <input className="block w-72 py-2.3 px-0 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple>
            </input>
          </div>
        </div>
        <div className='registersubmit'>
          <button type="button" class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800">ลงทะเบียน</button>
        </div>


      </div>
      <div className='product flex items-center justify-center w-full h-full bg-[#091F59] '>
        <img className='w-72 h-72' src={register} alt="product" />
      </div>

    </div>
  )
}

export default Register
