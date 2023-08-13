import React, { useState } from "react";
import styles from "./Collection.module.css";

const Collection = ({ data }) => {
  const [collectionHover, setCollectionHover] = useState(false);
  const classname = data.title.toLowerCase();
  return (
    <div
      className={
        collectionHover ? `${styles.area} ${styles.areaHover}` : styles.area
      }
      onMouseOver={() => setCollectionHover(true)}
      onMouseOut={() => setCollectionHover(false)}
    >
      <h2 className={styles.title}>{data.title}</h2>
      <div className={`${styles.item} ${styles[classname]}`}>
        {data.images.map((img, index) => {
          const classname = "img" + ++index;
          return (
            <img
              key={index}
              className={`${styles.img} ${styles[classname]}`}
              src={img}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
