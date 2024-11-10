import { RouteObject } from "react-router-dom";

// Components
import App from "../App";

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [],
  },
];

export default routes;
