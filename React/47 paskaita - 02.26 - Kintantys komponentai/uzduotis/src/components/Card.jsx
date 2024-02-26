import Heading from "./Heading";
import Image from "./Image";

const Card = ({name, src, alt}) => {
  return (
    <div className="card">
      <Image 
        src={src}
        alt={alt}
      />
      <Heading 
        title={name}
      />
    </div>
  );
}
 
export default Card;