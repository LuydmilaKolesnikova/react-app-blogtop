import React, { useState } from "react";
import styles from "./Collections.module.css";
import art1 from "../../../images/art-collection/art-gallery-interior.jpg";
import art2 from "../../../images/art-collection/art-gallery.jpg";
import art3 from "../../../images/art-collection/bicycle-art.jpg";
import art4 from "../../../images/art-collection/blobs-of-purple.jpg";
import art5 from "../../../images/art-collection/interior-decor.jpg";
import art6 from "../../../images/art-collection/looking-at-painting.jpg";
import art7 from "../../../images/art-collection/marigolds.jpg";
import art8 from "../../../images/art-collection/synagogue.jpg";

import sci1 from "../../../images/science-collection/beakers.jpg";
import sci2 from "../../../images/science-collection/dna.jpg";
import sci3 from "../../../images/science-collection/drone.jpg";
import sci4 from "../../../images/science-collection/editing.jpg";
import sci5 from "../../../images/science-collection/grow-plants.jpg";
import sci6 from "../../../images/science-collection/microscope.jpg";
import sci7 from "../../../images/science-collection/scientist.jpg";
import sci8 from "../../../images/science-collection/solar.jpg";

import spr1 from "../../../images/sports-collection/balance-yoga.jpg";
import spr2 from "../../../images/sports-collection/calm-yoga.jpg";
import spr3 from "../../../images/sports-collection/fistbump.jpg";
import spr4 from "../../../images/sports-collection/push-up.jpg";
import spr5 from "../../../images/sports-collection/sunset.jpg";
import spr6 from "../../../images/sports-collection/surfer.jpg";
import spr7 from "../../../images/sports-collection/yoga-matt.jpg";
import spr8 from "../../../images/sports-collection/yoga.jpg";

import trv1 from "../../../images/travel-collection/apartments.jpg";
import trv2 from "../../../images/travel-collection/camels.jpg";
import trv3 from "../../../images/travel-collection/flight.jpg";
import trv4 from "../../../images/travel-collection/globe.jpg";
import trv5 from "../../../images/travel-collection/island.jpg";
import trv6 from "../../../images/travel-collection/mayan.jpg";
import trv7 from "../../../images/travel-collection/mountain.jpg";
import trv8 from "../../../images/travel-collection/red-dressed-woman.jpg";

import Collection from "./Collection.tsx";

const data = [
  { title: "ARTS", images: [art1, art2, art3, art4, art5, art6, art7, art8] },
  {
    title: "SCIENCE",
    images: [sci1, sci2, sci3, sci4, sci5, sci6, sci7, sci8],
  },
  {
    title: "SPORTS",
    images: [spr1, spr2, spr3, spr4, spr5, spr6, spr7, spr8],
  },
  {
    title: "TRAVEL",
    images: [trv1, trv2, trv3, trv4, trv5, trv6, trv7, trv8],
  },
  { title: "ARTS", images: [art1, art2, art3, art4, art5, art6, art7, art8] },
];

const Collections = () => {
  const [collections] = useState(data);
  return (
    <div className={styles.collections}>
      {collections.map((item, index) => (
        <Collection key={index} data={item} />
      ))}
    </div>
  );
};

export default Collections;
