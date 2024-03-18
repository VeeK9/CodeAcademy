import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import {v4 as uuid} from "uuid";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {useNavigate} from "react-router-dom";
import PostContext from "../contexts/PostContext";

const StyledArticle = styled.article`
> form {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 25px;
    text-align: end;
    > label {
      width: 30%;
    }
    > input, textarea {
      width: 80%;
      padding: 5px 10px;
      border: 1px solid lightgray;
      border-radius: 10px;
    }
    > textarea {
      height: 8lh;
      resize: none;
    }
  }
  > input {
    margin-top: 20px;
    align-self: center;
    padding: 5px 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    &:hover {
      background-color: #b8deb8;
    }
  }
}
span {
  color: red;
  align-self: center;
}
`

const NewPost = () => {

  const {addNewPost} = useContext(PostContext);
  const {loggedInUser} = useContext(UserContext);
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues:{
      title: "",
      image:"",
      post:""
    },
    onSubmit: values => {
      const newPost = {
        id: uuid(),
        timestamp: Date().slice(0,21).toString(),
        authorId: loggedInUser.id,
        ...values
      }
      addNewPost(newPost);
      navigate('/posts')
    },
    validationSchema: Yup.object({
      title: Yup.string().trim().required('Please enter a title for your post'),
      image: Yup.string().url('Must be a valid URL').trim(),
      post: Yup.string().trim().required("what's the post about?")
    })
  })

  return (
    <StyledArticle>
      <h1>Post something</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text"
            name="title" id="title"
            placeholder="Create your post title"
            value={formik.values.title}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
          {formik.touched.title && formik.errors.title && <span>{formik.errors.title}</span>}
        <div>
          <label htmlFor="post">Your post:</label>
          <textarea 
            type="post"
            name="post" id="post"
            placeholder="Write whatever is on your mind."
            value={formik.values.post}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
          {formik.touched.post && formik.errors.post && <span>{formik.errors.post}</span>}
        <div>
          <label htmlFor="image">Photo:</label>
          <input 
            type="url"
            name="image" id="image"
            placeholder="Paste the URL of a photo you want to attach. "
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
          {formik.touched.image && formik.errors.image && <span>{formik.errors.image}</span>}
        <input type="submit" value="Post"/>
      </form>
    </StyledArticle>
  );
}
 
export default NewPost;