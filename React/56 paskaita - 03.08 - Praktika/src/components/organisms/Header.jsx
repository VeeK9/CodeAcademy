import styled from "styled-components";
import Nav from "../UI/Nav";
import LogInForm from "./LogInForm";
import logo from "../../Images/logo.png"

const StyledHeader = styled.header`
  height: 120px;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  box-sizing: border-box;
  background-color: gray;
  > img {
    width: 70%;
  }
  > nav {
    flex-grow: 1;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <img
        src={logo}
        alt="My Plants Page"
      />
      <Nav />
      <LogInForm />
    </StyledHeader>
  );
}
 
export default Header;