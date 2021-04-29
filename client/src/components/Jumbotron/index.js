import React from "react";

function Label({ children }) {
  return (
    <div className="form-group">
      <label for="exampleFormControlInput1">
        { children }
      </label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
  );
}

export default Label;
