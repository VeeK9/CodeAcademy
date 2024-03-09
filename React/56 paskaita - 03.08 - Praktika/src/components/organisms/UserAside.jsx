import styled from "styled-components";
import User from "../UI/User";
import UserSuggestion from "../UI/UserSuggestion";

const StyledDiv = styled.div`
  position: sticky;
  top: 130px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 800px;
`

const UserAside = () => {
  return (
    <StyledDiv>
      <User />
      <UserSuggestion />
    </StyledDiv>
  );
}
 
export default UserAside;