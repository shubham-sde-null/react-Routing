import React from "react";

function Button(props) {
  return (
    <button
      style={{
        marginRight: 15,
        backgroundColor: "transparent",
        border: "1px solid red",
        color: "white",
        width: "100px",
        borderRadius: "10px",
      }}
    >
      {" "}
      {props.data}{" "}
    </button>
  );
}

export default Button;
