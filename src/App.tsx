import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

function App() {
    return (
        <f-div width="100%" height="100%" state="default">
            <RouterProvider router={router} />
        </f-div>
    );
}

export default App;
