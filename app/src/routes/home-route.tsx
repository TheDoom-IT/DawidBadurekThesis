import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/container/container';
import { ROUTES } from './routes';

function HomeRoute() {
    return (
        <Container>
            <Link to={ROUTES.STATIC}>Static</Link>
            <Link to={ROUTES.REF_CHANGE}>Ref change</Link>
            <Link to={ROUTES.RECREATE}>Recreate</Link>
        </Container>
    );
}

export default HomeRoute;