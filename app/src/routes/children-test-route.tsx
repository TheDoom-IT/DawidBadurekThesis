import { Container, HomeLink, StrictNoStrict } from '../components';
import { ChildrenTest } from '../components/routes/children-test';

export const ChildrenTestRoute = () => {
    return (
        <Container>
            <HomeLink />
            <StrictNoStrict>
                <ChildrenTest />
            </StrictNoStrict>
        </Container>
    );
};
