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
import History from './Components/Student/History/History';
import Notifications from './Components/Student/Notifications/Notifications';
import Waitingprocecd from './Components/Student/Dashboard/Waitingprocecd';
import Inprogress from './Components/Student/Dashboard/Inprogress'
import Appointment from './Components/Student/Dashboard/Appointment';
import Completed from './Components/Student/History/Completed';

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
            <Route path='/waiting' element={<Waitingprocecd />}></Route>
            <Route path='/inprogress' element={<Inprogress />}></Route>
            <Route path='/appointment' element={<Appointment />}></Route>
            <Route path='/history' element={<History />}></Route>
            <Route path='/completed' element={<Completed />}></Route>
            <Route path='/notifications' element={<Notifications />}></Route>

        </Routes>
    )
}

export default App
