import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./pages/DefaultLayout"
import StepOne from "./pages/StepOne"
import StepTwo from "./pages/StepTwo"
import StepThree from "./pages/StepThree"
import StepFour from "./pages/StepFour"
import Thankyou from "./pages/Thankyou"

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<StepOne/>} />
        <Route path="step-two" element={<StepTwo/>} />
        <Route path="step-three" element={<StepThree/>} />
        <Route path="step-four" element={<StepFour/>} />
        <Route path="thankyou" element={<Thankyou/>} />
      </Route>
    </Routes>
  )
}

export default App
