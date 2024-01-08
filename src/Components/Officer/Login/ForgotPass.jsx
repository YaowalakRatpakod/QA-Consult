import React from 'react'
import forgot from '../../../Asset/forgotpass-officer.png'

const ForgotPass = () => {
    return (
        <><div className='container'>
            <div className="header">
                <div className="text">ลืม</div>
                <div className="text-2">รหัสผ่านของคุณ?</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <label>อีเมล</label>
                    <input type='email'></input>
                </div>
            </div>
            <div className="submit-container-3">
                <button className="submit">รีเซ็ตรหัสผ่าน</button>
            </div>
            <div className="no-account-2">กลับหน้าล็อคอิน</div>
        </div>
            <div className="img-container">
                <img src={forgot} alt="forgotOF" />
            </div></>
    )
}

export default ForgotPass