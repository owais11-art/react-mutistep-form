import styled from "styled-components";

export const StyledPlan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.magnolia};
    border-radius: 6px;
    margin-top: 30px;
    .monthly, .yearly{
        font-weight: 500;
        color: ${({ theme }) => theme.colors.coolGrey};
        &.active{
            color: ${({ theme }) => theme.colors.marineBlue};
        }
    }
    .button-slider{
        width:40px;
        height: 20px;
        cursor: pointer;
        border-radius: 50px;
        display: flex;
        align-items: center;
        padding: 0 2px;
        background-color: ${({ theme }) => theme.colors.marineBlue};
        .knob{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.colors.magnolia};
        }
        &.slide{
            justify-content: flex-end;
        }
    }
`