import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './HomePage'; 
import DogTablePage from './DogTablePage'; 
import UpdateDogForm from './UpdateDogForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dogs",
    element: <DogTablePage />, 
  },
  {
    path: "/update/:id", 
    element: <UpdateDogForm />, 
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
