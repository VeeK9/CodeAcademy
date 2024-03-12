import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  > ul {
    list-style-type: none;
    padding: 0;
    margin: 5px;
    display: flex;
    gap: 20px;
    > li > a {
      color: #fbac8c;
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
          icons.map((icon, i) => 
            <li
              key={i}
            >
              <a 
                href={icon.href}
                target="_blank"
              >
                <i className={icon.className}/>
              </a>
            </li>
          )
        }
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <p>Tenetur porro sequi aspernatur sed at quia itaque et nulla sit nostrum?</p>
    </StyledFooter>
  );
}
 
export default Footer;