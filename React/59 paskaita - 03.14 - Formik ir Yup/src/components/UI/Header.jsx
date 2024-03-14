import {Link, NavLink} from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  > div > a > img {
    width: 50px;
    height: auto;
  }
  ul {
    display: flex;
    gap: 10px;
    list-style-type: none;
    padding: 0;
    > li {
      > a {
        padding: 5px 10px;
        border: 1px solid lightgray;
        color: black;
        text-decoration: none;
        &.active {
          background-color: gray;
          color: white;
        }
        &:hover {
          background-color: lightgray;
          color: white;
        }
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <img
            src="https://img.stackshare.io/service/8846/preview.png"
            alt=""
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
 
export default Header;