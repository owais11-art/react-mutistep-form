
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

export const initialState = {
    validation: false,
    form: formData,
    plan: "monthly"
  }