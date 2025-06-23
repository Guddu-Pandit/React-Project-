import { useState } from "react"
import  Game  from "./Components/Game"
import LandingPage from "./Components/LandingPage"

function App() {

  const [isGameStarted,setIsGameStarted]= useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  }; 

  return (
    <>
    {isGameStarted ? <Game/> : <LandingPage toggle={toggleGame} />}

    </>
  )
}

export default App;
