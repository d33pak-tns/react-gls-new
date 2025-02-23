/* eslint-disable react/prop-types */
// export default PrivateRoute;

import { Route, Navigate } from "react-router-dom"; 
import { useSelector } from "react-redux";  // Import redux hooks

const PrivateRoute = ({ element, ...rest }) => {
  // Get the authentication status from Redux
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); 

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          element  // Render the component if authenticated
        ) : (
          <Navigate to="/" />  // Redirect to Login page if not authenticated
        )
      }
    />
  );
};

export default PrivateRoute;

