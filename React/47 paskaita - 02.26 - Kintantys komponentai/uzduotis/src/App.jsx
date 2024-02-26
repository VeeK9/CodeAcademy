import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';

const App = () => {
  const headings = ['Title', 'Portfolio'];
  const paragraphs = ['Some about text\nin two lines', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quaerat veniam repellendus doloribus? Vel, cupiditate obcaecati consectetur ratione earum nulla, cum ut, molestiae consequuntur voluptatibus quia corporis? Accusamus, architecto optio?'];
  const portfolioItems = [
    {
      id:'0',
      text:'Lorem ipsum dolor sit amet.',
      photo:{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ16KnmlF7N02UENY0cI3TpKhQK6_tgtcCpw&usqp=CAU',
        alt:'cat with glasses'
      }
    },{
      id:'1',
      text:'Lorem ipsum dolor.',
      photo:{
        url:'https://m.media-amazon.com/images/I/81sMEvzsAxL.jpg',
        alt:'cat with glasses'
      }
    },{
      id:'2',
      text:'Lorem ipsum dolor sit amet.',
      photo:{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH0WuA8DYE8fvGiG7OAI0Gncy-XpUeEN7QA&usqp=CAU',
        alt:'cat with glasses'
      }
    },{
      id:'3',
      text:'Lorem ipsum dolor sit amet.',
      photo:{
        url:'https://t3.ftcdn.net/jpg/06/45/05/46/360_F_645054610_c2HYEH55di3WCsDVh16Ppj6TXLsXb1Wd.jpg',
        alt:'cat with glasses'
      }
    },{
      id:'4',
      text:'Lorem ipsum.',
      photo:{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSR45xYcVizto-XvIvXQrIaaP22tUTsYopVg&usqp=CAU',
        alt:'cat with glasses'
      }
    },{
      id:'5',
      text:'Lorem ipsum dolor.',
      photo:{
        url:'https://s.yimg.com/ny/api/res/1.2/vW62rrthvbBup1kWsNODOQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://media.zenfs.com/en/cat_time_944/d81831ae768385ae48f35569ee0b996d',
        alt:'cat with glasses'
      }
    }
  ]

  return (
    <main>
      <Hero 
        title={headings[0]}
        tekstas={paragraphs[0]}
        button='Button'
      />
      <Main 
        title={headings[1]}
        tekstas={paragraphs[1]}
        images={portfolioItems}
      />
    </main>
  );
}

export default App;
