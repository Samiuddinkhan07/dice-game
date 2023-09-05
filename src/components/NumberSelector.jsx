import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
 const numberArr = [1,2,3,4,5,6];

 const numberSelectorHandler = (value) =>{
    setSelectedNumber(value);
    setError("")
 }
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
            {numberArr.map((number, i) => {
                return <Box
                isSelected={
                    number === selectedNumber
                }
                key={i} onClick={() => numberSelectorHandler(number)}>{number}</Box>
            })}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display:flex;
        gap:24px;
    }

    p{
        font-size:24px;
        font-weight: 600px;
    }
    .error{
        color:red
    }
`;

const Box = styled.div`
    height: 50px;
    width: 50px;
    border:1px solid #000;
    display: grid;
    place-items: center;
    font-size:24px;
    font-weight: 700;
    background-color: ${(props => props.isSelected ? "black" : "white")};
    color: ${(props => !props.isSelected ? "black" : "white")};
`;
