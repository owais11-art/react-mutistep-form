import React, { useContext, useEffect, useState } from 'react'
import { StyledPlan } from '../styled-components/StyledPlan'
import { StoreContext } from '../store/Store'
const Plan = () => {
  const {store, dispatch} = useContext(StoreContext)
  let [slide, setSlide] = useState(false)
  const handleClick = () => {
    setSlide(prevSlide => !prevSlide)
    dispatch({type: "update-payment"})
  }
  useEffect(() => {
    if(store.plan.payment === "yearly") setSlide(true)
  }, [])
  return (
    <StyledPlan>
        <div 
        className={store.plan.payment === "monthly" ? "monthly active" : "monthly"}
        >Monthly</div>
        <div className={slide || store.plan.payment === "yearly" ? "button-slider slide" : "button-slider"} onClick={handleClick}>
            <div className="knob"></div>
        </div>
        <div 
        className={store.plan.payment === "yearly" ? "yearly active" : "yearly"}
        >Yearly</div>
    </StyledPlan>
  )
}

export default Plan