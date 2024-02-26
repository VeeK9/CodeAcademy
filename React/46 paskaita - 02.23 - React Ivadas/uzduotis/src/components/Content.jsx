import Article from "./Article";
import Nav from "./Nav";

const Content = () => {
  return (  
    <section id="content">
      <Article />
      <nav>
        <h1>Navigation</h1>
        <Nav />
      </nav>
    </section>
  );
}
 
export default Content;