import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "../pages/DefaultLayout"
import StepOne from "../pages/StepOne"
import StepTwo from "../pages/StepTwo"
import StepThree from "../pages/StepThree"
import StepFour from "../pages/StepFour"
import Thankyou from "../pages/Thankyou"
import ProctedRoute from "../ProctedRoute"

const RouterView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<StepOne/>} />
          <Route path="step-two" element={<ProctedRoute><StepTwo/></ProctedRoute>} />
          <Route path="step-three" element={<ProctedRoute><StepThree/></ProctedRoute>} />
          <Route path="step-four" element={<ProctedRoute><StepFour/></ProctedRoute>} />
          <Route path="thankyou" element={<ProctedRoute><Thankyou/></ProctedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterView