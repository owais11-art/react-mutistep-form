import { Routes, Route, useLocation } from "react-router-dom"
import DefaultLayout from "./pages/DefaultLayout"
import StepOne from "./pages/StepOne"
import StepTwo from "./pages/StepTwo"
import StepThree from "./pages/StepThree"
import StepFour from "./pages/StepFour"
import Thankyou from "./pages/Thankyou"
import ProctedRoute from "./ProctedRoute"

function App() {
  const {pathname} = useLocation()
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<StepOne/>} />
        <Route path="step-two" element={<ProctedRoute><StepTwo/></ProctedRoute>} />
        <Route path="step-three" element={<ProctedRoute><StepThree/></ProctedRoute>} />
        <Route path="step-four" element={<ProctedRoute><StepFour/></ProctedRoute>} />
        <Route path="thankyou" element={<ProctedRoute><Thankyou/></ProctedRoute>} />
      </Route>
    </Routes>
  )
}

export default App
