import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: ${({ theme }) => theme.fonts.ubuntu};
        font-size: 16px;
        height: 100vh;
    }
    a{
        text-decoration: none;
    }
`