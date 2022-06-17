import React, { useEffect, useState } from "react";
import axios from "axios";

import infoList from "../dataInfo/infoList";

import mercure from "../style/img/mercure.png";
import venus from "../style/img/venus.png";
import terre from "../style/img/terre.png";
import lune from "../style/img/Lune.png";
import mars from "../style/img/mars.png";
import jupiter from "../style/img/Jupiter.png";
import saturn from "../style/img/saturn.png";
import uranus from "../style/img/uranus.png";
import neptune from "../style/img/neptune.png";
import soleil from "../style/img/soleil.png";
import logo from "../style/img/logo-w.png";
import arrow from "../style/img/arrow.png";

function SystemSolar() {
  const [data, setData] = useState([]);
  const [planeteId, setPlanetId] = useState("");

  useEffect(() => {
    const fetchproduct = async () => {
      const result = await axios.get(
        "https://api.le-systeme-solaire.net/rest/bodies/" + planeteId
      );
      setData(result.data);
    };
    fetchproduct();
  }, [planeteId]);

  function color() {
    if (planeteId === "mercure") {
      let color = " block mercure-color ";
      return color;
    } else if (planeteId === "venus") {
      let color = " block venus-color ";
      return color;
    } else if (planeteId === "mars") {
      let color = " block mars-color ";
      return color;
    } else if (planeteId === "terre") {
      let color = " block terre-color ";
      return color;
    } else if (planeteId === "jupiter") {
      let color = " block jupiter-color ";
      return color;
    } else if (planeteId === "saturne") {
      let color = " block saturne-color ";
      return color;
    } else if (planeteId === "uranus") {
      let color = " block uranus-color ";
      return color;
    } else if (planeteId === "neptune") {
      let color = " block neptune-color ";
      return color;
    } else if (planeteId === "soleil") {
      let color = " block soleil-color ";
      return color;
    } else {
      let color = "block glow";
      return color;
    }
  }

  function numberMoons() {
    let array = data.moons;
    let total = array.length;
    return total;
  }

  return (
    <div className="main">
      <div className="system_container">
        <div className="system">
          <img
            src={soleil}
            id="soleil"
            className="sun"
            alt=""
            onClick={(e) => setPlanetId(e.target.id)}
          />

          <div className="mercury-outline-1">
            {/* <div className="mercury"></div> */}
            <img
              src={mercure}
              id="mercure"
              className={data.id === "mercure" ? "mercury selected" : "mercury"}
              alt="mercury"
              style={{ cursor: "pointer" }}
              onClick={(e) => setPlanetId(e.target.id)}
            />
            <p className={data.id === "mercure" ? "select" : ""}>Mercure</p>
            <div className="triangle"></div>
          </div>

          <div className="venus-outline-1">
            {/* <div className="venus"></div> */}
            <img
              src={venus}
              id="venus"
              className={data.id === "venus" ? "venus selected" : "venus"}
              alt="venus"
              style={{ cursor: "pointer" }}
              onClick={(e) => setPlanetId(e.target.id)}
            />

            <p className={data.id === "venus" ? "select" : ""}>Venus</p>
          </div>

          <div className="earth-outline-1">
            <div className="terre" id="terre">
              <img
                src={terre}
                id="terre"
                className={data.id === "terre" ? "terre-b selected" : "terre-b"}
                alt="terre"
                onClick={(e) => setPlanetId(e.target.id)}
              />
              <p className={data.id === "terre" ? "select" : ""}>Terre</p>
              <div className="earth-circle">
                <img src={lune} id="terre" className="earth-inner" alt="lune" />
              </div>
            </div>
          </div>

          <div className="mars-outline-1">
            {/* <div className="mars"></div> */}
            <img
              src={mars}
              id="mars"
              className={data.id === "mars" ? "mars selected" : "mars"}
              alt="mars"
              style={{ cursor: "pointer" }}
              onClick={(e) => setPlanetId(e.target.id)}
            />

            <p className={data.id === "mars" ? "select" : ""}>mars</p>
          </div>

          <div className="jupiter-outline-1">
            <img
              src={jupiter}
              id="jupiter"
              className={data.id === "jupiter" ? "jupiter selected" : "jupiter"}
              alt="jupiter"
              style={{ cursor: "pointer" }}
              onClick={(e) => setPlanetId(e.target.id)}
            />

            <p className={data.id === "jupiter" ? "select" : ""}>Jupiter</p>
          </div>

          <div className="saturn-outline-1">
            {/* <div className="saturn"></div> */}
            <img
              src={saturn}
              id="saturne"
              className={data.id === "saturne" ? "saturn selected" : "saturn"}
              alt="staturne"
              style={{ cursor: "pointer" }}
              onClick={(e) => setPlanetId(e.target.id)}
            />

            <p className={data.id === "saturne" ? "select" : ""}>Saturne</p>
          </div>

          <div className="uranus-outline-1">
            {/* <div className="uranus"></div> */}
            <img
              src={uranus}
              id="uranus"
              className={data.id === "uranus" ? "uranus selected" : "uranus"}
              alt="uranus"
              style={{ cursor: "pointer" }}
              onClick={(e) => setPlanetId(e.target.id)}
            />

            <p className={data.id === "uranus" ? "select" : ""}>uranus</p>
          </div>

          <div className="neptune-outline-1">
            {/* <div className="neptune"></div> */}
            <img
              src={neptune}
              id="neptune"
              className={data.id === "neptune" ? "neptune selected" : "neptune"}
              alt="neptune"
              style={{ cursor: "pointer" }}
              onClick={(e) => setPlanetId(e.target.id)}
            />

            <p className={data.id === "neptune" ? "select" : ""}>neptune</p>
          </div>

          <div className={planeteId ? "speed-container" : ""}>
            <div className="speed-block">
              <div className="detail-speed">
                <p className="picto-item" aria-label={infoList[12].revolution}>
                  Période de révolution
                </p>
                <span>{data.sideralOrbit} jours</span>
              </div>
              <div className="detail-speed">
                <p>Période de rotation</p>
                <span>{data.sideralRotation} heures</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="planete-container">
        <div className={color()}>
          <div className="planete-note">
            {planeteId ? (
              <div className="block-planet">
                <div className="picture-planet">
                  <img
                    src={process.env.PUBLIC_URL + `/img/${data.id}.png`}
                    alt={data.name}
                  />
                </div>
                <div className={"planete-detail"}>
                  <div className="detail">
                    <h1>{data.name}</h1>
                    <h2>Caracteristiques orbitales</h2>
                    <div className="detail-line">
                      <p
                        className="picto-item"
                        aria-label={infoList[0].demiGrandAxe}
                      >
                        Demi-grand axe{" "}
                      </p>
                      <span>{data.semimajorAxis} Km</span>
                    </div>
                    <div className="detail-line">
                      <p
                        className="picto-item"
                        aria-label={infoList[1].apherie}
                      >
                        Aphérie
                      </p>
                      <span>{data.aphelion} Km</span>
                    </div>
                    <div className="detail-line">
                      <p
                        className="picto-item"
                        aria-label={infoList[2].perihelie}
                      >
                        Périhélie
                      </p>
                      <span>{data.perihelion} Km</span>
                    </div>
                    <div className="detail-line">
                      <p>Excentricité</p>
                      <span>{data.eccentricity}</span>
                    </div>
                    <div className="detail-line">
                      <p>inclinaison</p>
                      <span>{data.inclination} °</span>
                    </div>
                    <h2>Caracteristiques physiques</h2>
                    {/* <div className="detail-line">
                  <p>Masse</p><span> {data.mass.massValue} x 10 {data.mass.massExponent} Kg</span>
                </div>
                <div className="detail-line">
                  <p>Volume</p><span>{data.vol.volValue} x 10 {data.vol.volExponent} Km3</span>
                </div> */}
                    <div className="detail-line">
                      <p>Rayon Polaire</p>
                      <span>{data.polarRadius} ± 0,1 km</span>
                    </div>
                    <div className="detail-line">
                      <p>Rayon moyen volumétrique</p>
                      <span>{data.meanRadius} Km</span>
                    </div>
                    <div className="detail-line">
                      <p>Rayon équatorial</p>
                      <span>{data.equaRadius} ± 0,1 km </span>
                    </div>

                    <div className="detail-line">
                      <p
                        className="picto-item"
                        aria-label={infoList[8].aplatissement}
                      >
                        Aplatissement
                      </p>
                      <span>{data.flattening}</span>
                    </div>
                    <div className="detail-line">
                      <p
                        className="picto-item"
                        aria-label={infoList[9].inclinaison}
                      >
                        Inclinaison de l'axe
                      </p>
                      <span>{data.axialTilt}°</span>
                    </div>
                    <div className="detail-line">
                      <p
                        className="picto-item"
                        aria-label={infoList[10].gravite}
                      >
                        Gravité
                      </p>
                      <span>{data.gravity} m.s-2 </span>
                    </div>
                    <div className="detail-line">
                      <p>Densité</p>
                      <span>{data.density} g.cm3 </span>
                    </div>
                    <div className="detail-line">
                      {/* <p>nombre de lune :</p> <span>{numberMoons("")}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="note-click">
                <img src={logo} alt="logo" />
                <p>clic sur une planète pour avoir plus d'information</p>
                <img src={arrow} className="arrow" alt="arrow" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemSolar;
