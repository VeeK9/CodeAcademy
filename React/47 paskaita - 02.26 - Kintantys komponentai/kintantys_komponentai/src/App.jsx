import './App.css';
import Headings from './components/Headings';
import Korteles from './components/Korteles';

const App = () => {

  const data = ['Labas rytas', 'Pietu metas', 'Geros dienos', 'Labanaktis'];
  const lankytinis_LT_vietos = [
    {
      id: 0,
      pavadinimas: "Dieveniškiu istorinis regioninis parkas",
      nuotrauka: {
        url: "https://cdn2.onlithuania.com/content/uploads/2021/04/Norviliskiu-pilis-is-oro-scaled.jpg",
        alt: "Norviliskiu Pilis"
      },
      lokacija: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166085.94658746175!2d25.47410533067207!3d54.25554701676527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc2b641cb6b425%3A0xcc7c46ce69a0d4ac!2sDieveni%C5%A1ki%C5%B3%20istorinis%20regioninis%20parkas!5e0!3m2!1sen!2slt!4v1708935629277!5m2!1sen!2slt",
      aprasymas: "Dieveniškių kraštas žavi plokščiaviršūnėmis kalvomis, lėkštais kalvų šlaitais, erdviomis lomomis, lengvomis gargždingomis dirvomis. Nepaisant žmogaus akiai nematomos kalvų didybės, aukščiausia regioninio parko vieta siekia net 262,6 m virš jūros lygio. Priešpaskutinis apledėjimas regioniniame parke paliko vienintelę gėlavandenę, šaltą Gaujos upę, sustūmė retus Lietuvos geologinio paveldo įvairovės luistus – smėlio ir žvyro konglomeratus. Slenkant ledynams čia buvo atnešta nemažai stambių akmenų, nuo senų senovės apipintų mitologiniais pasakojimais, legendomis."
    },{
      id: 1,
      pavadinimas: "Nemuno kilpų regioninis parkas",
      nuotrauka: {
        url: "https://minituras.lt/image/cache/catalog/Autobusu/birstonas-800x615.jpg",
        alt: "Nemuno kilpa"
      },
      lokacija: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74494.18929396011!2d23.88829322203401!3d54.58876351702947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7353e0286accb%3A0x42dfa2e301ea44f0!2sNemunas%20Loops%20Regional%20Park!5e0!3m2!1sen!2slt!4v1708935907932!5m2!1sen!2slt",
      aprasymas: "Didžiausios Lietuvos upės – Nemuno – slėnio kraštovaizdis su didžiosiomis Nemuno kilpomis – unikalus reiškinys ne tik Lietuvoje, bet ir Europoje. Kiekvieną Nemuno kilpų regioninio parko lankytoją nustebins vaizdingi Nemuno slėnio šlaitai, pasidabinę atodangomis, išraižyti daugybės raguvų ir griovų, unikalūs eroziniai atragiai ir vienintelis Lietuvoje erozinis palikuonis – Škėvonių gūbrys. Raiškios terasinės dubumos, primenančios garsųjį Raigardą, čia visus kviečia keliauti vingiuota, aukštų atodangų juosiama Verknės upe."
    },{
      id: 2,
      pavadinimas: "Kernave",
      nuotrauka: {
        url: "https://www.makaliauslietuva.lt/wp-content/gallery/kernave/kernave-5.jpg?v=b8d8e2ea7d564557",
        alt: "Kernaves piliakalnai"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9179.738906306085!2d24.841547832063934!3d54.88651446259553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7634a854114d7%3A0xa00d18ec9baac30!2sKernav%C4%97%2C%2019172%20%C5%A0irvintos%20District%20Municipality!5e0!3m2!1sen!2slt!4v1708936239272!5m2!1sen!2slt",
      aprasymas: "Kernavės archeologinė vietovė – unikalus archeologijos ir istorijos vertybių kompleksas, 2004 m. įtrauktas į  UNESCO pasaulio paveldo sąrašą. Legendomis apipintas Pajautos slėnis ir jo pakrašty stūksantys penki piliakalniai saugo paskutinės Europos pagoniškos valstybės sostinės liekanas."
    },{
      id: 3,
      pavadinimas: "Plokštinės raketų bazė",
      nuotrauka: {
        url: "https://s1.15min.lt/static/cache/MTIwMHg5MDAsOTYweDYzNyw2MjQ4NjIsb3JpZ2luYWwsLGlkPTE2NTY3MzcmZGF0ZT0yMDE1JTJGMTElMkYxMSwyMjAxNTI3ODQ1/sachtine-branduoliniu-raketu-paleidimo-baze-dvina-5643393a0a2e1.jpg",
        alt: "Plokštinės raketų bazė"
      },
      lokacija: "",
      aprasymas: "Šaltojo karo muziejus – raketų bazė – muziejus Žemaitijos nacionaliniame parke, už 24 km į šiaurę nuo Plungės. Įrengtas buvusiame Sovietų Sąjungos balistinių raketų šachtiniame paleidimo komplekse, Plokštinės raketų bazėje."
    }
  ]

  return (
    <>
      {/* <Headings 
        stuff={data}
      /> */}
      <Korteles 
        data={lankytinis_LT_vietos}
      />
    </>
  );
}

export default App;
