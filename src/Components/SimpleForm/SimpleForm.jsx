import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(e.target.name.value)
}

const SimpleForm = () => {
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder='Type Your Name' />
        <br />
        <button><input type="submit" value="Submit" /></button>
      </form>

    </div>
  );
};

export default SimpleForm;