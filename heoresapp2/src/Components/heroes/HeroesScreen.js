import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroeById } from "../../selector/getHeroeById";

export const HeroesScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = getHeroeById(heroeId);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const handle = () => {
    history.length <= 2 ? history.push("/") : history.goBack();
  };
  return (
    <div className="row m-3 " style={{ maxWidth: "1250px" }}>
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft  "
          alt={superhero}
          src={`../assets/${id}.jpg`}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item">
            {" "}
            <b>Aleter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First aparence:</b> {first_appearance}
          </li>
        </ul>
        <h5>
          <b>Character:</b>
        </h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={() => handle()}>
          Return
        </button>
      </div>
    </div>
  );
};
