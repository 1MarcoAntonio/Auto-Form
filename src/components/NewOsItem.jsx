import classes from "./ItemsStyle.module.css";
import { Link } from "react-router-dom";

function NewOsItem({ image, alt, lastIten, description }) {
  return (
    <>
      <div className={classes.itens}>
        <Link to={"/o.s"}>
          <img className={classes.image} src={image} alt={alt} />
          <p>{description}</p>
          <p>{lastIten}</p>
        </Link>
      </div>
    </>
  );
}

export default NewOsItem;
