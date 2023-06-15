const Counter = ({ contador, setContador }) => {
  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador - 1)}>Restar</button>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>

    </div>
  );
};

export default Counter;
