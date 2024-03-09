import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import PageLoaderContext from "../../contexts/PageLoaderContext";
import UsersContext from "../../contexts/UsersContext";

const StyledNav = styled.nav`
  > ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`

const Nav = () => {

  const { setPageLoader } = useContext(PageLoaderContext)
  const { currentUser } = useContext(UsersContext)

  return (
    <StyledNav>
      <ul>
        <li>
          <Button 
            text="All Plants"
            func={setPageLoader}
            info='allPlants'
          />
        </li>
        {
          currentUser !== '' ?
          <li>
            <Button 
              text="My Plants"
              func={setPageLoader}
              info='myPlants'
            />
          </li> : null
        }
        {
          currentUser !== 'admin' ?
          <>
            <li>
              <Button 
                text="About Us"
                func={setPageLoader}
                info='aboutUs'
              />
            </li>
            <li>
              <Button 
                text="Community"
                func={setPageLoader}
                info='community'
              />
            </li>
          </> :
          <li>
          <Button 
            text="Add New Plant"
            func={setPageLoader}
            info='addNewPlant'
          />
          </li>
        }
      </ul>
    </StyledNav>
  );
}
 
export default Nav;