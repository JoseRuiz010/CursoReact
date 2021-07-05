import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div className="container">
      <h2
        style={{ marginTop: "20px", marginLeft: "auto", marginRight: "auto" }}
        className="text-center"
      >
        <b> GifExpertApp</b>
      </h2>
      <hr></hr>
      <AddCategory add={setCategories}></AddCategory>
      <div className="row">
        {categories.map((c, i) => (
          <GifGrid category={c} key={i}></GifGrid>
        ))}
      </div>
    </div>
  );
}
