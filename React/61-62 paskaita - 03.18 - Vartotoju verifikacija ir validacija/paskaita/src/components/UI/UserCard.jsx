import { useContext } from "react";
import styled from "styled-components"
import UsersContext, { UsersActionTypes } from "../../contexts/UsersContext";

const StyledDiv = styled.div`
  padding: 10px 20px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  > h3 {
    margin: 0;
  }
  > p {
    text-align: justify;
    margin: 0;
  }
`

const UserCard = ({user}) => {

  const {setUsers}= useContext(UsersContext);

  return (
    <StyledDiv>
      <h3>{user.username}</h3>
      {
        user.role === 'admin' ?
        <button
          onClick={() => setUsers({
            type: UsersActionTypes.changeData,
            data: {
              role: 'user',
            },
            id: user.id
          })}
        >Remove Admin</button> :
        <button
          onClick={() => setUsers({
            type: UsersActionTypes.changeData,
            data: {
              role: 'admin',
            },
            id: user.id
          })}
        >Add Admin</button>

      }
    </StyledDiv>
  );
}
 
export default UserCard;