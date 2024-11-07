import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./routes/App";
import Home from "./routes/Home";
import Bag from "./routes/Bag";
import myntraStore from "./store";
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </Provider>
  </StrictMode>
);
