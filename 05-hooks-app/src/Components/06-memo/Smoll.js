import React, { memo } from "react";

const Smoll = memo(({ value }) => {
  console.log("Me volvi a mostrar");
  return (
    <div>
      <small>{value}</small>
    </div>
  );
});
export default Smoll;
