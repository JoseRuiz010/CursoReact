import React from "react";
import { NoteScreen } from "../notes/NoteScreen";

import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
  return (
    <div className="journal__mi-contenido">
      <Sidebar />
      <main>
        {/*<NothingSelected></NothingSelected>*/}
        <NoteScreen></NoteScreen>
      </main>
    </div>
  );
};
