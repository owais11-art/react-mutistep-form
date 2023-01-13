import styled from "styled-components";

export const StyledStepFour = styled.div`
    padding: 20px;
    margin: 0 auto;
    h1{
        color: ${({ theme }) => theme.colors.marineBlue};
        margin-bottom: 10px;
    }
    p{
        color: ${({ theme }) => theme.colors.coolGrey};
        line-height: 1.3;
    }
    .summary{
        background-color: ${({ theme }) => theme.colors.magnolia};
        padding: 12px;
        border-radius: 6px;
        margin-top: 40px;
        .plan{
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${({ theme }) => theme.colors.marineBlue};
            .content{
                h4{
                    font-size: 15px;
                }
                a{
                    font-size: 14px;
                    color: ${({ theme }) => theme.colors.coolGrey};
                    text-decoration: underline;
                }
            }
            .price{
                color: ${({ theme }) => theme.colors.marineBlue};
                font-weight: 500;
            }
        }
        .add-ons{
            border-top: 1px solid ${({ theme }) => theme.colors.coolGrey};
            margin-top: 15px;
            .add-on{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 20px;
                font-size: 15px;
                .name{
                    color: ${({ theme }) => theme.colors.coolGrey};
                }
                .add-on-price{
                    ${({ theme }) => theme.colors.marineBlue}
                }
            }
        }
    }
    .total{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;
        .title{
            color: ${({ theme }) => theme.colors.coolGrey};
        }
        .total-price{
            color: ${({ theme }) => theme.colors.purpleBlue};
            font-weight: 700;
        }
    }
    @media(min-width: ${({ theme }) => theme.screenSize.sm}){
        width: 75%;
    }
    @media(min-width: ${({ theme }) => theme.screenSize.md}){
        width: 80%;
    }
` 