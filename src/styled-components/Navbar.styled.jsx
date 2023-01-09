import styled from "styled-components";

export const Nav = styled.nav`
    &.mobile-nav{
        justify-content: center;
        flex-direction: row;
        padding-left: 0;
        .nav-text{
            display: none;
        }
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    padding-left: 30px;
    padding-top: 40px;
    .nav-item{
        display: flex;
        align-items: center;
        gap: 15px;
        .nav-id{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            color: ${({ theme }) => theme.colors.albaster};
            border: 1px solid ${({ theme }) => theme.colors.albaster};
            display: grid;
            place-items: center;
        }
        .nav-text{
            .nav-head{
                font-size: 14px;
                color: ${({ theme }) => theme.colors.pastelBlue};
            }
            .nav-name{
                font-weight: 700;
                color: ${({ theme }) => theme.colors.white};
                margin-top: 6px;
            }
        }
        &.active{
            .nav-id{
                background-color: ${({ theme }) => theme.colors.lightBlue};
                border: none;
                color: ${({ theme }) => theme.colors.marineBlue};
                font-weight: 500;
            }
        }
    }
`