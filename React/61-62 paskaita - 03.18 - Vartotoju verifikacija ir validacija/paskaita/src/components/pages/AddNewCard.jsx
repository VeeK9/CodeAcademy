import { useContext } from "react";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import CardsContext, {CardsActionTypes} from "../../contexts/CardsContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";

const StyledSection = styled.section`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-size: 3rem;
  }
  > form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 25px;
      > input, textarea {
        width: 70%;
        padding: 5px 10px;
        border: 1px solid lightgray;
      }
      > textarea {
        height: 5lh;
        resize: vertical;
      }
    }
    > input {
      margin-top: 20px;
      align-self: center;
      padding: 5px 10px;
      border: 1px solid black;
      cursor: pointer;
      background-color: white;
      &:hover {
        background-color: #b8deb8;
      }
    }
  }
  span {
    text-align: center;
    color: red;
  }
`

const AddNewCard = () => {

  const navigate = useNavigate();
  const {loggedInUser} = useContext(UsersContext);
  const {setCards} = useContext(CardsContext);

  const formik = useFormik({
    initialValues:{
      title: "",
      description: ""
    },
    onSubmit: values => {
      const newCard = {
        ...values,
        id: uuid(),
        userId: loggedInUser.id
      }
      setCards({
        type: CardsActionTypes.addNew,
        data: newCard
      });
      navigate(-1)
    },
    validationSchema: Yup.object({
      title: Yup.string().trim()
        .min(3, 'Minimum length of 3 symbols')
        .max(40, 'Maximum length of 40 symbols')
        .required('This field is required'),
      description: Yup.string().trim()
        .min(3, 'Minimum length of 3 symbols')
        .required('This field is required')
    })
  });

  return (
    <StyledSection>
      <h1>Add New Card</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Write the title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.title && formik.errors.title && <span>{formik.errors.title}</span>}
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            type="description"
            name="description"
            id="description"
            placeholder="Describe your card"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.description && formik.errors.description && <span>{formik.errors.description}</span>}
        <input type="submit"  value="Add Card"/>
      </form>
    </StyledSection>
  );
}
 
export default AddNewCard;