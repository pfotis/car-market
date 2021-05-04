import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="form-group">
        <label for="exampleFormControlInput1">
            { children }
        </label>
    </div>
  );
}

export default Jumbotron;
