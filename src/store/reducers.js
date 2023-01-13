  
  
  export const onChangeReducer = (state, action) => {
      const updatedForm = [...state.form]
      const {payload:{index, val}} = action
      updatedForm[index].value = val
      return {...state, form: updatedForm}
  }

  export const validateReducer = (state) => {
    let {validation, form} = state
    const updatedForm = [...form]
    const [name, email, phone] = updatedForm
    const defaultErrorObject = {
      haveError: false,
      message: ""
    }
    if(!name.value){
      name.error.haveError = true
      name.error.message = "This field is required"
    }else{
      name.error = defaultErrorObject
    }
    if(!email.value){
      email.error.haveError = true
      email.error.message = "This field is required"
    }else{
      email.error = defaultErrorObject
    }
    if(!phone.value){
      phone.error.haveError = true
      phone.error.message = "This field is required"
    }else if(phone.value.length < 10){
      phone.error.haveError = true
      phone.error.message = "Should be 10 digits long"
    }else{
      phone.error = defaultErrorObject
    }
    if(name.error.haveError || email.error.haveError || phone.error.haveError)validation = false
    else validation = true
    updatedForm[0] = name
    updatedForm[1] = email
    updatedForm[2] = phone
    if(validation) return {...state, validation: validation, form: updatedForm, steps: {...state.steps, isStepOneComplete: true}}
    return {...state, validation: validation, form: updatedForm}
  }

  export const resetValidationReducer = (state) => {
    const defaultSteps = {
      isStepOneComplete: false,
      isStepTwoComplete: false,
      isStepThreeComplete: false,
      isStepFourComplete: false
    }
    return {...state, steps: defaultSteps}
  }

  export const updatePlanReducer = (state, action) => {
    const {planType} = action.payload
    return {...state, plan: {...state.plan, planType: planType}, steps: {...state.steps, isStepTwoComplete: true}}
  }

  export const updatePaymentReducer = (state, action) => {
   if(state.plan.payment === "monthly"){
    return {...state, plan: {...state.plan, payment: "yearly"}}
   }
   if(state.plan.payment === "yearly"){
    return {...state, plan: {...state.plan, payment: "monthly"}}
   }
  }

  export const updateAddOnsReducer = (state, action) => {
    const { addOns } = action.payload
    return {...state, addOns: addOns, steps: {...state.steps, isStepThreeComplete: true}}
  }