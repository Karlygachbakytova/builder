import classes from "./Logo.module.css";
import logo from "../../../images/logo.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Flowers project" />
      <div>Flowers</div>
    </div>
  );
}

export default Logo;