import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const { loading, user } = useSelector((state) => state.auth);
  if (loading === false) {
    if (!user) {
      return <Navigate to="/login" replace />;
    } else if(user.role === "user"){
        return <Navigate to="/" replace />;
    }
    return children;
  }
};

export default ProtectedAdminRoute;
