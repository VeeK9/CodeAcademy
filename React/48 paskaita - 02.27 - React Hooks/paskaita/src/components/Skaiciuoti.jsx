const Skaiciuoti = ({number, decrement, increment}) => {
  return (
    <section>
      <p>Musu skaicius yra: {number}</p>
      <button onClick={decrement}>Mazinti skaiciu</button>
      <button onClick={() => increment()}>Didinti skaiciu</button>
    </section>
  );
}
 
export default Skaiciuoti;