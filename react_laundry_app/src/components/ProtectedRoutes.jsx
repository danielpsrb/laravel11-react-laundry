import { Navigate } from "react-router-dom";
import { authSession } from "../context/auth";

export const ProtectedRoutes = ({ children }) => {

    const { user } = authSession();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}