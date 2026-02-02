import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Courses from '../components/pages/Courses'
import Detail from '../components/pages/Detail'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import MyLearning from '../components/pages/account/MyLearning'
import MyCourses from '../components/pages/account/MyCourses'
import WatchCourse from '../components/pages/account/WatchCourse'

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/account/my-learning' element={<MyLearning />} />
            <Route path='/account/my-courses' element={<MyCourses />} />
            <Route path='/account/watch-course' element={<WatchCourse />} />
        </Routes>
    )
}

export default AppRoutes