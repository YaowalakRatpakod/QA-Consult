import React from 'react'
// import { useNavigate } from 'react-router-dom'
import "./Login.css"
import login from '/QA-Consult/src/Picture/login.png'

const Login = () => {
  return (
    <div className="bg-[#091F59] h-screen flex justify-between">
      <div className='product flex items-center justify-center w-full h-full bg-[#091F59] '>
        <img className='w-96 h-96' src={login} alt="product" />
      </div>
      <div className='bg-[#f8fafc] h-full w-[70rem] grid justify-items-center rounded-l-lg '>
        <div className='font-bold text-4xl text-[#091F59] pt-[15rem] my-[-4rem]'>Q&A Consult</div>
        <div className='font-regular text-xs text-[#7E7878] pt-1 my-8'>ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว</div>
        <div className='relative mt-[-51px] mb-[48px]'>
          <div className='font-regular text-sm text-[#091F59]'>อีเมล
            <input type="Email" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='mt-[-63px] mb-[48px]'>
          <div className='font-regular text-sm text-[#091F59]'>รหัสผ่าน
            <input type="Password" className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:to-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer-[]:' />
          </div>
        </div>
        <div className='forgetpassword'>
          <p id="helper-text-explanation" class="mt-[-5.5rem] pl-[205px] text-sm text-gray-500 dark:text-gray-400"><a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">ลืมรหัสผ่าน</a>?</p>
        </div>
        <div className='mt-[-63px] mb-[48px]'>
          <button type="button" class="text-white bg-[#091F59] hover:bg-[#091F59] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#091F59] dark:hover:bg-blue-700 dark:focus:ring-blue-800">เข้าสู่ระบบ</button>
        </div>
        <div className='textRegister'>
          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">ไม่มีบัญชีใช่หรือไม่? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">ลงทะเบียน</a></p>
        </div>

      </div>

      {/* <div className='img'></div>
      <div className='boxbackground'>
        <div className='textQAconsult'>Q&A Consult</div>
        <div className='textQA'>ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว</div>
        <div className='inputs'>
          <div className='input'>
            <img src="" alt="" />
            <input type="email" />
          </div>
          <div className='input'>
            <img src="" alt="" />
            <input type="password" />
          </div>
        </div>
        <div className='forgot-password'>ลืมรหัสผ่าน? </div>
        <div className='loginsubmit'>
          <div className='submit'>เข้าสู่ระบบ</div>
        </div>
        <div className='textRegister'>ไม่มีบัญชีใช่หรือไม่</div>

      </div> */}





    </div >
  )
}

export default Login
