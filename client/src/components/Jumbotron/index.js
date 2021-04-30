import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="form-group">
        <label for="exampleFormControlInput1">
            { children }
        </label>
        <input className="form-control" id="exampleFormControlInput1"/>
    </div>
  );
}

export default Jumbotron;
