import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-dark btn-lg btn-block">
      {props.children}
    </button>
  );
}

export function FormInput(props) {
  return (
    <div class="form-group">
      <label for={props.name}>{props.label}</label>
      <input 
        type={props.type} 
        name= {props.name} 
        class="form-control" 
        id={props.name} 
        placeholder={props.placeholder}
        onChange={() => props.handleInputChange()}
      />
    </div>
  );
}
