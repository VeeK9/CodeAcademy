import styled from "styled-components";

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
  return (
    <StyledNav>
      <ul>
        <li>all plants</li>
        <li>my plants</li>
      </ul>
    </StyledNav>
  );
}
 
export default Nav;