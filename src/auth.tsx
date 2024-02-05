import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
	const token = localStorage.getItem("SPARKCustomer::Auth_Token");
	return token ? <Outlet /> : <Navigate to='/MyAccount' />;
};

export default PrivateRoute;
