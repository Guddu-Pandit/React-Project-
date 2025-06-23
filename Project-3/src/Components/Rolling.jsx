
import styled from 'styled-components'

const Rolling = ({currentDice,roleDice}) => {


  return (
    <DiceContainer>
    <div className='dice' onClick={roleDice}>
        <img src={`/Images/dice_${currentDice}.png`} alt="Dice 1" />
    </div>
    <p>Click on Dice to roll</p>
</DiceContainer>
  )
}

export default Rolling

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
    font-weight: 500px;
}
`;