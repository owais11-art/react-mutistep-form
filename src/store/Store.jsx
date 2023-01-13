import React, { createContext, useReducer } from 'react'
import { initialState } from './state'
import {
  onChangeReducer, 
  validateReducer, 
  resetValidationReducer,
  updatePlanReducer,
  updatePaymentReducer,
  updateAddOnsReducer
} from './reducers'

export  const StoreContext = createContext()

const Store = ({ children }) => {
    const reducer = (state, action) => {
      switch(action.type){
        case "on-change":
          return onChangeReducer(state, action)
        case "form-validation":
          return validateReducer(state)
        case "reset-validation":
          return resetValidationReducer(state)
        case "update-plan":
          return updatePlanReducer(state, action)
        case "update-payment":
          return updatePaymentReducer(state, action)
        case "update-add-ons":
          return updateAddOnsReducer(state, action)
        default:
          return state
      }
    }
      
    const [store, dispatch] = useReducer(reducer, initialState)
    return (
        <StoreContext.Provider value={{store, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

export default Store