import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import {lazy} from "react";

const Products = lazy(() => import("./Pages/Products"));
const Users = lazy(() => import("./Pages/Users"));
const Verification = lazy(() => import("./Pages/Verification"));

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
