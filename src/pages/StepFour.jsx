import React, { useContext } from 'react'
import { StyledStepFour } from '../styled-components/StepFour.styled'
import { StoreContext } from '../store/Store'
import { Link, useLocation } from 'react-router-dom'
import { useBottomNavigators } from '../useBottomNavigators'
import BottomNav from '../components/BottomNav'
const StepFour = () => {
  const {store} = useContext(StoreContext)
  const { pathname } = useLocation()
  const { next, prev } = useBottomNavigators(pathname)
  const addOns = [...store.addOns]
  const total = addOns.reduce((sum, item) => {
    const price = store.plan.payment === "monthly" ? item.monthlyPrice : item.yearlyPrice
    sum += parseFloat(price)
    return sum
  }, parseFloat(store.plan.planType.price))
  const capitalize = word => {
    return word[0].toUpperCase() + word.slice(1)
  }
  return (
    <StyledStepFour>
      <h1>Finishing up</h1>
      <p>Double check everything looks OK before confirming.</p>
      <div className="summary">
        <div className="plan">
          <div className="content">
            <h4>{store.plan.planType.name}({capitalize(store.plan.payment)})</h4>
            <Link to="/step-two">Change</Link>
          </div>
          <div className="price">
            ${store.plan.planType.price}{store.plan.payment === "monthly" ? "/mo" : "/yr"}
          </div>
        </div>
        {addOns.length > 0 && (
          <div className="add-ons">
          {addOns.map(addOn => (
              <div key={addOn.id} className="add-on">
                <div className="name">{addOn.name}</div>
                <div className="add-on-price">
                  +${store.plan.payment === "monthly" ? addOn.monthlyPrice+"/mo" : addOn.yearlyPrice+"/yr"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="total">
        <div className="title">Total (per {store.plan.payment.replace("ly", "")})</div>
        <div className="total-price">
          +${total}/{store.plan.payment === "monthly" ? "mo" : "yr"}
        </div>
      </div>
      <BottomNav className="desktop-bottom-nav" next={next} prev={prev} />
    </StyledStepFour>
  )
}

export default StepFour