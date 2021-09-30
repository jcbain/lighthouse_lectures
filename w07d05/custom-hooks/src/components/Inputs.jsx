import { useState } from 'react';
import useInput from '../hooks/useInput';

const Inputs = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const usernameInput = useInput();
  const emailInput = useInput();
  const passwordInput = useInput();


  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`username is ${username},\n email is ${email},\n password ${password}`);
    console.log(`username is ${usernameInput.value},\n email is ${emailInput.value},\n password ${passwordInput.value}`)
    usernameInput.clearValue();
  }

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value)
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value)
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value)
  // };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br />

        <label>email</label>
        <input
          value={emailInput.value}
          onChange={emailInput.onChange}
        />

        <br />
        <label>password</label>
        <input
          value={passwordInput.value}
          onChange={passwordInput.onChange}
        />
        <br />
        <button type="submit">Register</button>

      </form>
    </div>
  )
  
}

export default Inputs;