import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from './routes/app-route';
import {
    HomeRoute,
    ROUTES,
    StaticRoute,
    DivChangeRoute,
    RecreateCanvasRoute,
    ChildrenTestRoute,
} from './routes';
import { AppTestRoute } from './routes/app-test-route';
import './styles/index.css';

export const browserRouter = createBrowserRouter(
    [
        {
            path: ROUTES.HOME,
            element: <HomeRoute />,
        },
        {
            path: ROUTES.STATIC,
            element: <StaticRoute />,
        },
        {
            path: ROUTES.DIV_CHANGE,
            element: <DivChangeRoute />,
        },
        {
            path: ROUTES.RECREATE_CANVAS,
            element: <RecreateCanvasRoute />,
        },
        {
            path: ROUTES.CHILDREN_TEST,
            element: <ChildrenTestRoute />,
        },
        {
            path: ROUTES.APP_TEST,
            element: <AppTestRoute />,
        },
        {
            path: ROUTES.APP,
            element: <AppRoute />,
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    },
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={browserRouter} />,
);
