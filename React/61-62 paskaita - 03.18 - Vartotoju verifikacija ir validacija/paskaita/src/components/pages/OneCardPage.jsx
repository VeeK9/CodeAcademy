import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import CardsContext, {CardsActionTypes} from "../../contexts/CardsContext";
import Comment from "../UI/Comment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";

const StyledSection = styled.section`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border: 1px solid lightgray;
    padding: 10px 20px;
    width: 50%;
    > h1, h3 {
      margin: 0;
    }
    > p {
      text-align: justify;
      margin: 0;
    }
    > button {
      width: fit-content;
    }
  }
  > div:first-child{
    width: 70%;
  }
  > article {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 40%;
  }
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    > textarea {
      width: 400px;
      height: 6lh;
      resize: vertical;
      border: 1px solid lightgray;
    }
    >input {
      background-color: white;
      border: 1px solid lightgrey;
      border-top: none;
      width: fit-content;
      padding: 5px 10px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: lightgray;
      }
    }
    > p {
      color: red;
    }
  }
`

const OneCardPage = () => {

  const { id } = useParams();
  const {loggedInUser} = useContext(UsersContext);
  const {setCards, cards} = useContext(CardsContext);
  const navigate = useNavigate();

  const card = cards.find(card => card.id === id);

  const formik = useFormik({
    initialValues: {
      text: ""
    },
    validationSchema: Yup.object({
      text: Yup.string().trim()
        .min(8, 'Minimum length of 8 symbols')
        .max(500, 'Maximum length of 500 symbols')
        .required('This field is required')
    }),
    onSubmit: values => {
      const newComment = {
        text: values.text,
        id: uuid(),
        authorId: loggedInUser.id
      }
      setCards({
        type: CardsActionTypes.addComment,
        cardId: card.id,
        comment: newComment
      })
      formik.resetForm();


    }
  })

  return (
    <StyledSection>
      {
        cards.length ?
        <>
        <div>
          <h1>{card.title}</h1>
          <p>{card.description}</p>
          {
            card.userId === loggedInUser.id || loggedInUser.role === 'admin' ?
            <button
              className="deleteBtn"
              onClick={() => {
                setCards({
                  type: CardsActionTypes.delete,
                  id: card.id
                })
                navigate(-1)
              }}
            >Delete
            </button> :
            null
          }
        </div>
        <article>
          {
            card.comments?.map(comment => 
              <Comment
                key={comment.id}
                comment={comment}
                cardId={card.id}
              />
            )
          }
        </article>
        {
          loggedInUser &&
          <form onSubmit={formik.handleSubmit}>
            <textarea
              name="text" id="text"  
              placeholder="Enter your comment..."
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input type="submit" value="Add Comment"/>
            {
              formik.touched.text && formik.errors.text && <p>{formik.errors.text}</p>
            }
          </form>
        }
        </> :
        null
      }
    </StyledSection>
  );
}
 
export default OneCardPage;