import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeRoute, ROUTES, StaticRoute, DivChangeRoute, RecreateCanvasRoute } from './routes';
import './styles/index.css';

export const browserRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomeRoute />
  },
  {
    path: ROUTES.STATIC,
    element: <StaticRoute />
  },
  {
    path: ROUTES.DIV_CHANGE,
    element: <DivChangeRoute />
  },
  {
    path: ROUTES.RECREATE_CANVAS,
    element: <RecreateCanvasRoute />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={browserRouter} />
);
