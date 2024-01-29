import React from "react";

const CategoriesList: React.FC = () => {
	return (
		<div className='flex flex-col pt-2 md:pt-14 w-full md:w-1/4 border border-[#d0a795]'>
			<h1 className=' font-bold text-[#774936] text-xl md:text-3xl w-full px-5  '>
				Categories
			</h1>
			<div className='flex flex-col px-5 py-6 md:py-10 gap-6 '>
				<a
					href='/Shop'
					className='m-0 p-0 text-lg font-semibold text-[#774936]'>
					Raw donor hairs (Rdh)
				</a>
				<a
					href='/Shop'
					className='m-0 p-0 text-lg font-semibold text-[#774936]'>
					Super double drawn (Sdd)
				</a>
				<a
					href='/Shop'
					className='m-0 p-0 text-lg font-semibold text-[#774936]'>
					Double drawn (Dd)
				</a>
				<a
					href='/Shop'
					className='m-0 p-0 text-lg font-semibold text-[#774936]'>
					Single drawn (Sd)
				</a>
				<a
					href='/Shop'
					className='m-0 p-0 text-lg font-semibold text-[#774936]'>
					Human hair blend (Hhb)
				</a>
				<a
					href='/Shop'
					className='m-0 p-0 text-lg font-semibold text-[#774936]'>
					Hair product (Hp)
				</a>
			</div>
		</div>
	);
};

export default CategoriesList;
