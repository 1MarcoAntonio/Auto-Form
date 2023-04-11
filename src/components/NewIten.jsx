import classes from "./NewIten.module.css";

function NewIten({ image, alt, last, description }) {
  return (
    <>
      <div className={classes.itens}>
        <img className={classes.image} src={image} alt={alt} />
        <p>{description}</p>
        <p>{last}</p>
      </div>
    </>
  );
}

export default NewIten;
