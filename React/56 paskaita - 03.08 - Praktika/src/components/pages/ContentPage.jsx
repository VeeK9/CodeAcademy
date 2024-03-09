import styled from "styled-components";
import UserAside from "../organisms/UserAside";
import GeneralAside from "../organisms/GeneralAside";
import PlantList from "../organisms/PlantList";
import { useContext } from "react";
import PageLoaderContext from "../../contexts/PageLoaderContext";
import AboutUs from "../organisms/AboutUs";
import Community from "../organisms/Community";
import LogInForm from "../organisms/LogInForm";
import SignUpForm from "../organisms/SignUpForm";

const StyledSection = styled.section`
  min-height: calc(100vh - 340px);
  display: grid;
  justify-content: center;
  grid-template-columns: calc(20% - 10px) 60% calc(20% - 10px);
  background-color: lightgray;
  padding: 10px;
  gap: 10px;
`

const ContentPage = () => {

  const { pageLoader } = useContext(PageLoaderContext);

  return (
    <StyledSection>
      <GeneralAside />
      {
        pageLoader === 'allPlants' ?
        <PlantList /> : 
        pageLoader === 'myPlants' ?
        null :
        pageLoader === 'aboutUs' ?
        <AboutUs /> :
        pageLoader === 'community' ?
        <Community /> :
        pageLoader === 'logIn' ?
        <LogInForm />:
        pageLoader === 'signUp' ?
        <SignUpForm />:
        <h1>error no. 404</h1>
      }
      <UserAside />
    </StyledSection>
  );
}
 
export default ContentPage;