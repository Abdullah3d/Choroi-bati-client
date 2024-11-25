import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    // User ase kina tai
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    // jodi user thake
    if (user) {
        return children;
    }

    return <Navigate to="/login "></Navigate>
};

export default PrivateRoute;