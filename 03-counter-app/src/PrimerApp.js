import React from "react";
import PropTypes from "prop-types";
function PrimerApp({ saludo }) {
  const saludos = "Hola mundo";

  return (
    <div>
      <h1>{saludo}</h1>
      <p>{"saludosa"}</p>
    </div>
  );
}

PrimerApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};
PrimerApp.defaultProps = {
  saludo: "Soy Jose",
};
export default PrimerApp;
