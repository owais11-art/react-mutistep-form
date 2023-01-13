import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../store/Store'
import { StyledBottomNav } from '../styled-components/BottomNav.styled'
import { data } from '../data/site-data'
const BottomNav = ({ className, next, prev }) => {
    const {store, dispatch} = useContext(StoreContext)
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const actionCreator = () => {
        switch(pathname){
            case "/":
                return {type: "form-validation"}
            case "/step-two":
                const plan = data.stepTwo.find(item => item.active)
                return {type: "update-plan", payload: {planType: {
                    name: plan.name,
                    price: store.plan.payment === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
                }}}
            case "/step-three":
                const selectedAddOns = data.stepThree.filter(item => item.selected)
                // console.log(data.stepThree)
                return {type: "update-add-ons", payload: {addOns: selectedAddOns}}
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