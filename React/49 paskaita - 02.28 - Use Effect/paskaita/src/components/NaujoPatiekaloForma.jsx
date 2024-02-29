const NaujoPatiekaloForma = ({formInputs, setFormInputs, addDish}) => {

  const formSubmit = e => {
    e.preventDefault();
    const newCardData = {
      id: String(Date.now()),
      pavadinimas: formInputs.pavadinimas,
      nuotrauka: formInputs.nuotrauka,
      kilmesSalis: formInputs.kilmesSalis,
      ragautas: formInputs.ragautas,
      ingredientai: formInputs.ingredientai.split(','),
      kaina: {
        nuo: Number(formInputs.kainaNuo),
        iki: Number(formInputs.kainaIki)
      }
    }
    addDish(newCardData);
    
    setFormInputs({
      pavadinimas: '',
      nuotrauka: '',
      kilmesSalis: '',
      ragautas: false,
      ingredientai: '',
      kainaNuo: '',
      kainaIki: ''
    })
  }

  return (
    <section>
      <h1>Prideti patiekala</h1>
      <form
        onSubmit={formSubmit}
      >
        <input
          type="text"
          name="pavadinimas"
          id="pavadinimas"
          placeholder="Iveskite patiekalo pavadinima"
          value={formInputs.pavadinimas}
          onChange={e=>setFormInputs({
            ...formInputs,
            pavadinimas: e.target.value
          })}
        /><br />
        <input
          type="url"
          name="nuotrauka"
          id="nuotrauka"
          placeholder="Ikelkite patiekalo nuotraukos nuoroda"
          value={formInputs.nuotrauka}
          onChange={e=>setFormInputs({
            ...formInputs,
            nuotrauka: e.target.value
          })}
        /><br />
        <input
          type="text"
          name="kilmesSalis"
          id="kilmesSalis"
          placeholder="Iveskite patiekalo kilmes sali"
          value={formInputs.kilmesSalis}
          onChange={e=>setFormInputs({
            ...formInputs,
            kilmesSalis: e.target.value
          })}
        /><br />
        <label htmlFor="ragautas">Ar esi ragaves si patiekala? </label>
        <input
          type="checkbox"
          name="ragautas"
          id="ragautas"
          checked={formInputs.ragautas}
          onChange={e=>setFormInputs({
            ...formInputs,
            ragautas: e.target.checked
          })}
        />
        <label htmlFor="ragautas" /><br />
        <textarea
          name="ingredientai"
          id="ingredientai"
          placeholder="Isvardinkite ingredientus, atskirdami juos kableliu: morkos, miltai, suris"
          value={formInputs.ingredientai}
          onChange={e=>setFormInputs({
            ...formInputs,
            ingredientai: e.target.value
          })}
        /><br />
        <input
          type="number"
          name="kainaNuo"
          id="kainaNuo"
          placeholder="Iveskite maziausia galima patiekalo kaina"
          value={formInputs.kainaNuo}
          onChange={e=>setFormInputs({
            ...formInputs,
            kainaNuo: e.target.value
          })}
        /><br />
        <input
          type="number"
          name="kainaIki"
          id="kainaIki"
          placeholder="Iveskite didziausia galima patiekalo kaina"
          value={formInputs.kainaIki}
          onChange={e=>setFormInputs({
            ...formInputs,
            kainaIki: e.target.value
          })}
        /><br />
        <input
          type="submit"
          value="Prideti patiekala"
        /><br />
      </form>
    </section>
  );
}
 
export default NaujoPatiekaloForma;