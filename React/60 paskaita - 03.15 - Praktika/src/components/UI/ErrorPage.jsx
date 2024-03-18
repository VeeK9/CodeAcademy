import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #f3f3f3;
  text-align: center;
`

const ErrorPage = () => {
  return (
    <StyledDiv>
      <h1>404 ERROR</h1>
      <h3>Page not found</h3>
    </StyledDiv>
  );
}
 
export default ErrorPage;