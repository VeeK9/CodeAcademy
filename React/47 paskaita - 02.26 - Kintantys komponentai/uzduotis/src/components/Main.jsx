import Card from "./Card";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Main = ({title, tekstas, images}) => {
  return (
    <section id="main">
      <Heading 
        title={title}
      />
      <Paragraph 
        tekstas={tekstas}  
      />
      <div className="cards">
        {
          images.map((el) => {
            return <Card 
              key={el.id}
              name={el.text}
              src={el.photo.url}
              alt={el.photo.alt}
            />
          })
        }
      </div>
    </section>
  );
}
 
export default Main;