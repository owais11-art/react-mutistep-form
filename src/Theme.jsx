import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styled-components/Global'
import { data } from './data/site-data'

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={data.theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
  )
}

export default Theme