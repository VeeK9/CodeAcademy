
import styled from "styled-components";
import UsersContext, {UsersActionTypes} from "../../contexts/UsersContext";
import { useContext } from "react";
import UserCard from "../UI/UserCard";

const StyledSection = styled.section`
  > h1 {
    padding-top: 40px;
    text-align: center;
  }
  > div {
    width: 80%;
    margin: 0 auto;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`

const AdminPanel = () => {

  const {users, setUsers, loggedInUser} = useContext(UsersContext);

  return (
    <StyledSection>
      <h1>Admin Stuff</h1>
      <div>
        {
          users.filter(user => user.id !== loggedInUser.id).map(user => 
            <UserCard 
              key={user.id}
              user={user}
            />)
        }
      </div>
    </StyledSection>
  );
}
 
export default AdminPanel;