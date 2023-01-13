import styled from "styled-components";

export const StylesStepTwo = styled.div`
    padding: 20px;
    margin: 0 auto;
    h1{
        color: ${({ theme }) => theme.colors.marineBlue};
        margin-bottom: 10px;
    }
    p{
        color: ${({ theme }) => theme.colors.coolGrey};
        line-height: 1.3;
        width: 90%;
    }
    .plans{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 40px;
        .plan{
            display: flex;
            gap: 15px;
            padding: 15px 10px;
            border: 1px solid ${({ theme }) => theme.colors.coolGrey};
            border-radius: 6px;
            cursor: pointer;
            .plan-content{
                h4{
                    margin-bottom: 5px;
                    @media(min-width: ${({ theme }) => theme.screenSize.md}){
                        margin-top: 30px;
                    }
                }
                .scheme{
                    font-size: 14px;
                    color: ${({ theme }) => theme.colors.marineBlue};
                    margin-top: 5px;
                    width: 100%;
                }
            }
            &.active{
                border-color: ${({ theme }) => theme.colors.purpleBlue};
                background-color: ${({ theme }) => theme.colors.magnolia};
            }
            @media(min-width: ${({ theme }) => theme.screenSize.md}){
                flex-direction: column;
                
            }
        }
        @media(min-width: ${({ theme }) => theme.screenSize.md}){
            flex-direction: row;
            /* flex-wrap: wrap; */
            .plan{
                flex-basis: 33%;
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