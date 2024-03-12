import styled from "styled-components";
import Icon from "../UI/Icon";

const StyledFooter = styled.footer`
  height: 200px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  > ul {
    list-style-type: none;
    padding: 0;
    margin: 5px;
    display: flex;
    gap: 20px;
    > li > a {
      color: black;
    }
  }
  > p {
    margin: 5px;
  }
  &:last-child {
    padding-bottom: 20px;
  }
`

const Footer = () => {

  const icons = [
    {
      href:"https://www.facebook.com",
      className:"bi bi-facebook"
    },{
      href:"https://www.instagram.com",
      className:"bi bi-instagram"
    },{
      href:"https://www.twitter.com",
      className:"bi bi-twitter"
    },{
      href:"https://www.pinterest.com",
      className:"bi bi-pinterest"
    },
  ]

  return (
    <StyledFooter>
      <ul>
        {
          icons.map((icon, i) => {
            return (
            <li
              key={i}
            >
              <a href={icon.href}>
                <Icon 
                  key={i}
                  className={icon.className}
                />
              </a>
            </li>)
          })
        }
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <p>Tenetur porro sequi aspernatur sed at quia itaque et nulla sit nostrum?</p>
    </StyledFooter>
  );
}
 
export default Footer;