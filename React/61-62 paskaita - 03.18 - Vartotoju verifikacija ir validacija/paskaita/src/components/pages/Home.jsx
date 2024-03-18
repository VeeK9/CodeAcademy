import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  place-items: center;
  > h1 {
    grid-column-start: span 2;
    font-size: 3rem;
  }
  > img {
    justify-self: end;
  }
  > p {
    font-size: 2rem;
    width: 400px;
    justify-self: start;
  }
`

const Home = () => {
  return (
    <StyledSection>
      <h1>Home</h1>
      <img
        src="https://www.pngall.com/wp-content/uploads/14/Katana-PNG-Photos.png"
        alt="katana"
      />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quis sit ipsum dolorem ex soluta natus esse voluptates, commodi corrupti.</p>
    </StyledSection>
  );
}
 
export default Home;