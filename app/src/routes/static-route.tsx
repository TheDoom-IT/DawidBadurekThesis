import { Container, HomeLink, Static, StrictNoStrict } from '../components';

export const StaticRoute = () => {
    return <Container>
        <HomeLink />
        <StrictNoStrict>
            <Static />
        </StrictNoStrict>
    </Container>
}