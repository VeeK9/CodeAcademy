import ListItem from "./ListItem";

const Footer = () => {

  const socials = [{
    url: "https://www.strava.com",
    class: ['bi', ' bi-strava']
  },{
    url: "https://www.facebook.com",
    class: ['bi', ' bi-facebook']
  },{
    url: "https://www.instagram.com",
    class: ['bi', ' bi-instagram']
  },{
    url: "https://www.twitter.com",
    class: ['bi', ' bi-twitter-x']
  },{
    url: "https://www.youtube.com",
    class: ['bi', ' bi-youtube']
  }];

  return (
    <footer>
      <ul>
        {
          socials.map((li, i) =>  
            <ListItem 
              key={i}
              social={li}
            />)
        }
      </ul>
      <p>Copyright © 2024 Running Socially Ltd. All rights reserved. Violators will be f*cked.</p>
    </footer>
  );
}
 
export default Footer;