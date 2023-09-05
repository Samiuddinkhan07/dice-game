import styled from 'styled-components'

const Button = styled.button`
    background-color: #000;
    color:#fff;
    padding: 10px 18px;
    min-width: 220px;
    border: none;
    border-radius: 5px;
    font-size:16px;
    cursor: pointer;
    border:1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        border:1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }

`;

export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border:1px solid black;
    &:hover{
        background-color: black;
        border:1px solid transparent;
        color: white;
        transition: 0.3s background ease-in;
    }

`;

export default Button