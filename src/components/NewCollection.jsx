import classes from "./ItemsStyle.module.css";
import { Link } from "react-router-dom";

function NewCollection({ image, alt, lastIten, description, link }) {
  return (
    <>
      <div className={classes.itens}>
        <Link to={link}>
          <img className={classes.image} src={image} alt={alt} />
          <p>{description}</p>
          <p>{lastIten}</p>
        </Link>
      </div>
    </>
  );
}

export default NewCollection;
