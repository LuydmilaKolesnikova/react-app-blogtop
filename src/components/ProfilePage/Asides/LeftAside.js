import styles from "./Asides.module.css";
import AboutMe from "./AboutMe";
import Interests from "./Interests";
import Friends from "./Friends";
import Badges from "./Badges";
import Social from "./Social";

const LeftAside = () => {
  return (
    <aside className={`${styles.aside} ${styles.leftAside}`}>
      <AboutMe />
      <Interests />
      <Friends />
      <Badges />
      <Social />
    </aside>
  );
};

export default LeftAside;
