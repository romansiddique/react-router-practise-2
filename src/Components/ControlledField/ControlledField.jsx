import React, { useState } from 'react';

const ControlledField = () => {


  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  const [password, setPassword] = useState('')

  const handleOnChange = e => {
    console.log(e.target.value)
  }
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
      <input type="text" name="name" id="" required/>
      <br />
      <input type="email" name="email" id="" required/>
      <br />
      <input type="password" name="password" onChange={handleOnChange} defaultValue={password} id="" required/>
      <br />
      <input type="submit" value="Submit Now" />
      </form>
    </div>
  );
};

export default ControlledField;