import React from "react";

import NavBar from "../../components/NavBar";
import UploadProductForm from "../../components/admin/UploadProductForm";

const UploadProducts: React.FC = () => {
	return (
		<>
			<NavBar />
			<section className='bg-[#fef8f8] flex flex-col items-center justify-center w-full '>
				<h1 className=' font-bold text-[#774936] text-xl md:text-3xl w-[95%] md:w-3/4 px-4 md:px-8  pt-5 md:pt-10'>
					Upload Product
				</h1>
				<article className='flex justify-center items-start w-[95%] md:w-3/4'>
					<UploadProductForm />
				</article>
			</section>
		</>
	);
};

export default UploadProducts;
