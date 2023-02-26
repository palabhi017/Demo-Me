import React from "react";
import "../CSS/ButtonFile.css";
const Button = ({ children }) => {
  return (
    <div>
      <button class="custom-btn btn-12">
        <span>{children}</span>
        <span>Read More</span>
      </button>
    </div>
  );
};

export default Button;
//Utkarsh --> u can add here in the children
