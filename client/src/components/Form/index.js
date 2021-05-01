import React from "react";
import "./style.css";

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
    <button {...props} className="btn btn-dark btn-lg btn-block styleButton">
      {props.children}
    </button>
  );
}

export function FormInput({ name, label, handleInputChange, type, placeholder }) {
  return (
    <div class="form-group">
      <label for={name}>{label}</label>
      <input 
        type={type} 
        name= {name} 
        class="form-control" 
        id={name} 
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}
