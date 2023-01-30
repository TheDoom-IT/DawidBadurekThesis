import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export const HomeLink = () => {
    return <Link to={ROUTES.HOME}>Home</Link>
}