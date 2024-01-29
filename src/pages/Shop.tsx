import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CategoriesList from "../components/shop/CategoriesList";
import HairCards from "../components/HairCards";

const Shop: React.FC = () => {
	return (
		<>
			<NavBar />
			<section className='bg-[#fef8f8] flex flex-col items-center justify-center w-full '>
				<article className='flex flex-col-reverse md:flex-row justify-between items-start w-[95%] md:w-3/4 '>
					<CategoriesList />
					<div className='flex flex-col justify-center w-full md:w-3/4 pt-2 md:pt-5 border border-[#d0a795]'>
						<h1 className=' font-bold text-[#774936] text-xl md:text-3xl w-full px-5 pb-5'>
							Shop
						</h1>
						<div className=' flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full mb-14 border border-blue-500'>
							<HairCards />
							<HairCards />
							<HairCards />
							<HairCards />
							<HairCards />
							<HairCards />
						</div>
					</div>
				</article>
			</section>
			<Footer />
		</>
	);
};

export default Shop;
