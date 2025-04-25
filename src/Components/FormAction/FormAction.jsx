import React from 'react';

const handleFormAction = (formData) => {
  console.log(formData.get('name'))
}
const FormAction = () => {
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="name" id="" placeholder='Enter your name' />
        <br />
        <input type="email" name="email" id="" placeholder='Enter your email' />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;