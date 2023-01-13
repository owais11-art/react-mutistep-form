import React, { useContext, useEffect, useState } from 'react'
import { StyledStepThree } from '../styled-components/StepThree.styled'
import { data } from '../data/site-data'
import { StoreContext } from '../store/Store'
import checkmark from '../assets/images/icon-checkmark.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBottomNavigators } from '../useBottomNavigators'
import BottomNav from '../components/BottomNav'
import { resetValidationReducer } from '../store/reducers'

const StepThree = () => {
  const [addOns, setAddOns] = useState(data.stepThree)
  const {store, dispatch} = useContext(StoreContext)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { next, prev } = useBottomNavigators(pathname)
  const handleClick = id => {
    const newAddOns = addOns.map(addOn => {
      if(addOn.id === id) addOn.selected = !addOn.selected
      return addOn
    })
    setAddOns(newAddOns)
  }
  useEffect(() => {
    if(store.steps.isStepThreeComplete) navigate(`/${next}`)
    return () => dispatch({type: "reset-validation", payload:{reducer(state, action){return resetValidationReducer(state, action)}}})
  }, [store.steps.isStepThreeComplete])
  return (
    <StyledStepThree>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-ons">
        {addOns.map(addOn => (
          <div 
            key={addOn.id}
            className={addOn.selected || store.addOns.some(item => item.id === addOn.id) ? "add-on checked" : "add-on"}
            onClick={() => handleClick(addOn.id)}
          >
            <div className="checkmark">
              <img src={checkmark} alt="checkmark" />
            </div>
            <div className="content">
              <h4>{addOn.name}</h4>
              <p>{addOn.desc}</p>
            </div>
            <div className="price">
              +${store.plan.payment === "monthly" ? addOn.monthlyPrice + "/mo" : addOn.yearlyPrice + "/yr"}
            </div>
          </div>
        ))}
      </div>
      <BottomNav className="desktop-bottom-nav" next={next} prev={prev} />
    </StyledStepThree>
  )
}

export default StepThree