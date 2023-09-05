import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'
import RollDice from './RollDice'
import Button, { OutlineButton } from '../Styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1)
  const [error,setError] = useState("")
  const [rules,setRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () =>{
    if(!selectedNumber){
      setError("Please Select a Number") 
      return
    }   
    
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice(prev => randomNumber)


    if(selectedNumber === randomNumber){
      setScore(prev => prev + randomNumber)
    } else{
      setScore(prev => prev - 2)
    }

    setSelectedNumber(undefined)
  }

  const resetScore = () =>{
    setScore(0)
  }

  const showRules = () =>{
    setRules(prev => !prev)
  }

  return (
    <MainContainer>
       <div className='top-section'>
           <TotalScore score={score}/>
           <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
       </div>
       <RollDice currentDice={currentDice} rollDice={rollDice}/>
       <div className="btns">
        <OutlineButton onClick={resetScore}>Reset score</OutlineButton>
        <Button onClick={showRules}>{rules ? "Hide Rules" : "Show Rules"}</Button>
       </div>
      {rules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
    padding:5px 10px;
    .top-section{
        display: flex;
        align-items: end;
        justify-content: space-between;
    }
    .btns{
      display:flex;
      flex-direction: column;
      align-items: center;
      gap:10px;
      margin-top:20px
    }
`
