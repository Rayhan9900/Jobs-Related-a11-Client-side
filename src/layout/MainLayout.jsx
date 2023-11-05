import React from 'react'
import { Outlet } from 'react-router-dom'
import Nabver from '../pages/Nabver/Nabver'
import Footer from '../Home/footer/Footer'

function MainLayout() {
    return (
        <div >
            <Nabver></Nabver>
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}

export default MainLayout