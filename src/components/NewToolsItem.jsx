import classes from "./ItemsStyle.module.css";
import { Link } from "react-router-dom";

function NewToolsItem({ image, alt, lastIten, description }) {
  return (
    <>
      <div className={classes.itens}>
        <img className={classes.image} src={image} alt={alt} />
        <p>{description}</p>
        <p>{lastIten}</p>
      </div>
    </>
  );
}

export default NewToolsItem;
