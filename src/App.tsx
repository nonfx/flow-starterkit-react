import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import { ConfigUtil } from '@cldcvr/flow-core';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        ConfigUtil.setConfig({ theme: 'f-light' });
    }, []);
    // navigate to router to view the code structure. src/Routes.jsx
    return <RouterProvider router={router} />;
}

export default App;
