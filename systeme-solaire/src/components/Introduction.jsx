import React from "react";

function Introduction() {
  return (
    <div className="intro_container">
      <div className="txt-support color-neon ">
        <div className="txt-container">
          <p>
            Le Système solaire est le système planétaire du Soleil, auquel
            appartient la Terre. <br />
            <br />
            Il est composé de cette étoile et des objets célestes gravitant
            autour d'elle : les huit planètes confirmées et leurs 214 satellites
            naturels connus (appelés usuellement des « lunes »), les cinq
            planètes naines et leurs neuf satellites connus, ainsi que des
            milliards de petits corps (la presque totalité des astéroïdes et
            autres planètes mineures, les comètes, les poussières cosmiques,
            etc.).
            <br /> <br /> Le Système solaire fait partie de la galaxie appelée
            Voie lactée, où il réside dans le bras d'Orion. Il est situé à
            environ 8 kpc (∼26 100 a.l.) du centre galactique, autour duquel il
            effectue une révolution en 225 à 250 millions d'années. <br />{" "}
            <br />
            Il s'est formé il y a un peu moins de 4,6 milliards d'années à
            partir de l'effondrement gravitationnel d'un nuage moléculaire,
            suivi de la constitution d'un disque protoplanétaire selon
            l'hypothèse de la nébuleuse.
          </p>
          <div>
            
              <i class="fa-brands fa-wikipedia-w"></i>
              <a href="https://fr.wikipedia.org/wiki/Syst%C3%A8me_solaire" alt="wiki-systeme-solaire-lien">
              <p>Système solaire wikipedia</p>
            </a>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Introduction;
