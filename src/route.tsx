import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Revenue from "./pages/Revenue";
import App from "./App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout/>,
      children: [
        {
            path: "/",
            element: <App/>
        }
      ]

    },
]);