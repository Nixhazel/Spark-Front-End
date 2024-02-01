import React from 'react'
import { useNavigate } from 'react-router-dom';

const EmptyCart: React.FC = () => {
   const navigate = useNavigate();
  return (
		<article className='flex flex-col justify-center items-center bg-white w-3/4 py-6 md:py-12 mb-5 md:mb-10 border border-[#d0a795]'>
			<div className='flex justify-center items-center'>
				<img src='cart.svg' alt='' className=' w-1/4 md:w-1/2 h-1/4 md:h-1/2' />{" "}
			</div>
			<div className='flex flex-col justify-center items-center w-full my-5 md:my-10'>
				<p className=' font-bold md:text-xl text-center'>Your chart is empty</p>
				<p className=' font-bold md:text-xl text-center mt-5'>
					Browse our categories and discover
				</p>
				<p className=' font-bold md:text-xl text-center'>Our best deals</p>
			</div>

			<button
				type='button'
				onClick={() => navigate("/shop")}
				className='text-white md:text-lg h-10 md:w-[20%] md:h-12 bg-[#774936] focus:bg-[#d0a795] font-medium px-10 me-1 mb-2 focus:outline-none '>
				Start Shopping
			</button>
		</article>
	);
}

export default EmptyCart