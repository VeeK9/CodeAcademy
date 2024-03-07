import styled from "styled-components";
import PageLoaderContext from "../../../contexts/pageLoaderContext";
import { useContext } from "react";

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  > button {
    width: 120px;
    padding: 10px 20px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid lightgray;
    cursor: pointer;
    &:hover {
      background-color: #efefef;
    }
  }
`

const Header = () => {

  const { setPageLoader } = useContext(PageLoaderContext)

  return (
    <StyledHeader>
      <button
        onClick={()=>setPageLoader("korteles")}
      >Zaidimai</button>
      <button
        onClick={()=>setPageLoader('prideti')}
      >Prideti</button>
    </StyledHeader>
  );
}
 
export default Header;