import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png"

const StyledHeader = styled.header`
  height: 120px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    height: 100px;
    margin: 0;
  }
  > nav > ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    gap: 10px;
    > li > a {
      text-decoration: none;
      color: black;
      padding: 5px 10px;
      border-radius: 10px;
      box-sizing: border-box;
      &.active {
        color: white;
        background-color: #fbac8c;
      }
      &:hover {
        background-color: tomato;
      }
    }
  }
  > div {
    display: grid;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    place-items: center;
    gap: 10px;
    > img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 50%; 
      grid-row-start: 1;
      grid-column-start: span 2;
    }
    > button {
      background-color: white;
      border-radius: 15px;
      border: 1px solid lightgray;
      padding: 5px 10px;
      cursor: pointer;
      &:hover {
        background-color: tomato;
      }
    }
  }
`

const Header = () => {

  const { loggedInUser, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <img
        src={logo}
        alt=""
      />
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/plants">All plants</NavLink></li>
          {
            loggedInUser && <li><NavLink to="addNewPlant">Add new plant</NavLink></li>
          }
        </ul>
      </nav>
      {
        loggedInUser ?
        <div>
          <span>Hi, {loggedInUser.name}!</span>
          <img
            src={loggedInUser.avatar}
            alt={loggedInUser.username} 
          />
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
          >Log out</button>
        </div> :
        <nav>
          <ul>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </ul>
        </nav>
      }
    </StyledHeader>
  );
}
 
export default Header;