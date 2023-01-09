import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../store/Store'
const BottomNav = ({ navTabs:{next, prev} }) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const actionCreator = () => {
        return pathname === "/" && {type: "form-validation"}
    }
    const {store, dispatch} = useContext(StoreContext)
    const handleClick = () => {
        const action = actionCreator()
        dispatch(action)
    }
    useEffect(() => {
        if(store.validation) navigate(next)
        return () => dispatch({type: "reset-validation"})
    }, [store.validation])
    return (
        <button onClick={handleClick}>Next</button>
    )
}

export default BottomNav