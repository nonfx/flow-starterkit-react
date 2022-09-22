import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'about',
        element: <div>About</div>,
    },
]);
