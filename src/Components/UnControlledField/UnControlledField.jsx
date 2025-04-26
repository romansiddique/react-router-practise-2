import React, { useRef } from 'react';

const UnControlledField = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(emailRef.current.value)
    
    
  }
  return ( 
    <div>
      <form onSubmit={handleOnSubmit}>
        <input ref={emailRef} type="text" name="name" />
        <br />
        <input ref={passwordRef} type="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;