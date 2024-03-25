import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 150px;
  color: ${props => props.$darkMode ? 'white' : '#3a3a3a'};
  background-color: ${props => props.$darkMode ? '#3a3a3a' : 'white'};
  transition: 0.4s;
`

const Content = () => {

  const {darkMode, setDarkMode} = useContext(UsersContext);

  return (
    <StyledSection $darkMode={darkMode}>

      <h1>{darkMode ? ' Hello, Darkness' : 'Sunshine all day long'}</h1>
      
    </StyledSection>
  );
}
 
export default Content;