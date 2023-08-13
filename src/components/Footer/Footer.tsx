import React, { useState } from "react";
import styles from "./Footer.module.css";
import FooterBlock from "./FooterBlock.tsx";
import avatar from "../../images/avatars/avatar4.jpg";

const data = [
  {
    title: "POPULAR POSTS",
    data: [
      {
        avatar: avatar,
        postName: "Why Are Millennials in So Much Debt?",
        time: "2 days ago",
      },
      {
        avatar: avatar,
        postName:
          "The Top 3 Foods That Cause Poor Gut Health, According to a Dietitian",
        time: "4 days ago",
      },
      {
        avatar: avatar,
        postName: "What to Feed Your Pet When You've Run Out of Cat Food",
        time: "5 days ago",
      },
    ],
  },
  {
    title: "POPULAR TRENDING",

    data: [
      {
        avatar: avatar,
        postName: "Take a Virtual Tour of the Edo-Tokyo Museum",
        time: "8 days ago",
      },
      {
        avatar: avatar,
        postName:
          "Oldest Fossil of Sea Reptile Dating Back 94 Million Years Found in Utah",
        time: "10 day ago",
      },
      {
        avatar: avatar,
        postName:
          "Shock as Woman Who Feared She Had Pneumonia Is Told She's 39 Weeks Pregnant",
        time: "10 day ago",
      },
    ],
  },
];

const Footer = () => {
  const [blocks] = useState(data);
  return (
    <footer className={styles.footer}>
      <div className={styles.infoBlock}>
        {blocks.map((block, index) => (
          <FooterBlock key={index} title={block.title} data={block.data} />
        ))}
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyrightIcon}></p>
        <p className={styles.copyrightText}>
          2023 Blog-top. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
