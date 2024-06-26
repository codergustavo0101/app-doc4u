import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import Privacit from '../components/Privacit'
import TermsUse from '../components/TermsUse'
import Account from '../pages/Account'
import Cart from '../pages/Cart'
import PaymentPage from '../pages/PaymentPage'
import Dashboard from '../pages/Dashboard'
import SucessPayment from '../pages/SucessPayment'
import Schedules from '../pages/Schedules'
const AppStack = () => {

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/account' element={<Account />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payment' element={<PaymentPage />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/sucess/payment' element={<SucessPayment />} />

                <Route path='/dashboard/schedules' element={<Schedules />} />
                <Route path='/terms/privacity' element={<Privacit />}/>
                <Route path='/privacity' element={<TermsUse />}/>
            </Routes>

        </BrowserRouter>



    )
}

export default AppStack