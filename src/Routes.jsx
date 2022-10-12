import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        // navigate to HomePage for seeing further layout (pages/Home/index.tsx)
        element: <HomePage />,
    },
]);
