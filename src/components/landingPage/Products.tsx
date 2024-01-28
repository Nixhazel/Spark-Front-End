import React from 'react'
import HairCards from '../HairCards';
import Reviews from './Reviews';
import Services from './Services';
import CategoriesCard from '../CategoriesCard';

const Products: React.FC = () => {
  return (
		<section className='flex flex-col items-center justify-center w-full mt-4 md:mt-10 border border-red-500'>
			<article className='flex flex-col justify-center w-[95%] md:w-3/4 border border-green-500'>
				<div className='flex justify-between items-center w-full mb-4 md:mb-8 border border-black'>
					<p className=' text-[#774936] text-lg font-bold text-center'>
						FEATURED CATEGORIES
					</p>
					<button
						type='button'
						className='text-white bg-[#774936] font-medium w-2/5 md:w-44 text-base px-5 py-2  '>
						VIEW SHOP
					</button>
				</div>
				<div className='flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full mb-10 border border-blue-500'>
					<CategoriesCard />
					<CategoriesCard />
					<CategoriesCard />
					<CategoriesCard />
				</div>
			</article>
			<article className='flex flex-col justify-center w-[95%] md:w-3/4 border border-green-500'>
				<div className='flex justify-between items-center w-full mb-4 md:mb-8 border border-black'>
					<p className=' text-[#774936] text-lg font-bold text-center'>
						FEATURED PRODUCT
					</p>
					<button
						type='button'
						className='text-white bg-[#774936] font-medium w-2/5 md:w-44 text-base px-5 py-2  '>
						SEE MORE
					</button>
				</div>
				<div className='flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full mb-14 border border-blue-500'>
					<HairCards />
					<HairCards />
					<HairCards />
					<HairCards />
					<HairCards />
					<HairCards />
				</div>
			</article>
			<Reviews />
			<Services />
		</section>
	);
}

export default Products