import styled from "styled-components";

export const StyledBottomNav = styled.nav`
    &.mobile-bottom-nav{
        @media(min-width: ${({ theme }) => theme.screenSize.md}){
            display: none;
        }
    }
    &.desktop-bottom-nav{
        @media(max-width: ${({ theme }) => theme.screenSize.md}){
            display: none;
        }
    }
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    display: flex;
    justify-content: ${({ prev }) => prev ? "space-between" : "flex-end"};
    align-items: center;
    margin-top: 40px;
    font-size: 14px;
    div{
        cursor: pointer;
        padding: 10px 15px;
    }
    .next, .confirm{
        background-color: ${({ theme }) => theme.colors.marineBlue};
        color: ${({ theme }) => theme.colors.magnolia};
        border-radius: 3px;
    }
    .confirm{
        background-color: ${({ theme }) => theme.colors.purpleBlue};
    }
    .previous{
        color: ${({ theme }) => theme.colors.coolGrey};
        font-weight: 500;
    }
`