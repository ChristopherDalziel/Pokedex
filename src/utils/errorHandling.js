import React from "react";

const errorHandling = (error) => {
  if (error === "Response") {
    return <p>Pokemon not found, Please try again.</p>;
  }
  if ((error = "Request")) {
    return <p>Please reload the Pokèdex and try again.</p>;
  }
};

export default errorHandling;
