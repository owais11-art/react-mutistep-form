import styled from "styled-components";

export const Main = styled.main`
    height: 100%;
    padding-bottom: 40px;
    background-color: ${({ theme }) => theme.colors.magnolia};
    .mobile-hero{
        width: 100%;
        height: 200px;
        background: url(${({ bgUrl }) => bgUrl.bgMobile}) no-repeat center center / cover;
        @media(min-width: ${({ theme }) => theme.screenSize.md}){
            display: none;
        }
    }
    .main{
        width: 90%;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 6px;
        /* height: 400px; */
        margin-top: -85px;
        .sidebar{
            display: none;
        }
        @media(min-width: ${({ theme }) => theme.screenSize.md}){
            margin-top: 0;
            display: flex;
            padding: 12px;
            width: 90%;
            height: 500px;
            .sidebar{
                display: block;
                width: 30%;
                background: url(${({ bgUrl }) => bgUrl.bgDesktop}) no-repeat center center / cover;
                border-radius: 6px;
            }
            .page-content{
                width: 70%;
            }
        }
        @media(min-width: ${({ theme }) => theme.screenSize.lg}){
            width: 70%;
        }
    }
    @media(min-width: ${({ theme }) => theme.screenSize.md}){
        display: grid;
        place-items: center;
        padding-bottom: 0;
        height: 100vh;
    }
`