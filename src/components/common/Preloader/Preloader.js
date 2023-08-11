import style from "./Preloader.module.css";
import preloader from "../../../images/preloader.gif";

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img src={preloader} alt=""></img>
    </div>
  );
};

export default Preloader;
