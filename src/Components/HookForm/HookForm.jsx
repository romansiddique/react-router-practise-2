import React from 'react';
import useInputField from '../../Hooks/useInputField'
const HookForm = () => {

  // Create Hook
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('submit', name, email, dateTime)
  } 
  const [name, handleNameOnChange] = useInputField('')
  const [email, handleEmailOnChange] = useInputField('')
  const [dateTime, handleDateTimeOnChange] = useInputField('')
  // Controlled Statement
  // const [email, setEmail] = useState('')
  // const handleOnSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(e.target.name.value)
  // }
  // const handleOnChange = (e) => {
  //   console.log(e.target.value)
  //   setEmail(e.target.value)
  // }

  return ( 
    <div>
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleNameOnChange} type="text" name="name" id="" placeholder='name' />
        <br />
        <input onChange={handleEmailOnChange} type="email" name="email" placeholder='email' />
        <br />
        <input onChange={handleDateTimeOnChange} type="datetime" name="" placeholder='dateTime'/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;