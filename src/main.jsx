import { createRoot } from "react-dom/client";
import "./index.css";
import { ListaMusicaScreen } from "./Componets/Screens/ListaMusicaScreen";

createRoot(document.getElementById("root")).render(
  <>
    <ListaMusicaScreen />
  </>
);
