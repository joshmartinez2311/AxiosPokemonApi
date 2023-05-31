import React from "react";

// a button component that triggers onClick function to fetch the api data
const Button = ({ onClick }) => {
    return <button  className="btn btn-success "onClick={onClick}>Fetch Pokemon list</button>
}
export default Button;