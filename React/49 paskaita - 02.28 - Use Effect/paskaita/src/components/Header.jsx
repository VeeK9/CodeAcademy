const Header = ({bendrasKiekis, ragautuKiekis, neragautuKiekis}) => {
  return (
    <header>
      <p>Bendras patiekalu kiekis: {bendrasKiekis}</p>
      <p>Ragautu patiekalu kiekis: {ragautuKiekis}</p>
      <p>Neragautu patiekalu kiekis: {neragautuKiekis}</p>
    </header>
  );
}
 
export default Header;