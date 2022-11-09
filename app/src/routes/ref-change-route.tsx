import React from 'react';
import Container from "../components/container/container"
import HomeLink from '../components/home-link';
import RefChange from '../components/ref-change';
import StrictNoStrict from '../components/strict-no-strict/strict-no-strict';

const RefChangeRoute = () => {
    return <Container>
        <HomeLink />
        <StrictNoStrict>
            <RefChange />
        </StrictNoStrict>
    </Container>
}

export default RefChangeRoute;