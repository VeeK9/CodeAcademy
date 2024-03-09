import styled from "styled-components"

const StyledImg = styled.img`
  border-radius: 50%;
`

const Image = ({src, alt}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
    >
    </StyledImg>
  );
}
 
export default Image;