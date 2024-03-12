import styled from "styled-components";
import Nav from "../UI/Nav";
import logo from "../../Images/logo.png"
import Button from "../UI/Button";
import { useContext } from "react";
import PageLoaderContext from "../../contexts/PageLoaderContext";
import UsersContext from "../../contexts/UsersContext";

const StyledHeader = styled.header`
  position: sticky;
  z-index: 1;
  top: 0;
  height: 120px;
  display: grid;
  border-bottom: 1px solid lightgray;
  grid-template-columns: 20% 60% 20%;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  box-sizing: border-box;
  background-color: white;
  > img {
    height: 90px;
  }
  > nav {
    flex-grow: 1;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    > img {
      border-radius: 50%;
      height: 50px;
      object-fit: cover;
      border: 1px solid lightgray;
    }
  }
`

const Header = () => {

  const {setPageLoader} = useContext(PageLoaderContext)
  const { currentUser, setCurrentUser } = useContext(UsersContext)

  const logOut = () => {
    setCurrentUser('');
    setPageLoader('allPlants')
  }

  return (
    <StyledHeader>
      <img
        src={logo}
        alt="My Plants Page"
      />
      <Nav />
      {
        currentUser !== '' ?
        <div>
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
          />
          <Button 
            text="Log Out"
            func={logOut}
          />
        </div> :
        <div>
          <Button 
            text="Log in"
            func={setPageLoader}
            info={'logIn'}
          />
          <Button 
            text="Sign up"
            func={setPageLoader}
            info={'signUp'}
          />
        </div>
      }
    </StyledHeader>
  );
}
 
export default Header;