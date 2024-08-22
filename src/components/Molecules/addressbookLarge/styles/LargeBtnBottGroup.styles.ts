import styled from "styled-components";

export const LargeBtnBottGroup = styled.div`
    display:flex;
    justify-content:flex-end;
    gap:6px;
    margin-top:6px;
    button {
        width:104px;
        height:30px;
        border-radius:50px;
        box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
        font-size:1.2rem;
        font-weight:600;
        &:first-child {
            background-color:#EBEBF3;
            color:#191919;
        }
        &:last-child {
            background-color:#0D42E5;
            color:#fff;
        }
    }
`