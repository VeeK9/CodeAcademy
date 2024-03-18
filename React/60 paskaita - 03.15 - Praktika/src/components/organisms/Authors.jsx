import styled from "styled-components";
import SmallAuthor from "../UI/SmallAuthor";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const StyledArticle = styled.article`
  > div {
    background-color: #f3f3f3;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
`

const Authors = () => {

  const {users} = useContext(UserContext);
  
  return (
    <StyledArticle>
      <div>
        {
          users && users.map(user =>
            <SmallAuthor
              key={user.id}
              user={user}
            />
          )
        }
      </div>
    </StyledArticle>
  );
}
 
export default Authors;