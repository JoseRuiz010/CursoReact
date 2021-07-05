import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export default function GifGrid({ category }) {
  const { loading, data: imagenes } = useFetchGifs(category);

  return (
    <div className="card-grid">
      <div className="row">
        <h1>{category}</h1>
        {loading && (
          <h1 className="animate__animated animate__flash">Cargando ...</h1>
        )}
        {imagenes.map((img) => (
          <div className="col-lg-3 col-md-4 col-sm-12">
            <GifGridItem {...img} key={img.id}>
              {" "}
            </GifGridItem>
          </div>
        ))}
      </div>
    </div>
  );
}
