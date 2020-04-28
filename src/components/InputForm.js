import React from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getScrnsht}>
      <input type="text" name="link" placeholder="Enter your Url here..."/>
      <button>Submit</button>
    </form>
  );
}

export default UserForm;