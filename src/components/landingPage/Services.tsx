import React from "react";

const Services: React.FC = () => {
	return (
		<article className='flex flex-wrap justify-around gap-4 w-[95%] md:w-3/4 py-10'>
			<div className='flex flex-col justify-center items-center w-40 '>
				<img src='cart.svg' alt='' className=' w-1/2 h-1/2'/> 
				<p className=' text-center w-full py-2 font-bold text-xl text-[#774936] italic'>Easy shopping</p>
			</div>
			<div className='flex flex-col justify-center items-center w-40 '>
				<img src='card.svg' alt='' className='w-1/2 h-1/2'/> 
				<p className=' text-center w-full py-2 font-bold text-xl text-[#774936] italic'>Easy shopping</p>
			</div>
			<div className='flex flex-col justify-center items-center w-40 '>
				<img src='truck-fast.svg' alt='' className='w-1/2 h-1/2'/> 
				<p className=' text-center w-full py-2 font-bold text-xl text-[#774936] italic'>Easy shopping</p>
			</div>
			<div className='flex flex-col justify-center items-center w-40 '>
				<img src='24-support.svg' alt='' className='w-1/2 h-1/2'/> 
				<p className=' text-center w-full py-2 font-bold text-xl text-[#774936] italic'>Easy shopping</p>
			</div>
		</article>
	);
};

export default Services;
