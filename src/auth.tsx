import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
	const token = localStorage.getItem("userToken");
	return token ? <Outlet /> : <Navigate to='/MyAccount' />;
};

export default PrivateRoute;
