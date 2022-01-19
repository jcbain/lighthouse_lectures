// we could make this dynamic by allowing
// data to be passed into in via props

const Header = (props) => {
  const { title, message } = props;

  return (
    <header>
      <h1>{title}</h1>
      <p>{message}</p>
      {/* <h1>Ancho Burrito Bar</h1>
      <p>psst...guac is free</p> */}
    </header>
  );
};

export default Header;