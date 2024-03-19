import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid lightgray;
  height: 80px;
  > div {
    height: 80%;
    > a > img {
    height: 100%;
    }
  }
  > div:last-child {
    display: flex;
    gap: 10px;
    align-items: center;
    > p > a {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    > button {
      padding: 5px 10px;
      background-color: white;
      border: 1px solid black;
      cursor: pointer;
      &:hover {
        background-color: lightgray;
      }
    }
  }
  ul {
    display: flex;
    gap: 15px;
    list-style-type: none;
    padding: 0;

    a {
      color: black;
      text-decoration: none;
      padding: 5px 10px;
      font-size: 1.5rem;
      border: 1px solid black;
      transition: 0.3s;
      &:hover {
        background-color: lightgray;
      }
    }
    a.active {
      background-color: gray;
      color: white;
    }
  }
`

const Header = () => {

  const {loggedInUser, setLoggedInUser} = useContext(UsersContext);

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div>
        <Link to='/'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="react logo"
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/cards/allCards'>Cards</NavLink></li>
        </ul>
      </nav>
      {
        loggedInUser ?
        <div>
          <p>
            <Link to={`/user/${loggedInUser.username}`}>{loggedInUser.username}</Link>
          </p>
          <button onClick={() => {
            setLoggedInUser(false);
            navigate('/');
            }}>Log Out</button>
        </div> :
        <nav>
          <ul>
            <li><NavLink to='/user/register'>Register</NavLink></li>
            <li><NavLink to='/user/login'>Login</NavLink></li>
          </ul>
        </nav>
      }
    </StyledHeader>
  );
}
 
export default Header;