import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

function App() {
    // navigate to router to view the code structure. src/Routes.jsx
    return <RouterProvider router={router} />;
}

export default App;
