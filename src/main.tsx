import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "./Router.tsx";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import {store} from "./Stores/Store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <RouterProvider router={AppRouter}/>
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
)