import React, { useState } from 'react';

const ControlledField = () => {


  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleOnChange = e => {
    console.log(e.target.value)
    setPassword(e.target.value)

    if (password.length < 6) {
      setError('password can not be less than 6 character')
    }
    else {
      setError('')
    }
  }

  

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
      <input type="text" name="name" placeholder='enter your name'  required/>
      <br />
      
      <br />
      <input type="password" name="password" onChange={handleOnChange} defaultValue={password} placeholder='enter your password' required/>
      <br />
      <input type="submit" value="Submit Now" />
      </form>

      <p>
        <small>{ error }</small>
      </p>
    </div>
  );
};

export default ControlledField;