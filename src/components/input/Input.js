import React from 'react';

const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} class="form-control" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;