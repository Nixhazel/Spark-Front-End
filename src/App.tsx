import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./auth";

import './App.css'
import Landing from './pages/Landing';
import MyAccount from './pages/MyAccount';

function App() {

	return (
		<>
			<Toaster position='top-center' reverseOrder={false} />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/Myaccount' element={<MyAccount />} />
				{/* <Route path='/signup' element={<Signup />} /> */}
				{/* 
				<Route path='/userDashboard' element={<Userdashboard />} />
				<Route path='/forgotpassword' element={<Forgetpassword />} />

				<Route path='/admin/registerdriver' element={<PrivateRoute />}>
					<Route path='/admin/registerdriver' element={<Registerdriver />} />
				</Route> */}
			</Routes>
		</>
	);
}

export default App
