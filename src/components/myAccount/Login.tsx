import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { hideLoading, modifyCustomer, showLoading } from "../../redux/slice";
import { login } from "../../api/auth";
import { AxiosError } from "axios";

type LoginForm = { email: string; password: string };

const Login: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loginData, setLoginData] = useState<LoginForm>({
		email: "",
		password: ""
	});
	const [lengthValidated, setLengthValidated] = useState(true);

	const updateLoginData = (e: any) => {
		if (e.target.name === "password") {
			const length = new RegExp("(?=.{8,})");

			length.test(e.target.value)
				? setLengthValidated(true)
				: setLengthValidated(false);
		}

		setLoginData({
			...loginData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			dispatch(showLoading());
			const response = await login(loginData);
			dispatch(hideLoading());

			if (!response.success) {
				console.log("🔐 Error logging in", JSON.stringify(response, null, 2));

				toast.error(response.message);
				return;
			}
			if (response.data.customer) {
				toast.success("Login Successfull");
				dispatch(modifyCustomer(response.data.customer));

				if (response.data.customer.isAdmin) {
					navigate("/admin/upload");
				} else {
					// navigate("/passengerDashboard");
				}
				return;
			}
		} catch (error) {
			console.log("🔐 Error logging in", error);
			const detailedError = (error as AxiosError | any)?.response?.data
				?.message;

			console.log("❌ Detailed Error logging in ", detailedError);
			const message =
				detailedError || "Error logging in. Please try again later";
			dispatch(hideLoading());
			toast.error(message);
		}
	};

	return (
		<article className='flex flex-col w-full justify-center items-center mx-4 md:mx-8 '>
			<h2 className='w-full font-bold text-[#774936] text-lg md:text-3xl text-left'>
				Log In
			</h2>
			<div className='w-full my-4 md:my-9 py-6 md:py-12 px-2 md:px-4 border border-[#d0a795]'>
				<div className=' mb-8'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Email address
					</label>
					<input
						type='email'
						name='email'
						onChange={updateLoginData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
				</div>
				<div className=' mb-12'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Password
					</label>
					<input
						type='text'
						name='password'
						onChange={updateLoginData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
					{!lengthValidated && (
						<p className='mt-2 text-sm text-red-600 dark:text-red-500'>
							<span className='font-medium'>Oh, snapp!</span> At least 8
							characters
						</p>
					)}
				</div>
				<button
					type='button'
					onClick={handleSubmit}
					className='text-white md:text-lg  h-10 md:h-12 bg-[#774936] focus:bg-[#d0a795] font-medium px-10 me-1 mb-2  focus:outline-none '>
					LOGIN
				</button>
			</div>
		</article>
	);
};

export default Login;
