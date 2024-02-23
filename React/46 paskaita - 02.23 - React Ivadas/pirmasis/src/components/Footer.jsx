const Footer = () => {
  const owner = "Rokis";
  const metai = new Date().getFullYear();
  return (  
    <footer>
      <p>&copy; {metai} owned by {owner}</p>
    </footer>
  );
}
 
export default Footer;