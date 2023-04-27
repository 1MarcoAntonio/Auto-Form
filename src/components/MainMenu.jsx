import { Link } from "react-router-dom";
import NewCollection from "./NewCollection";
import os from "../assets/os.png";
import search from "../assets/search.png";

function MainMenu() {
  return (
    <>
      <NewCollection
        link={"/o.s"}
        image={os}
        alt={"os-icon"}
        description={"Gerenciar O.S"}
        lastIten={"Ultima O.S Registrada: value "} // value needs to be dinamic
      />

      <NewCollection
        link={""}
        image={search}
        alt={"search-icon"}
        description={"Area de Ferramentas"}
        lastIten={"Ultima O.S Consultada"}
      />
    </>
  );
}

export default MainMenu;
