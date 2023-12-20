import React from 'react'
import '../Login/Login.css';
import officer from '../../../Asset/login-officer.png';

const Login = () => {
    return (
        <><div className='container'>
            <div className="header">
                <div className="text">Q&A Consult</div>
                <div className="sub-text">ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <label>อีเมล</label>
                    <input type='email'></input>
                </div>
                <div className="input">
                    <label>รหัสผ่าน</label>
                    <input type='password'></input>
                </div>
                <div className="sub-text-text">ลืมรหัสผ่าน?</div>
            </div>
            <div className="submit-container">
                <button className="submit">เข้าสู่ระบบ</button>
            </div>
            <div className="no-account">ไม่มีบัญชีใช่หรือไม่? <span>ลงทะเบียน</span></div>
        </div>
        <div className="img-container">
        <img src={officer} alt="Officer" />
            </div></>
    )
}

export default Login
