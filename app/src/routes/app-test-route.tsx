import React, { useState } from 'react';
import { Container, HomeLink } from '../components';
import { AppTest } from '../components/routes/app-test';

export const AppTestRoute = () => {
    const [points, setPoints] = useState(0);

    return (
        <Container>
            <HomeLink />
            <React.StrictMode>
                <button onClick={() => setPoints(points - 1)}>-</button>
                {points}
                <button onClick={() => setPoints(points + 1)}>+</button>
                <AppTest pointsNumber={points} />
            </React.StrictMode>
        </Container>
    );
};
