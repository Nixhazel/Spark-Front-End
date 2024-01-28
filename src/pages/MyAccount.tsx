import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MyAccount: React.FC = () => {
  return (
		<>
			<NavBar />
			<section className='bg-[#fef8f8] flex flex-col items-center justify-center w-full border border-red-500'>
				<h1 className=' font-bold text-[#774936] text-lg md:text-3xl w-[95%] md:w-3/4 border border-green-500 py-5 md:py-10'>
					My account
				</h1>
				<article className='flex flex-wrap w-[95%] md:w-3/4 border border-green-500'>
					<article className='flex flex-col justify-center items-center'>
						<h2 className='font-bold text-[#774936] text-lg md:text-3xl'>Log In</h2>
					</article>
					<article className='flex flex-col justify-center items-center'>
						<h2 className='font-bold text-[#774936] text-lg md:text-3xl'>Register</h2>
					</article>
				</article>
			</section>
			<Footer />
		</>
	);
}

export default MyAccount