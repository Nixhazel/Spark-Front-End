import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [signupData, setSignupData] = useState({});
	const [lengthValidated, setLengthValidated] = useState(true);
	// const [numberValidated, setNumberValidated] = useState(true);

	const updateSignUpData = (e: any) => {
		if (e.target.name === "password") {
			const length = new RegExp("(?=.{8,})");

			length.test(e.target.value)
				? setLengthValidated(true)
				: setLengthValidated(false);
		}
		// if (e.target.name === "phone") {
		// 	const number = new RegExp("(?=.*[0-9])");

		// 	number.test(e.target.value)
		// 		? setNumberValidated(true)
		// 		: setNumberValidated(false);
		// }

		setSignupData({
			...signupData,
			[e.target.name]: e.target.value
		});
	};
	return (
		<article className='flex flex-col w-full  justify-center items-center mx-4 md:mx-8 '>
			<h2 className='w-full font-bold text-[#774936] text-lg md:text-3xl text-left'>
				Register
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
						onChange={updateSignUpData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
				</div>
				<div className=' mb-8'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Whats app number
					</label>
					<input
						type='number'
                  name='phone'
						onChange={updateSignUpData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
					{/* {!numberValidated && (
						<p className='mt-2 text-sm text-red-600 dark:text-red-500'>
							<span className='font-medium'>Oh, snapp!</span> At least 11
							characters.
						</p>
					)} */}
				</div>
				<div className=' mb-8'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Password
					</label>
					<input
						type='text'
						onChange={updateSignUpData}
						name='password'
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
					{!lengthValidated && (
						<p className='mt-2 text-sm text-red-600 dark:text-red-500'>
							<span className='font-medium'>Oh, snapp!</span> At least 8
							characters.
						</p>
					)}
				</div>

				<p className='block mb-10 text-sm font-bold text-[#774936]'>
					Your personal data will be used to support your experience through
					this website, to manage access to your account, and for other purpose
					described in our Privacy PolicyPrivacy
				</p>

				<button
					type='button'
					className='text-white md:text-lg  h-10 md:h-12 bg-[#774936] focus:bg-[#d0a795] font-medium px-10 me-1 mb-2  focus:outline-none '>
					REGISTER
				</button>
			</div>
		</article>
	);
};

export default Signup;
