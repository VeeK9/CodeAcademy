import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 150px;

  color: ${props => props.$darkMode ? 'white' : '#3a3a3a'};
  background-color: ${props => props.$darkMode ? '#3a3a3a' : 'white'};
  transition: 0.4s;
`

const Footer = () => {

  const {darkMode, setDarkMode} = useContext(UsersContext);

  return (
    <StyledFooter $darkMode={darkMode}>
      <div>FOOTERIS</div>
    </StyledFooter>
  );
}
 
export default Footer;