import { Container, HomeLink, StrictNoStrict, RecreateCanvas } from '../components';

export const RecreateCanvasRoute = () => {
    return (
        <Container>
            <HomeLink />
            <StrictNoStrict>
                <RecreateCanvas />
            </StrictNoStrict>
        </Container>
    );
};
