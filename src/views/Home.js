import styled from "styled-components";
import Menu from '../components/Menu.js'
import slider from '../utils/images/slider.mp4'
import logo from '../utils/images/logo.png'

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const StyledVideo = styled.video`
  min-width: 100vw;
  object-fit: cover;
  position: fixed;

`;

const StyledTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Pirulen";
  color: white;
  text-shadow: 0 0 30px black;
`;

const StyledBorderBottomWrapper = styled.div`
position: absolute;
top: 95%;
left: 5%;
right: 5%;
display: flex;
justify-content: space-between;
`

const BorderBottomLeft = styled.div`
flex-grow: 1;
height: 5px;
background-color: white;
box-shadow: 0 0 30px black;
`

const BorderBottomRight = styled.div`
flex-grow: 1;
height: 5px;
background-color: white;
box-shadow: 0 0 30px black;
`

const BorderLeft = styled.div`
position: absolute;
bottom: 5%;
left: 5%;
top: 5%;
width: 5px;
background-color: white;
box-shadow: 0 0 30px black;
`

const BorderRight = styled.div`
position: absolute;
bottom: 5%;
right: 5%;
top: 5%;
width: 5px;
background-color: white;
box-shadow: 0 0 30px black;
`
const StyledLogo = styled.img`
margin: 0 1rem;
height: 25rem;
transform: translateY(-65%);
`

function Home() {
  return (
    <StyledWrapper>
      <StyledVideo autoPlay muted loop>
        <source src={slider} type="video/mp4" />
      </StyledVideo>
      <StyledBorderBottomWrapper>
        <BorderBottomLeft />
        <StyledLogo src={logo} />
        <BorderBottomRight />
      </StyledBorderBottomWrapper>
      <BorderLeft />
      <BorderRight />
      <Menu />
      <StyledTitle>
        Real estate provides the highest returns, the greatest values and the least risk.” – Armstrong Williams.
      </StyledTitle>
    </StyledWrapper>
  );
}

export default Home;
