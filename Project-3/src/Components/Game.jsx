import React, { useState } from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import Rolling from './Rolling'

const Game = () => {
    const [score, SetScore] = useState(0);
        const [selectedNumber, setSelectedNumber] = useState();
        const[currentDice,setCurrentDice] = useState(1);
        const [error, setError] = useState("");
       const getRandomNumber =(min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const roleDice = ()=> {
    if (!selectedNumber)  
     {setError ("You have not selected any number") 
    return;}
    setError("")
    const randomNumber = Math.floor(getRandomNumber(1, 7));
    setCurrentDice((prev) => randomNumber)


if (selectedNumber === randomNumber) {
    SetScore((prev)=> prev + randomNumber)
}else {
    SetScore((prev)=> prev - 2)
}

  setSelectedNumber(undefined)

}

  return (
    <MainContainer>
        <div className='top_section'>
       <Score 
       score={score}
       />
       <NumberSelector 
       error={error}
       setError={setError}
       selectedNumber={selectedNumber}
       setSelectedNumber={setSelectedNumber}
       />
       </div>
       <Rolling 
       currentDice={currentDice}
       roleDice={roleDice}
       />
    </MainContainer>
  )
}

export default Game

const MainContainer = styled.div`
max-width: 1028px;
margin: 0 auto;
padding-top: 50px;
.top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}`;