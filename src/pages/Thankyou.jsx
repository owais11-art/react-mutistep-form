import React from 'react'
import { StyledThankyou } from '../styled-components/Thankyou.styled'
import thankLogo from "../assets/images/icon-thank-you.svg"
const Thankyou = () => {
  return (
    <StyledThankyou>
      <div>
        <div className="logo">
          <img src={thankLogo} alt="thankyou-logo" />
        </div>
        <h3>Thank you</h3>
        <p>Thankyou for confirming your subscription! We have you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </StyledThankyou>
  )
}

export default Thankyou