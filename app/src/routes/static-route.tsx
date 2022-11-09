import React from 'react';
import Container from "../components/container/container"
import HomeLink from '../components/home-link';
import Static from '../components/static';
import StrictNoStrict from '../components/strict-no-strict/strict-no-strict';

const StaticRoute = () => {
    return <Container>
        <HomeLink />
        <StrictNoStrict>
            <Static />
        </StrictNoStrict>
    </Container>
}

export default StaticRoute;