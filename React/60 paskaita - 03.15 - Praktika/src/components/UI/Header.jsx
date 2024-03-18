import styled from "styled-components";
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  height: 150px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 10px 20px;

  > div {
    height: 100%;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      height: 80%;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 10px;
    padding: 0;
    position: relative;
    padding-left: ${props => props.$loggedIn ? '110px' : '0'};
  }

  a {
    color: black;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid lightgray;
    border-radius: 15px;
    transition: 0.2s;

    &:hover {
      color: gray;
      background-color: lightgray;
    }

    &.active {
      color: white;
      background-color: gray;
    }
  }
  > .user {
    display: flex;
    flex-direction: column;
    width: 150px;
    align-items: center;
    gap: 5px;
    > * {
      margin: 0;
    }
    > img {
      height: 35%;
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border: 1px solid lightgray;
    }
  }

  > nav:last-child {
    width: 300px;
    > ul {
      justify-content: flex-end;
    }
  }
`

const Header = () => {

  const {loggedInUser, setLoggedInUser} = useContext(UserContext);

  return (
    <StyledHeader $loggedIn={loggedInUser}>
      <div>
        <img
          src="https://logomakercdn.truic.com/ux-flow/industry/calligraphy-meta.png"
          alt="writers block"
        />
      </div>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='authors'>Authors</NavLink></li>
          <li><NavLink to='posts'>Posts</NavLink></li>
          {
            loggedInUser &&
            <li><NavLink to={`${loggedInUser.username}/posts`}>My Posts</NavLink></li>
          }
          {
            loggedInUser &&
            <li><NavLink to={`${loggedInUser.username}/add_new_post`}>New Post</NavLink></li>
          }
        </ul>
      </nav>
      {
        loggedInUser ?
        <div
          className="user"
        >
          <img src={loggedInUser.avatar} alt={loggedInUser.username} />
          <h3>{loggedInUser.username}</h3>
          <Link to='/' onClick={() => setLoggedInUser('')}>Log Out</Link>
        </div> :
        <nav>
          <ul>
            <li><NavLink to='login'>Login</NavLink></li>
            <li><NavLink to='register'>Register</NavLink></li>
          </ul>
        </nav>
      }
    </StyledHeader>
  );
}
 
export default Header;