import styled from "styled-components";
import Nav from "../UI/Nav";
import logo from "../../Images/logo.png"
import Button from "../UI/Button";
import { useContext } from "react";
import PageLoaderContext from "../../contexts/PageLoaderContext";
import UsersContext from "../../contexts/UsersContext";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 120px;
  display: grid;
  border-bottom: 1px solid lightgray;
  grid-template-columns: 15% 70% 15%;
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
      width: 60%;
      height: 60%;
      object-fit: cover;
    }
  }
`

const Header = () => {

  const {setPageLoader} = useContext(PageLoaderContext)
  const { currentUser, setCurrentUser } = useContext(UsersContext)

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
            func={setCurrentUser}
            info={''}
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