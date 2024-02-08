import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/slice";
import toast from "react-hot-toast";
import { contactUs } from "../../api/auth";

type ContactForm = {
	email: string;
	subject: string;
	phone: string;
	name: string;
	message: string;
};

const ContactUsForm: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [contactData, setContactData] = useState<ContactForm>({
		email: "",
		subject: "",
		phone: "",
		name: "",
		message: ""
	});

	const updateContactData = (e: any) => {
		setContactData({
			...contactData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			dispatch(showLoading());
			const response = await contactUs(contactData);
			dispatch(hideLoading());

			if (!response.success) {
				console.log(
					"🔐 Error Submitting form",
					JSON.stringify(response, null, 2)
				);
				toast.error(response.message);
				return;
			}

			if (response.data) {
				toast.success("Contact Form Submitted Successfull");

				return;
			}
		} catch (error) {}
	};
	return (
		<article className='flex flex-col w-full justify-center items-center mx-4 md:mx-8 '>
			<div className='flex flex-col items-center w-full my-4 md:my-9 py-4 md:py-9 px-1 md:px-4 border border-[#d0a795]'>
				<div className='flex flex-wrap md:gap-5 justify-center w-full'>
					<div className=' mb-5 w-full md:w-[49%]'>
						<label
							htmlFor='default-input'
							className='block mb-2 text-sm font-bold text-[#774936] '>
							Full Name
						</label>
						<input
							type='text'
							name='name'
							placeholder='Your Full Name'
							onChange={updateContactData}
							id='default-input'
							className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
						/>
					</div>
					<div className=' mb-5 w-full md:w-[49%]'>
						<label
							htmlFor='default-input'
							className='block mb-2 text-sm font-bold text-[#774936] '>
							Email Address
						</label>
						<input
							type='email'
							name='email'
							placeholder='Email Address'
							onChange={updateContactData}
							id='default-input'
							className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full  p-2.5 '
						/>
					</div>
					<div className=' mb-5 w-full md:w-[49%]'>
						<label
							htmlFor='default-input'
							className='block mb-2 text-sm font-bold text-[#774936] '>
							Whats app number
						</label>
						<input
							type='number'
							name='phone'
							placeholder='Your whats app phone number'
							onChange={updateContactData}
							id='default-input'
							className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full  p-2.5 '
						/>
					</div>
					<div className=' mb-5 w-full md:w-[49%]'>
						<label
							htmlFor='default-input'
							className='block mb-2 text-sm font-bold text-[#774936] '>
							Subject
						</label>
						<input
							type='text'
							name='subject'
							placeholder='The message subject...'
							onChange={updateContactData}
							id='default-input'
							className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full  p-2.5 '
						/>
					</div>
				</div>

				<div className='w-full mb-8'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Message
					</label>

					<textarea
						id='message'
						onChange={updateContactData}
						rows={5}
						name='message'
						className='border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
						placeholder='Write your thoughts here...'></textarea>
				</div>

				<button
					type='button'
					onClick={handleSubmit}
					className='text-white md:text-lg h-10 md:w-[20%] md:h-12 bg-[#774936] focus:bg-[#d0a795] font-medium px-10 me-1 mb-2 focus:outline-none '>
					Submit
				</button>
			</div>
		</article>
	);
};

export default ContactUsForm;
