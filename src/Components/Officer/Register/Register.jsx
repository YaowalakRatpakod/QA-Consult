import React from 'react'
import regisofficer from '../../../Asset/register-officer.png';


function Register() {
    return (
        <><div className='container-2'>
            <div className="header-2">
                <div className="text-2">Q&A Consult</div>
                <div className="sub-text-2">ให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว</div>
            </div>
            <div className="inputs-2">
                <div className="input-2">
                    <label>ชื่อ-นามสกุล</label>
                    <input type='text'></input>
                </div>
                <div className="input-2">
                    <label>เบอร์โทร</label>
                    <input type='tel'></input>
                </div>
                <div className="input-2">
                    <label>อีเมล</label>
                    <input type='email'></input>
                </div>
                <div className="input-2">
                    <label>รหัสผ่าน</label>
                    <input type='password'></input>
                </div>
                <div className="input-2">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type='password'></input>
                </div>
            </div>
            <div className="submit-container-2">
                <button className="submit-2">ลงทะเบียน</button>
            </div>
        </div><div className="img-container-2">
                <img src={regisofficer} alt="regisofficer" />
            </div></>
    )
}

export default Register