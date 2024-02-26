import Image from "./Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import I_Frame from "./I_frame";

const Kortele = ({info:{pavadinimas, nuotrauka, lokacija, aprasymas}}) => {
  return (  
    <div className="card">
      <div>
        <Heading 
          text={pavadinimas}
        />
        <Image 
          src={nuotrauka.url}
          alt={nuotrauka.alt}
        />
        <Paragraph 
          text={aprasymas}
        />
      </div>
      <I_Frame 
        src={lokacija}
        title={pavadinimas}
      />
    </div>
  );
}
 
export default Kortele;