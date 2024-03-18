import styled from "styled-components";
import {Link} from "react-router-dom"

const StyledFooter = styled.footer`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightgray;
  padding: 5px 10px;
  > div {
    height: 80%;
    display: flex;
    align-items: center;
    gap: 10px;
    > a {
      height: 60%;
      img {
        height: 100%;
      }
    }
  }
  > ul {
    list-style-type: none;
    padding: 0;
    margin: 5px;
    gap: 20px;
    > li:first-child {
      font-size: 1.2rem;
      font-weight: 700;
      padding-bottom: 10px;
    }
    > li {
      padding-bottom: 5px;
      > a {
      color: black;
      text-decoration: none;
        > i {
          font-size: 1.5rem;
          padding-right: 15px;
        }
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Link to='/'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="react logo"
          />
        </Link>
        <p>Copyrights &copy; 2024. All right reserved</p>
      </div>
      <ul>
        <li>Legal</li>
        <li><Link>Terms & Conditions</Link></li>
        <li><Link>Privacy Policy</Link></li>
        <li><Link>Terms of Use</Link></li>
      </ul>
      <ul>
        <li>Socials</li>
        <li>
          <Link><i className="bi bi-facebook"></i></Link>
          <Link><i className="bi bi-instagram"></i></Link>
        </li>
        <li>
          <Link><i className="bi bi-twitter-x"></i></Link>
          <Link><i className="bi bi-linkedin"></i></Link>
        </li>
      </ul>
    </StyledFooter>
  );
}
 
export default Footer;