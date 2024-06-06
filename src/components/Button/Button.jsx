export function Botao({ valor, onclick, title }) {
  return (
    <>
      <button
        title={title}
        id="button"
        onClick={onclick}
      >
        {valor}
      </button>
    </>
  );
}
