import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

function App() {
    // navigate to router for further info
    return <RouterProvider router={router} />;
}

export default App;
