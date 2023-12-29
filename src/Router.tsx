import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import Products from "./Pages/Products.tsx";
import Users from "./Pages/Users.tsx";
import Verification from "./Pages/Verification.tsx";

export const AppRouter = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/products",
                element: <Products/>,
            },
            {
                path: "/users",
                element: <Users/>,
            },
            {
                path: "/verification",
                element: <Verification/>,
            },
        ],
    },
]);
