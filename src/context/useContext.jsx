import { useContext } from "react";
import PocketContext from "./PocketContext";
const usePocketContext = () => {
  return useContext(PocketContext);
};

export default usePocketContext;