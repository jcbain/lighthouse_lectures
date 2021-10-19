import './button.css';

const RandomButton = (props) => {

  return (
    <button className="active">{props.children}</button>
  )
}

export default RandomButton;