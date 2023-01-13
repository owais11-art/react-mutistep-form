import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../store/Store'
import { StyledBottomNav } from '../styled-components/BottomNav.styled'
import { data } from '../data/site-data'
import { validateReducer, updatePlanReducer, updateAddOnsReducer } from '../store/reducers'
const BottomNav = ({ className, next, prev }) => {
    const {store, dispatch} = useContext(StoreContext)
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const actionCreator = () => {
        switch(pathname){
            case "/":
                return {type: "form-validation", payload: {reducer(state, action){return validateReducer(state, action)}}}
            case "/step-two":
                const plan = data.stepTwo.find(item => item.active)
                return {type: "update-plan", payload: {planType: {
                    name: plan.name,
                    price: store.plan.payment === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
                },
                reducer(state, action){return updatePlanReducer(state, action)}}}
            case "/step-three":
                const selectedAddOns = data.stepThree.filter(item => item.selected)
                return {type: "update-add-ons", payload: {addOns: selectedAddOns, reducer(state, action){return updateAddOnsReducer(state, action)}}}
            default:
                return
        }
    }
    const handleClickNext = () => {
        const action = actionCreator()
        dispatch(action)
    }
    const handleClickPrev = () => prev === "/" ? navigate(prev) : navigate(`/${prev}`)
    const handleClickConfirm = () => navigate("/thankyou")
    return pathname !== "/thankyou" && (
        <StyledBottomNav prev={prev} className={className}>
            {prev && <div className="previous" onClick={handleClickPrev}>Go Back</div>}
            {next ? <div className="next" onClick={handleClickNext}>Next Step</div> : <div className="confirm" onClick={handleClickConfirm}>Confirm</div>}
        </StyledBottomNav>
    )
}

export default BottomNav