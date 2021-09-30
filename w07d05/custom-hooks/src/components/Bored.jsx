const Bored = (props) => {
  const {activity, participants} = props;

  return (
    <div>
      <h1>I'm bored</h1>
      <p style={{color: 'green'}}>maybe I should {activity.toLowerCase()}</p>
      {participants === 1 ? <p>by myself</p> : <p>with {participants - 1} friend{participants > 2 ? 's': ''}</p>}
    </div>
  )
}

export default Bored;