import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./auth";

import './App.css'
import Landing from './pages/Landing';
import MyAccount from './pages/MyAccount';
import { useSelector } from 'react-redux';
import Loading from './components/Loading';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import CheckOut from './pages/CheckOut';

function App() {
const { loading } = useSelector((state: any) => state.alerts);
	return (
		<>
			{loading && <Loading />}
			<Toaster position='top-center' reverseOrder={false} />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/Myaccount' element={<MyAccount />} />
				<Route path='/ContactUs' element={<ContactUs />} />
				<Route path='/Shop' element={<Shop />} />
				<Route path='/CheckOut' element={<CheckOut />} />

				{/* <Route path='/userDashboard' element={<Userdashboard />} />
				<Route path='/forgotpassword' element={<Forgetpassword />} /> */}

				{/* <Route path='/CheckOut' element={<PrivateRoute />}>
					<Route path='/CheckOut' element={<CheckOut />} />
				</Route> */}
			</Routes>
		</>
	);
}

export default App
