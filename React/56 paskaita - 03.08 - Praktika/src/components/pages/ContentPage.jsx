import styled from "styled-components";
import UserAside from "../organisms/UserAside";
import GeneralAside from "../organisms/GeneralAside";
import PlantList from "../organisms/PlantList";

const StyledSection = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: 20% 60% 20%;
`

const ContentPage = () => {
  return (
    <StyledSection>
      <GeneralAside />
      <PlantList />
      <UserAside />
    </StyledSection>
  );
}
 
export default ContentPage;