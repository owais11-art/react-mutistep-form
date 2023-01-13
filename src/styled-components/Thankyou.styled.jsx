import styled from "styled-components";

export const StyledThankyou = styled.div`
    padding: 20px;
    margin: 0 auto;
    /* border: 1px solid; */
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    height: 400px;
    .logo, h3, p{
        text-align: center;
    }
    .logo{
        margin-bottom: 20px;
    }
    p{
        color: ${({ theme }) => theme.colors.coolGrey};
        line-height: 1.5;
        font-size: 15px;
    }
    h3{
        color: ${({ theme }) => theme.colors.marineBlue};
        font-size: 25px;
        margin-bottom: 12px;
    }
    @media(min-width: ${({ theme }) => theme.screenSize.sm}){
        width: 75%;
    }
    @media(min-width: ${({ theme }) => theme.screenSize.md}){
        width: 80%;
        height: 100%;
    }
`