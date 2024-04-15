import React from "react";
import "./App.scss";
import { foldersData } from "./helpers/foldersData.ts";
import Folder from "./components/folder/Folder.tsx";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h2>Folder tree</h2>
        {foldersData.map((f) => (
          <Folder key={f.name} folderData={f} />
        ))}
      </div>
    );
  }
}

export default App;
