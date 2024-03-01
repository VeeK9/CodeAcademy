import Content from "./Content";
import Hero from "./Hero";

const Main = ({runners}) => {
  return (
    <main>
      <Hero />
      <Content 
        runners={runners}
      />
    </main>
  );
}
 
export default Main;