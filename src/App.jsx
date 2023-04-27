import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainMenu from "./components/MainMenu";
import OsOptions from "./pages/OsOptions";

const router = createBrowserRouter([
  { path: "/", element: <MainMenu /> },
  { path: "/o.s", element: <OsOptions /> },
  { path: "/todas", element: "" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
