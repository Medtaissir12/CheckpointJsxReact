import React from "react";
import "./App.css";
import FullName from "./components/FullName";
import ProfilePhoto from "./components/ProfilePhoto";
import Adress from "./components/Adress";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="upper-container">
          <div className="image-container">
            <ProfilePhoto />
          </div>
        </div>
        <div className="lower-container">
          <FullName />
          <Adress />
          <button> Visit Profil </button>
        </div>
      </div>
    </div>
  );
}

export default App;
