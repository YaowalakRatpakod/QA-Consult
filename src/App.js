import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Student/Login/Login'
import Register from './Components/Student/Register/Register'
import Forgetpassword from './Components/Student/Forgetpassword/Forgetpassword'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget" element={<Forgetpassword/>}></Route>
        </Routes>
    )
}

export default App
