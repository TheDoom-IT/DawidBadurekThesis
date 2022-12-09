import React from 'react';
import { Container, HomeLink, StrictNoStrict, DivChange } from '../components';
import { AppTest } from '../components/routes/app-test';

export const AppTestRoute = () => {
    return <Container>
        <HomeLink />
        <React.StrictMode>
            <AppTest />
        </React.StrictMode>
    </Container>
}