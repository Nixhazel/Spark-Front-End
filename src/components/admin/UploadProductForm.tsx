import React, { useState } from "react";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from '../../redux/slice';
import { createProduct } from '../../api/admin';

const UploadProductForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [productsData, setProductsData] = useState({});
	const [image1, setimage1] = useState("");
	const [image2, setimage2] = useState("");
	const [image3, setimage3] = useState("");

	const uploadImage1 = async () => {
		const { files }: any = document.querySelector('input[id="image1"]');
		const formData = new FormData();
		formData.append("file", files[0]);
		formData.append("upload_preset", "dxrfinbk");
		const options = { method: "POST", body: formData };
		return fetch(
			"https://api.cloudinary.com/v1_1/dadfnrfn4/image/upload",
			options
		)
			.then((res) => res.json())
			.then((res: any) => setimage1(res.url))
			.catch((err) => console.log(err));
	};



	const updateProductsData = (e: any) => {
		setProductsData({
			...productsData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			dispatch(showLoading());
			const response: any = await createProduct({
				...productsData,
				image1,
				image2,
				image3
			});
			dispatch(hideLoading());

			if (!response.success) {
				console.log("🔐 Error uploading", JSON.stringify(response, null, 2));

				toast.error(response.message);
				return;
			}
			
				toast.success(response.data.message);
			// 	navigate("/admin/alldrivers");
			
		} catch (error) {
			console.log(
				"🔐 Error Uploading Product",
				JSON.stringify((error as AxiosError)?.response?.data, null, 2)
			);

			const detailedError = JSON.stringify(
				(error as AxiosError | any)?.response?.data?.message
			);
			const message =
				detailedError || "Error Uploading Product. Please try again";
			dispatch(hideLoading());
			toast.error(message);
		}
		
	};
	return (
		<article className='flex flex-col w-full justify-center items-center mx-4 md:mx-8 '>
			<div className='flex flex-col items-center w-full my-4 md:my-9 py-4 md:py-9 px-1 md:px-4 border border-[#d0a795]'>
				<div className=' mb-5 w-full md:w-[49%]'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Name
					</label>
					<input
						type='text'
						name='name'
						// placeholder='Your Full Name'
						onChange={updateProductsData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
				</div>
				<div className=' mb-5 w-full md:w-[49%]'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Category
					</label>
					<input
						type='text'
						name='category'
						// placeholder='Your Full Name'
						onChange={updateProductsData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
				</div>
				<div className=' mb-5 w-full md:w-[49%]'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Description
					</label>
					<input
						type='text'
						name='description'
						// placeholder='Your Full Name'
						onChange={updateProductsData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
				</div>
				<div className=' mb-5 w-full md:w-[49%]'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Price
					</label>
					<input
						type='text'
						name='price'
						// placeholder='Your Full Name'
						onChange={updateProductsData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
				</div>
				<div className=' mb-5 w-full md:w-[49%]'>
					<label
						htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Stock
					</label>
					<input
						type='text'
						name='quantity'
						// placeholder='Your Full Name'
						onChange={updateProductsData}
						id='default-input'
						className='  border border-[#d0a795] text-[#774936] text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
				</div>
				<div className=' mb-5 w-full md:w-[49%]'>
					<label
						// htmlFor='default-input'
						className='block mb-2 text-sm font-bold text-[#774936] '>
						Image
					</label>
					<input
						type='file'
						name='image1'
						id='image1'
						// placeholder='Your Full Name'
						onChange={uploadImage1}
						className=' border border-[#d0a795] text-[#774936] pl-5 text-sm rounded-lg focus:ring-[#774936] focus:border-[#774936] block w-full p-2.5 '
					/>
				</div>
				<button
					type='button'
					onClick={handleSubmit}
					className='text-white mt-5 md:text-lg h-10 md:w-[20%] md:h-12 bg-[#774936] focus:bg-[#d0a795] font-medium px-10 me-1 mb-2 focus:outline-none '>
					Upload
				</button>
			</div>
		</article>
	);
};

export default UploadProductForm;
