
import styled from 'styled-components'

const LandingPage = ({ toggle }) => {
  return (
    <Container>
      <div> 
      <img src="/Images/dice.png" alt="Dice" />      
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle} >Play Now</Button>
      </div>
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  max-width: 1028px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  img {
    width: 100%;
  }
  .content{
    h1{
      font-size:96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
color: white;
background-color: black;
padding: 10px 18px;
min-width: 220px;
border: 1px solid black;
font-size: 16px;
transition: 0.4s background ease-in;
cursor: pointer; 

&:hover{
  background-color: #ffffff;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-in;
}

`;