import styled from "styled-components";

export const StyledStepOne = styled.div`
    padding: 20px;
    /* width: 80%; */
    margin: 0 auto;
    h1{
        color: ${({ theme }) => theme.colors.marineBlue};
        margin-bottom: 10px;
    }
    p{
        color: ${({ theme }) => theme.colors.coolGrey};
        line-height: 1.3;
    }
    form{
        margin-top: 20px;
        .form-control{
            margin-top: 15px;
            .label{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                color: ${({ theme }) => theme.colors.marineBlue};
                .error-message{
                    color: ${({ theme }) => theme.colors.strawberryRed};
                    font-weight: 500;
                }
                margin-bottom: 5px;
            }
            .input-wrapper{
                border: 1px solid ${({ theme }) => theme.colors.coolGrey};
                border-radius: 4px;
                input{
                    width: 100%;
                    border: none;
                    border-radius: 4px;
                    outline: none;
                    padding: 10px;
                    font-family: ${({ theme }) => theme.fonts.ubuntu};
                    color: ${({ theme }) => theme.colors.marineBlue};
                    font-weight: 500;
                    &::placeholder{
                        font-family: ${({ theme }) => theme.fonts.ubuntu};
                        font-weight: 500;
                        color: ${({ theme }) => theme.colors.coolGrey};
                    }
                }
                &.focus{
                    border-color: ${({ theme }) => theme.colors.purpleBlue};
                }
                &.error{
                    border-color: ${({ theme }) => theme.colors.strawberryRed};
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