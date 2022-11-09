import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const HomeLink = () => {
    return <Link to={ROUTES.HOME}>Home</Link>
}

export default HomeLink;