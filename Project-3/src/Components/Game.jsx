import React, { useState } from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Rolling from "./Rolling";
import Rules from "./Rules";

const Game = () => {
  const [score, SetScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }; 

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = Math.floor(getRandomNumber(1, 7));
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      SetScore((prev) => prev + randomNumber);
    } else {
      SetScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const ResetScore = () => {
    SetScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <Score score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Rolling currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={ResetScore}>Reset</OutlineButton>
        <Button
        onClick={() => setShowRules((prev) => !prev)}
        >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
     { showRules && <Rules />}
    </MainContainer>
  );
};

export default Game;

const MainContainer = styled.div`
  max-width: 1028px;
  margin: 0 auto;
  padding-top: 50px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }
`;

const Button = styled.button`
  color: white;
  background-color: black;
  padding: 10px 18px;
  min-width: 220px;
  border: 1px solid black;
  font-size: 16px;
  transition: 0.4s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: black;
    border: 1px solid black;
    transition: 0.3s ease-in;
  }
`;

const OutlineButton = styled.button`
  color: #000000;
  background-color: #ffffff;
  padding: 10px 18px;
  min-width: 220px;
  border: 1px solid black;
  font-size: 16px;
  transition: 0.4s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    border: 1px solid black;
    transition: 0.3s ease-in;
  }
`;
