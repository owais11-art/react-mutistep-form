import styled from "styled-components";

export const StyledStepThree = styled.div`
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
    .add-ons{
        margin-top: 40px;
        .add-on{
            display: flex;
            align-items: center;
            padding: 12px;
            border: 1px solid ${({ theme }) => theme.colors.coolGrey};
            border-radius: 6px;
            margin-top: 10px;
            cursor: pointer;
            .checkmark{
                width: 20px;
                height: 20px;
                border: 1px solid ${({ theme }) => theme.colors.coolGrey};
                border-radius: 3px;
                img{
                    display: none;
                }
            }
            .content{
                padding-left: 10px;
                p{
                    font-size: 13px;
                }
                h4{
                    font-size: 15px;
                    color: ${({ theme }) => theme.colors.marineBlue};
                }
            }
            .price{
                flex-grow: 1;
                text-align: right;
                font-size: 13px;
                color: ${({ theme }) => theme.colors.purpleBlue};
                font-weight: 500;
            }
            &.checked{
                border-color: ${({ theme }) => theme.colors.purpleBlue};
                .checkmark{
                    background: ${({ theme }) => theme.colors.purpleBlue};
                    border: none;
                    display: grid;
                    place-items: center;
                    img{
                        display: block;
                    }
                }
            }
        }
    }
    @media(min-width: ${({ theme }) => theme.screenSize.sm}){
        width: 75%;
    }
    @media(min-width: ${({ theme }) => theme.screenSize.md}){
        width: 80%;
    }
`