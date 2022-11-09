import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StaticRoute from './routes/static-route';
import { ROUTES } from './routes/routes';
import HomeRoute from './routes/home-route';
import RefChangeRoute from './routes/ref-change-route';
import RecreateRoute from './routes/recreate-route';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomeRoute />,
  },
  {
    path: ROUTES.STATIC,
    element: <StaticRoute />
  },
  {
    path: ROUTES.REF_CHANGE,
    element: <RefChangeRoute />
  },
  {
    path: ROUTES.RECREATE,
    element: <RecreateRoute />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
