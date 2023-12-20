import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginOF from './Components/Officer/Login/Login';
import RegisterOF from './Components/Officer/Register/Register';
import ForgotPassOF  from './Components/Officer/Login/ForgotPass';

const App = () => {
    return (
        <Routes>
            {/* path = "แสดงหน้าหลักของ officer "*/}
            <Route path="/" element={<LoginOF />} />
            <Route path="/registerOF" element={<RegisterOF />} />
            <Route path="/forgotpassOF" element={<ForgotPassOF />} />
        </Routes>
    )
}

export default App
