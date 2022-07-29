import styled from "styled-components";
import routes from '../routing/routes';
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
position: absolute;
top: 5%;
left: 5%;
right: 5%;
display: flex;
justify-content: space-between;
`;

const BorderLeft = styled.div`
flex-grow: 1;
height: 5px;
background-color: white;
box-shadow: 0 0 30px black;
`

const BorderRight = styled.div`
flex-grow: 1;
height: 5px;
background-color: white;
box-shadow: 0 0 30px black;
`;

const StyledLink = styled(Link)`
text-decoration: none;
margin: 0 1rem;
color: white;
font-size: 1.5rem;

&:hover{
color: rgb(166, 166, 166);
}
`

const MenuWrapper = styled.div`
transform: translateY(-50%);
`

function Menu() {
  return (
    <StyledWrapper>
      <BorderLeft />
      <MenuWrapper>
        {routes.map((route, i) => {
          return(
            <StyledLink key={i} to={route.path}>
              {route.name}
            </StyledLink>
          )
        })}
      </MenuWrapper>
      <BorderRight />
    </StyledWrapper>
  );
}

export default Menu;
