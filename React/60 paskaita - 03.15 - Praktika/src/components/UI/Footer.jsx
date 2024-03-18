import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 150px;
  width: 100%;
  background-color: #f3f3f3;
  position: relative;
  bottom: -150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  > ul {
    list-style-type: none;
    padding: 0;
    margin: 5px;
    display: flex;
    gap: 20px;
    > li > a {
      color: gray;
      font-size: 1.4rem;
    }
  }
  > p {
    margin: 5px;
  }
  /* &:last-child {
    padding-bottom: 20px;
  } */
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
      className:"bi bi-twitter-x"
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
                rel="noreferrer"
              >
                <i className={icon.className}/>
              </a>
            </li>
          )
        }
      </ul>
      <p>Copyright &copy; 2024. Writers Block. All rights reserved.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam molestiae nisi aspernatur ipsa? Iure.</p>
      <p>Tenetur porro sequi aspernatur sed at quia itaque et nulla sit nostrum!</p>
    </StyledFooter>
  );
}
 
export default Footer;