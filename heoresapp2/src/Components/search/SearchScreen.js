import React, { useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
 
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selector/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q } = queryString.parse(location.search);
  // console.log(location.search);
  const [state, setstate] = useState(q);
  const heros = getHeroesByName(state);

  const handleChange = (e) => {
    setstate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${state}`);
  };
  return (
    <div className="p-2">
      <h1>SearchScreen</h1>
      <hr></hr>
      <div className="row">
        <div className="col col-4">
          <h4>SearchForm</h4>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Ingrese el nombre"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={state}
            ></input>
            <button className="btn btn-outline-primary m-2" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="col col-8">
          <h4>Resultados</h4>
          <hr></hr>
          {JSON.stringify(state)}
          {heros.map((h) => (
            <HeroCard key={h.id} {...h}></HeroCard>
          ))}
        </div>
      </div>
    </div>
  );
};
