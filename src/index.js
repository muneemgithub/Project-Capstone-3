import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Error from "./Components/Error/error";
import Layout from "./Components/Layout/layout"
import HomePage from './Components/Home/homepage';
import { Provider } from 'react-redux';
import  Store  from "./Store/Store"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "home",
        element: <HomePage/>,
      },
      {
        path: "*", // Catch-all route for undefined paths
        element: <Error />,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <RouterProvider router={router} />
   </Provider>
);

