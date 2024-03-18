import styled from "styled-components";
import { Routes, Route } from "react-router-dom"
import UserAside from "../UI/UserAside";
import Home from "../organisms/Home";
import UserPosts from "../organisms/UserPosts";
import Authors from "../organisms/Authors";
import Posts from "../organisms/Posts";
import Post from "../UI/Post";
import NewPost from "../UI/NewPost";
import Login from "../UI/Login";
import ErrorPage from "../UI/ErrorPage";
import Register from "../UI/Register";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const StyledSection = styled.section`
  min-height: calc(100vh - 300px);
  display: flex;
  position: relative;
  top: 150px;
  gap: 10px;
  box-sizing: border-box;
  justify-content: ${props => props.$loggedIn ? 'unset' : 'center'};
  width: ${props => props.$loggedIn ? 'calc(100vw - 300px)' : '100%'};

    >aside+* {
      position: relative;
      box-sizing: border-box;
      left: ${props => props.$loggedIn ? '290px' : '0'};
    }
    > article {
      width: ${props => props.loogedIn ? 'calc(100vw - 300px)' : '100%'};
    }
`

const ContentPage = () => {

  const {loggedInUser} = useContext(UserContext);

  return (
    <StyledSection $loggedIn={loggedInUser}>
      {
        loggedInUser && <UserAside />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/posts" element={<Posts />} />
        <Route path=":author/posts" element={<UserPosts />} />
        <Route path=":author/add_new_post" element={<NewPost />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </StyledSection>
  );
}
 
export default ContentPage;