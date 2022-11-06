import { Link, redirect, useNavigate, useRouteError } from 'react-router-dom';
import { Button } from 'antd';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    return (
        <div id="error-page" style={{
            width: '100vh',
            height: '100vh',
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto'
        }}>
            <h1>Oops!</h1>
            <h2>Sorry, an unexpected error has occurred.</h2>
            <h2>
                {/* @ts-ignore */}
                <i>{error.statusText || error.message}</i>
            </h2>

            <Button size={'large'} onClick={() => navigate('/home')}>Go back to homepage...</Button>
        </div>
    );
};

export default ErrorPage;
