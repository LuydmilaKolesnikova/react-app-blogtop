import React, { useState } from "react";
import styles from "./SearchArea.module.css";
import { SearchIcon } from "../../SVG-icons/SVG-icons";

const SearchArea = () => {
  let [mobileSearchInputVisible, setMobileSearchInputVisible] = useState(false);
  let [searchInputHover, setSearchInputHover] = useState(false);
  let [searchBtnAreaHover, setSearchBtnAreaHover] = useState(false);
  let [inputText, setInputText] = useState("Search Here");

  const onChangeInputText = (e: any) => {
    setInputText(e.currentTarget.value);
  };

  const onMouseDownInput = () => {
    inputText === "Search Here" && setInputText("");
  };

  const onBlurInput = () => {
    inputText === "" && setInputText("Search Here");
  };

  return (
    <div className={`${styles.search}`}>
      <input
        className={
          searchInputHover
            ? `${styles.searchInput} ${styles.searchInputHover}`
            : styles.searchInput
        }
        value={inputText}
        onChange={onChangeInputText}
        onBlur={onBlurInput}
        onMouseDown={onMouseDownInput}
        onMouseOver={() => setSearchInputHover(true)}
        onMouseOut={() => setSearchInputHover(false)}
      />

      <div
        className={
          searchBtnAreaHover
            ? `${styles.searchBtnArea} ${styles.searchBtnAreaHover}`
            : styles.searchBtnArea
        }
        onMouseOver={() => {
          setMobileSearchInputVisible(true);
          setSearchBtnAreaHover(true);
        }}
        onMouseOut={() => {
          setMobileSearchInputVisible(false);
          setSearchBtnAreaHover(false);
        }}
      >
        <button className={styles.searchBtn}>
          <SearchIcon />
        </button>
        {mobileSearchInputVisible && (
          <input
            className={styles.mobileSearchInput}
            value={inputText}
            onChange={onChangeInputText}
            onBlur={onBlurInput}
            onMouseDown={onMouseDownInput}
          />
        )}
      </div>
    </div>
  );
};

export default SearchArea;
