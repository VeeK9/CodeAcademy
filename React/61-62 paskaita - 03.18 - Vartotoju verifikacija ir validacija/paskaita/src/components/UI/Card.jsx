import styled from "styled-components"

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

const Card = ({card}) => {
  return (
    <StyledDiv>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </StyledDiv>
  );
}
 
export default Card;