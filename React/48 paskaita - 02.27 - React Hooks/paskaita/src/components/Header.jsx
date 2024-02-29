const Header = ({ state, logIn, logOut }) => {
  return (
    <header>
      {
        state ?
        <button onClick={() => logOut()}>Log Out</button> :
        <>
          <button>Sign Up</button>
          <button onClick={() => logIn()}>Log In</button>
        </>
      }
    </header>
  );
}
 
export default Header;