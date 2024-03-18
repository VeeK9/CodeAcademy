import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import PostContext from "../contexts/PostContext";
import { Link } from "react-router-dom"

const StyledAside = styled.aside`
  width: 300px;
  height: calc(100vh - 150px);
  position: fixed;
  padding-inline: 20px;
  box-sizing: border-box;
  background-color: #f3f3f3;
  > div {
    background-color: white;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 1px solid lightgray;
    text-align: center;
    > img {
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      width: 150px;
      position: absolute;
      top: 25px;
      border: 1px solid lightgray;
    }
    > h1{
      margin-top: 85px;
      white-space: pre-wrap;
      text-align: center;
    }
    > div > p {
      white-space: pre-wrap;
    }
  }
  .lastPost {
    border: 1px solid lightgray;
    padding: 15px;
    border-radius: 10px;
    background-color: #f3f3f3;
    cursor: pointer;
    > img {
      width: 100%;
      border-radius: 10px;
    }
    > * {
      margin-bottom: 10px;
    }
    > p {
      margin: 0;
    }
  }
  span {
    text-decoration: underline;
    font-weight: 700;
  }
a {
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 15px;
  transition: 0.2s;

  &:hover {
    color: gray;
    background-color: lightgray;
  }
}
`

const UserAside = () => {

  const {loggedInUser, users} = useContext(UserContext);
  const {posts, userPosts} = useContext(PostContext);

  return (
    <StyledAside>
      <div>
        <img src={loggedInUser.avatar} alt={loggedInUser.username} />
        <h1>Hi,{'\n'}{loggedInUser.name}</h1>
        {
          userPosts.length>0 ?
          <div>
            <p>
              You last posted on: {`\n`} <span>{userPosts[0].timestamp}</span>
            </p>
            <p>
              You have posted {userPosts.length} times,{'\n'}since you registered.
            </p>
          </div> :
          <div>
            <p>You haven't posted anything yet. {'\n'}Click the button below to do it:</p>
          </div>
        }
        <Link to={`${loggedInUser.username}/add_new_post`}>Create a new post</Link>
        <p>Last post on the site:</p>
        <div
          className="lastPost"
        >
          {
            posts[0].image &&
            <img src={posts[0].image} alt={posts[0].title} />
          }
          <span>{posts[0].title}</span>
          <p>by {users.find(user => user.id === posts[0].authorId).name}</p>
        </div>
      </div>
    </StyledAside>
  );
}
 
export default UserAside;