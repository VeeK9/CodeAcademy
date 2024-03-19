import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 20px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: relative;
  > h3 {
    margin: 0;
  }
  > p {
    text-align: justify;
    margin: 0;
  }
`

const Comment = ({comment}) => {
  return (
    <StyledDiv>
      <p>{comment.text}</p>
    </StyledDiv>
  );
}
 
export default Comment;