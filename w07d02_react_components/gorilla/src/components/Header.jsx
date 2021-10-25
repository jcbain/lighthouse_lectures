const Header = (props) => {
  console.log('props:', props)
  // const title = "Gorilla Sara's Glamourous Gargoyle Gymnasium"
  return (
    <header>
      <h2>{props.message}</h2>
    </header>
  )
};

export default Header;