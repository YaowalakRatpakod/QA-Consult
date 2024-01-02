import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginOF from './Components/Officer/Login/Login';
import RegisterOF from './Components/Officer/Register/Register';
import ForgotPassOF  from './Components/Officer/Login/ForgotPass';
import Login from './Components/Student/Login/Login'
import Register from './Components/Student/Register/Register'
import Forgetpassword from './Components/Student/Forgetpassword/Forgetpassword'
import Dashboard from './Components/Student/Dashboard/Dashboard'
import Createreq from './Components/Student/Createreq/Createreq'

const App = () => {
    return (
        <Routes>
            
            <Route path="/loginOF" element={<LoginOF />} />
            <Route path="/registerOF" element={<RegisterOF />} />
            <Route path="/forgotpassOF" element={<ForgotPassOF />} />
            {/* path = "แสดงหน้า login ของนิสิต "*/}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget" element={<Forgetpassword/>}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/createreq' element={<Createreq />}></Route>
        </Routes>
    )
}

export default App
