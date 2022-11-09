import React from 'react';
import Container from "../components/container/container"
import HomeLink from '../components/home-link';
import Recreate from '../components/recreate';
import StrictNoStrict from '../components/strict-no-strict/strict-no-strict';

const RecreateRoute = () => {
    return <Container>
        <HomeLink />
        <StrictNoStrict>
            <Recreate />
        </StrictNoStrict>
    </Container>
}

export default RecreateRoute;