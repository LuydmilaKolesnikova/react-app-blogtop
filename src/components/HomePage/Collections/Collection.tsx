import React, { useState } from "react";
import styles from "./Collection.module.css";
import { CollectionState } from "./Collections";

interface Props {
  data: CollectionState;
}

const Collection: React.FC<Props> = (props) => {
  const [collectionHover, setCollectionHover] = useState(false);
  const classname = props.data.title.toLowerCase();
  return (
    <div
      className={
        collectionHover ? `${styles.area} ${styles.areaHover}` : styles.area
      }
      onMouseOver={() => setCollectionHover(true)}
      onMouseOut={() => setCollectionHover(false)}
    >
      <h2 className={styles.title}>{props.data.title}</h2>
      <div className={`${styles.item} ${styles[classname]}`}>
        {props.data.images.map((img, index) => {
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
