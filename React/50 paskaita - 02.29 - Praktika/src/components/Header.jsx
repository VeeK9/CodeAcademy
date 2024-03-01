const Header = ({runnersFollowed, logIn, logOut, loggedIn, users, setUser}) => {

  const logging = e => {
    e.preventDefault();
    // console.log(users.filter(user => user.userName === e.target.elements.user.value));
    // if(users.filter(user => user.userName === e.target.elements.user.value)){
      logIn()
    // } else {
    //   logOut()
    // }
  }
  return (
    <header>
      <img
        src="https://cdn0.iconfinder.com/data/icons/run-1/500/athletics-runner-competition-running_16-512.png"
        alt=""
      />
      {
        loggedIn ? 
          <div
            className="logIn"
          >
            <div
              className="user"
              >
              <span>Hello, userName</span>
              <img
                src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
                alt="User"
              />
            </div>
            <span>No. of athletes followed: {runnersFollowed}</span>
            <button
              onClick={() => logOut()}
            >
              Log Out    
            </button>
          </div> :
          <form
            onSubmit={logging}
          >
            <input
              type="text"
              id="user"
              placeholder="User Name"  
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
            />
            <input
              type="submit"
              value="Log In"
            />
          </form>
      }
    </header>
  );
}
 
export default Header;