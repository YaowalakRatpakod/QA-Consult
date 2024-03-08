import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import LoginOF from './Components/Officer/Login/Login';
import RegisterOF from './Components/Officer/Register/Register';
import ForgotPassOF  from './Components/Officer/Login/ForgotPass';
import DashboardOF from './Components/Officer/Dashboard/DashboardOF';
import WaitingprocecdOF from './Components/Officer/Dashboard/Waitingprocecd';
import InprogressOF from './Components/Officer/Dashboard/Inprogress';
import DetailsAppointmentOF from './Components/Officer/Dashboard/DetailsAppointmentOF';
import Statistic from './Components/Officer/Statistics/statistic';
import HistoryOF from './Components/Officer/History/History';
import CompletedOF from './Components/Officer/History/Completed';
 
import Login from './Components/Student/Login/Login'
import Register from './Components/Student/Register/Register'
import Forgetpassword from './Components/Student/Forgetpassword/Forgetpassword'
import Dashboard from './Components/Student/Dashboard/Dashboard'
import Createreq from './Components/Student/Createreq/Createreq'
import History from './Components/Student/History/History';
import Waitingprocecd from './Components/Student/Dashboard/Waitingprocecd';
import Inprogress from './Components/Student/Dashboard/Inprogress'
import Completed from './Components/Student/History/Completed';


const App = () => {
    return (
        
        <><Routes>
            
            <Route path="/loginOF" element={<LoginOF />} />
            <Route path="/registerOF" element={<RegisterOF />} />
            <Route path="/forgotpassOF" element={<ForgotPassOF />} />
            <Route path="/dashboardOF" element={<DashboardOF />} />
            <Route path='/waitingOF/:id' element={<WaitingprocecdOF />} />
            <Route path='/inprogressOF/:id' element={<InprogressOF />} />
            <Route path='/detailsAppointmentOF/:id' element={<DetailsAppointmentOF />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/historyOF/" element={<HistoryOF />} />
            <Route path='/completedOF/:id' element={<CompletedOF />} />

            {/* path = "แสดงหน้า login ของนิสิต "*/}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget" element={<Forgetpassword />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/createreq' element={<Createreq />}></Route>
            <Route path='/waiting/:id' element={<Waitingprocecd />}></Route>
            <Route path='/inprogress/:id' element={<Inprogress />}></Route>
            <Route path='/history/' element={<History />}></Route>
            <Route path='/completed/:id' element={<Completed />}></Route>
           
           
           

        </Routes><ToastContainer /></>
    )
}

export default App
