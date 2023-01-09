import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../store/Store'
import { StyledStepOne } from '../styled-components/StepOne.styled'

const StepOne = () => {
  const {store, dispatch} = useContext(StoreContext)

  const handleOnChange = (event, index) => dispatch(
    {
      type: 'on-change', 
      payload:{
        index,
        val: event.target.value
      }
    }
  )

  return (
    <StyledStepOne>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        {store.form.map((item, index) => (
          <div className="form-control" key={index}>
            <div className="label">
              <label htmlFor={item.for}>{item.label}</label>
              {item.error.haveError && <span className='error-message'>{item.error.message}</span>}
            </div>
            <div 
              className={item.error.haveError ? "input-wrapper error": "input-wrapper"}
            >
              <input 
                type={item.inputType} 
                id={item.for} 
                placeholder={item.placeholder}
                value={item.value}
                onChange={event => handleOnChange(event, index)}
                onFocus={event => event.target.parentElement.classList.add('focus')}
                onBlur={event => event.target.parentElement.classList.remove('focus')}
               />
            </div>
          </div>
        ))}
      </form>
    </StyledStepOne>
  )
}

export default StepOne