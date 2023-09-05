import React from 'react'
import styled from 'styled-components';
import Button from '../Styled/Button';
const StartGame = ({toggle}) => {
  return (
    <Contianer>
      <div><img src="/images/dices.png" alt="" /></div>
      <div className='content'>
        <h1>
            DICE GAME
        </h1>
        <Button onClick={toggle}>
            Play Now
        </Button>
      </div>
    </Contianer>
  )
}

export default StartGame


const Contianer = styled.div`
    max-width: 1180px;
    display: flex;
    align-items: center;
    margin:0 auto;
    height: 100vh;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`;


