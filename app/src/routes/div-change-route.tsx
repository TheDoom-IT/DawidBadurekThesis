import React from 'react';
import Container from "../components/container/container"
import HomeLink from '../components/home-link';
import DivChange from '../components/div-change/div-change';
import StrictNoStrict from '../components/strict-no-strict/strict-no-strict';

const DivChangeRoute = () => {
    return <Container>
        <HomeLink />
        <StrictNoStrict>
            <DivChange />
        </StrictNoStrict>
    </Container>
}

export default DivChangeRoute;