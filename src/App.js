import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Student/Login/Login'
import Register from './Components/Student/Register/Register'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default App
