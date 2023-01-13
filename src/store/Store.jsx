import React, { createContext, useReducer } from 'react'
import { initialState } from './state'

export  const StoreContext = createContext()

const Store = ({ children }) => {
    const REDUCER = (state, action) => {
      switch(action.type){
        case action.type:
          return action.payload.reducer(state, action)
        default:
          return state
      }
    }   
    const [store, dispatch] = useReducer(REDUCER, initialState)
    return (
        <StoreContext.Provider value={{store, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

export default Store