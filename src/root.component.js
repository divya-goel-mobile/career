import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}
