import styled from "styled-components";
import User from "../UI/User";
import UserSuggestion from "../UI/UserSuggestion";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledDiv = styled.div`
  position: sticky;
  top: 130px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - 340px);
`

const UserAside = () => {

  const {currentUser} = useContext(UsersContext)

  return (
    <StyledDiv>
      {
        currentUser &&
        <User />
      }
      <UserSuggestion />
    </StyledDiv>
  );
}
 
export default UserAside;