import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { StoreContext } from './store/Store'
const ProctedRoute = ({ children }) => {
  const { state } = useLocation()
  const {store} = useContext(StoreContext)
  return state?.path === "/" && !store.validation ? <Navigate to="/" /> : children
}

export default ProctedRoute