import React from "react";
import { getHeroesByIdPublisher } from "../../selector/getHeroesByIdPublisher";
import { HeroCard } from "./HeroCard";

export const HeroeList = ({ publisher }) => {
  const heroes = getHeroesByIdPublisher(publisher);
  return (
    <div className="row">
      {heroes.map((h) => (
        <div
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginBottom: "2px",
          }}
          className="col-sm-12 col-lg-4 col-md-6 animate__animated animate__fadeInUp"
        >
          <HeroCard {...h} key={h.id}>
            {h.superhero}
          </HeroCard>
        </div>
      ))}
    </div>
  );
};
