import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 50px;

  color: ${props => props.$darkMode ? 'white' : '#3a3a3a'};
  background-color: ${props => props.$darkMode ? '#3a3a3a' : 'white'};
  transition: 0.4s;

  > div > button {
    background-color: ${props => props.$darkMode ? '#3a3a3a' : 'white'};
    color: ${props => props.$darkMode ? 'white' : '#3a3a3a'};
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid ${props => props.$darkMode ? 'white' : '#3a3a3a'};
    cursor: pointer;
    transition: 0.4s;    
  }

  .x {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    aspect-ratio: 1 / 1;
    height: 100%;
    width: 80px;

    > div {
      position: absolute;
      display: flex;
      gap: 5px;
      flex-direction: column;
      opacity: 0;
      visibility: hidden;
      top: 0;
      right: 0;
      width: 100%;
      background-color: white;
      padding: 10px;
      transition: 0.4s;
      background-color: transparent;

      > button {
        padding: 5px 10px;
        color: ${props => props.$darkMode ? 'white' : '#3a3a3a'};
        background-color: ${props => props.$darkMode ? '#3a3a3a' : 'white'};
        cursor: pointer;
      }
      > .lightBtn {
        background-color: white;
        color: #3a3a3a;
        border: 1px solid #3a3a3a;
        &:active {
          box-shadow: 1px 1px 2px inset black;
        }
      }
      > .darkBtn {
        background-color: #3a3a3a;
        color: white;
        border: 1px solid white;
        &:active {
          box-shadow: 1px 1px 2px inset black;
        }
      }
    }

    > hr {
      width: 30px;
      border: 1px solid ${props => props.$darkMode ? 'white' : '#3a3a3a'};
      transition: 0.4s; 
      margin: 0;
    }

    &:hover {
      > hr:first-child {
        transform:  translateY(14px) rotate(135deg)
      }
      > hr:nth-child(2) {
        opacity: 0;
      }
      > hr:nth-child(3) {
        transform:  translateY(-14px) rotate(-135deg);
      }
      > div {
      opacity: 1;
      visibility: visible;
      transform: translateY(20px);
      }
    }
  }
`

const Header = () => {

  const {darkMode, setDarkMode} = useContext(UsersContext);

  return (
    <StyledHeader $darkMode={darkMode}>
      <div>logo</div>
      <div>menu</div>
      <div>search</div>
      <div>imdbpro</div>
      <div>watchlist</div>
      <div>sign in</div>
      <div className="x">
        <hr />
        <hr />
        <hr />
        <div>
          <button className='lightBtn' onClick={()=>setDarkMode(false)}>Light</button>
          <button className='darkBtn' onClick={()=>setDarkMode(true)}>Dark</button>
        </div>
      </div>
    </StyledHeader>
  );
}
 
export default Header;