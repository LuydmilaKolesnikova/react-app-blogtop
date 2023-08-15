import React, { useState } from "react";
import styles from "./Asides.module.css";
import image1 from "../../../images/pictures/image1.jpg";
import image2 from "../../../images/pictures/image2.jpg";
import image3 from "../../../images/pictures/image3.jpg";
import image4 from "../../../images/pictures/image4.jpg";
import image5 from "../../../images/pictures/image5.jpg";
import image6 from "../../../images/pictures/image6.jpg";
import image7 from "../../../images/pictures/image7.jpg";
import image8 from "../../../images/pictures/image8.jpg";
import image9 from "../../../images/pictures/image9.jpg";
import image10 from "../../../images/pictures/image1.jpg";

const data = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Images = () => {
  const [images] = useState(data);
  return (
    <div className={`${styles.images} ${styles.block}`}>
      <h2 className={styles.title}>IMAGES</h2>
      <div className={styles.imagesIcons}>
        {images.map((image, index) => (
          <img className={styles.imageIcon} key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Images;
