import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";




function App() {
 const [isGameStart,setIsGameStarted] = useState(false);

 const toggleGamePlay = () =>{
    setIsGameStarted(prev => !prev)
 }

  return (
    <>
    {isGameStart ? <GamePlay/> :  <StartGame toggle={toggleGamePlay}/>}
       
    </>
  )
}

export default App
