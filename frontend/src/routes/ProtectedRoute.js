import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, user } = useSelector((state) => state.auth);
  if (loading === false) {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }
};

export default ProtectedRoute;
