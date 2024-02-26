const Kortele = ({info:{pavadinimas, nuotrauka, lokacija, aprasymas}}) => {
  return (  
    <div>
      <img src={nuotrauka.url} alt={nuotrauka.alt} />
      <div>
        <h1>{pavadinimas}</h1>
        <p>{aprasymas}</p>
      </div>
      <iframe src={lokacija} frameBorder="0"></iframe>
    </div>
  );
}
 
export default Kortele;