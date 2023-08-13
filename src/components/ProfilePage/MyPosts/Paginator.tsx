import React from "react";
import styles from "./Paginator.module.css";
import { useState } from "react";
import left from "../../../images/SVG-icons/left.svg";

const data = [1, 2, 3, 4, null, 20];

const Paginator = () => {
  let [pages, setPages] = useState(data);
  let [currentPage, setCurrentPage] = useState(1);

  const changePages = (currentPage) => {
    setCurrentPage(currentPage);
    let pages = [];
    if (currentPage > 3) {
      for (let i = currentPage - 2; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push(null);
      pages.push(currentPage + 18);
    } else pages = [1, 2, 3, 4, null, 20];
    setPages(pages);
  };

  return (
    <div className={styles.paginator}>
      <button
        className={styles.pageNumberBtn}
        onClick={() => changePages(currentPage - 1)}
      >
        <img className={styles.prevBtnIcon} src={left} alt="" />
      </button>
      {pages.map((p, index) => (
        <button
          key={index}
          className={
            p === currentPage
              ? `${styles.currentPageNumberBtn} ${styles.pageNumberBtn}`
              : p === null
              ? styles.dotsBtn
              : styles.pageNumberBtn
          }
          onClick={() => changePages(p)}
        >
          {p === null ? "..." : p}
        </button>
      ))}
      <button
        className={styles.pageNumberBtn}
        onClick={() => changePages(currentPage + 1)}
      >
        <img className={styles.nextBtnIcon} src={left} alt="" />
      </button>
    </div>
  );
};

export default Paginator;
