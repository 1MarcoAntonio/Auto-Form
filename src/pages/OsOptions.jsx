import { Link } from "react-router-dom";
import search from "../assets/search.png";
import NewItem from "../components/NewOsItem";
function OsOptions() {
  return (
    <>
      <NewItem
        image={search}
        alt={"search-icon"}
        description={"Preencher Ficha Mecanica"}
        lastIten={"Ultima Ficha Preenchida: 26154"}
      />
      <NewItem
        image={search}
        alt={"search-icon"}
        description={"Adicionar Fotos da O.S"}
        lastIten={"Ultimas Fotos Registradas: 26155"}
      />
    </>
  );
}

export default OsOptions;
