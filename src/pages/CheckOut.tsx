import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import EmptyCart from '../components/checkout/EmptyCart';

const CheckOut: React.FC = () => {
  return (
		<>
			<NavBar />
			<section className='bg-[#fef8f8] flex flex-col items-center justify-center w-full'>
				<h1 className=' font-bold text-[#774936] text-xl md:text-3xl w-[95%] md:w-3/4 px-4 md:px-8 py-3 md:py-6'>
					Your Cart
				</h1>
           <article className='flex justify-center items-center w-[95%] md:w-3/4 '>
              <EmptyCart/>
            </article>
			</section>
			<Footer />
		</>
	);
}

export default CheckOut