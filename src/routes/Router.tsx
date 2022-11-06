import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './ErrorPage';
import HomeView from '../views/home/HomeView';
import ReadContainer, { loader as readLoader }  from '../views/read/ReadContainer';
import CreateContainer from '../views/create/CreateContainer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomeView />
            },
            {
                path: '/home',
                element: <HomeView/>
            },
            {
                path: '/read',
                element: <ReadContainer/>,
                loader: readLoader,
            },
            {
                path: '/create',
                element: <CreateContainer/>
            }
        ]
    }
]);

export default router;
