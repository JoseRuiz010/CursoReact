import React from "react";

export default function GifGridItem({ id, title, url }) {
  return (
    <div className="card animate__animated animate__bounce">
      <img
        className="card-img-top"
        style={{
          boxShadow: "inherit",
          objectPosition: "center",
          objectFit: "cover",
          //   maxWidth: 200,
          maxHeight: 200,
          padding: "10px",
        }}
        src={url}
        alt={title}
      ></img>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
      </div>
    </div>
  );
}
