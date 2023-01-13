import React, { useContext, useState, useEffect } from 'react'
import { StylesStepTwo } from '../styled-components/StepTwo.styled'
import { StoreContext } from '../store/Store'
import { data } from '../data/site-data'
import BottomNav from '../components/BottomNav'
import Plan from '../components/Plan'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBottomNavigators } from '../useBottomNavigators'

const StepTwo = () => {
  const {store, dispatch} = useContext(StoreContext)
  const [plans, setPlans] = useState(data.stepTwo)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { next, prev } = useBottomNavigators(pathname)
  const handleClick = id => {
    const newPlans = plans.map(plan => {
      if(plan.id === id) plan.active = true
      else if(plan.active) plan.active = false
      return plan
    })
    setPlans(newPlans)
  }

  useEffect(() => {
    if(
      store.steps.isStepTwoComplete
    ) {
        navigate(`/${next}`)
    }
    return () => dispatch({type: "reset-validation"})
    }, [store.steps.isStepTwoComplete])
  return (
    <StylesStepTwo>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plans">
        {plans.map(plan => (
          <div 
            key={plan.id} 
            className={plan.active ? "plan active" : "plan"}
            onClick={() => handleClick(plan.id)}>
            <div className="logo">
              <img src={plan.logo} alt={plan.name.toLowerCase()} />
            </div>
            <div className="plan-content">
              <h4>{plan.name}</h4>
              {store.plan.payment === "monthly" ? 
                <p>${plan.monthlyPrice}/mo</p> : 
                (<><p>${plan.yearlyPrice}/yr</p><p className='scheme'>2 months free</p></>)}
            </div>
          </div>
        ))}
      </div>
      <Plan />
      <BottomNav className="desktop-bottom-nav" next={next} prev={prev} />
    </StylesStepTwo>
  )
}

export default StepTwo