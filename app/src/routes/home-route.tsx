import { Link } from 'react-router-dom';
import { Container } from '../components';
import { ROUTES } from './routes';

export const HomeRoute = () => {
    return (
        <Container>
            <Link to={ROUTES.STATIC}>Static</Link>
            <Link to={ROUTES.DIV_CHANGE}>Div change</Link>
            <Link to={ROUTES.RECREATE_CANVAS}>Recreate</Link>
        </Container>
    );
}