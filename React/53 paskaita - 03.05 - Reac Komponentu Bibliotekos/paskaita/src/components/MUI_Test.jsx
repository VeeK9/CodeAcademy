import { Button } from "@mui/material";
import Skeleton from "./Skeleton";
import CutOutStuff from "./CutOutStuff";

const MUI_Test = () => {
  return (
    <>
    <Skeleton />
    <Button variant="text">cia yra testas</Button>
    <CutOutStuff 
      minDistance={2}
    />
    <CutOutStuff 
      minDistance={25}
    />
    </>
  );
}
 
export default MUI_Test;