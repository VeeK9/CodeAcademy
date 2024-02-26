import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";

const Hero = ({title, tekstas, button}) => {
  return (
    <section id="hero">
      <Heading 
        title={title}
      />
      <Paragraph 
        tekstas={tekstas}  
      />
      <Button 
        button={button}
      />
      <Image 
        src="https://images.squarespace-cdn.com/content/v1/54acc4b9e4b017b15a9f362a/1421875596568-0KP5Z47ERYOFGT32S3IS/mitchellpeakview"
        alt='background'
      />
    </section>
  );
}
 
export default Hero;