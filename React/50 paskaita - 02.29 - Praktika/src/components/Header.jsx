const Header = ({ runnersFollowed, logIn, logOut, loggedIn, user, users }) => {

  const logging = e => {
    e.preventDefault();
    const currentUser = {
      userName: e.target.elements.user.value,
      password: e.target.elements.password.value
    };
    if (users.find(user =>
      user.userName === currentUser.userName && user.password === currentUser.password
    )) {
      logIn(users.find(user =>
        user.userName === currentUser.userName && user.password === currentUser.password
      ))
    } else {
      alert('Wrong user name and/or password')
    }
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
              <p>Hello, <span>{user.userName}</span></p>
              <img
                src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
                alt="User"
              />
            </div>
            {
              user.type === "admin" ?
                <p>Administration mode</p> :
                <p>No. of athletes followed: {runnersFollowed}</p>
            }
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