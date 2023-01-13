
const formData = [
    {
      label: "Name",
      for: "user-name",
      inputType: "text",
      placeholder: "e.g. Stephen King",
      value: "",
      error: {
        haveError: false,
        message: ""
      }
    },
   {
      label: "Email Address",
      for: "user-email",
      inputType: "email",
      placeholder: "e.g. stephenking@lorem.com",
      value: "",
      error: {
        haveError: false,
        message: ""
      }
    },
    {
      label: "Phone Number",
      for: "user-phone",
      inputType: "text",
      placeholder: "e.g. +1 234 567 890",
      value: "",
      error: {
        haveError: false,
        message: ""
      }
    }
  ]

  const plan = {
    payment: "monthly",
    planType: {
      name: "Arcade",
      price: "9"
    }
  }

const steps = {
  isStepOneComplete: false,
  isStepTwoComplete: false,
  isStepThreeComplete: false,
  isStepFourComplete: false
}

const addOns = []

export const initialState = {
    validation: false,
    form: formData,
    plan: plan,
    addOns: addOns,
    steps: steps
  }