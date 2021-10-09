import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://blog.xcaret.com/es/wp-content/uploads/2019/02/5-Fotos-que-debes-tomarte-en-Canc%C3%BAn.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Cuando haces lo correcto, obtienes la sensación de paz y serenidad.
          ... “Debes hacer las cosas que crees que no puedes hacer.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <div>28</div>
      </div>
    </div>
  );
};
