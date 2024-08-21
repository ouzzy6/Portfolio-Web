import React from "react";
import "./Home.css";
import profilePhoto from "../media/PXL_20230922_174930425.MP.jpg"; // Asegúrate de colocar la ruta correcta


function Home() {
  return (
    <div className="home">
      <div className="photo-container">
        <img src={profilePhoto} alt="Profile" className="photo" />
      </div>
      <div className="home-content">
        <h1 className="title">Ousama Benarba Dida</h1>
        <h2 className="subtitle">Web Developer</h2>
        <p className="text">
          Welcome!<br/><br/>
          I'm a recent web development graduate based in Barcelona. With a background in graphic design, I've transitioned into the tech world, working with both front-end and back-end technologies.<br/><br/>
          My passion for creating functional applications and websites drove me to pursue this field. I'm eager to take on new challenges and opportunities to continue growing as a developer.
        </p>
      </div>
    </div>
  );
}

export default Home;
