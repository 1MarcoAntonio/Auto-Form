import NewIten from "./NewIten";
import os from "../assets/os.png";
import search from "../assets/search.png";

function ItensList() {
  return (
    <>
      <NewIten
        image={os}
        alt={"os-icon"}
        last={"Ultima O.S Registrada: "}
        description={"Registrar uma Nova O.S"}
      />
      <NewIten
        image={search}
        alt={"search-icon"}
        last={"Ultima O.S Consultada"}
        description={""}
      />
    </>
  );
}

export default ItensList;
