import React from 'react'

const Footer: React.FC = () => {
  return (
		<footer className='flex flex-wrap justify-around md:items-center gap-10 py-10 w-full h-fit md:h-72 bg-[#774936] '>
			<div className='flex flex-col w-[345px] items-start justify-center gap-3'>
				<div className=' flex items-center justify-center'>
					<img src='sysserve-logo.svg' alt='' />
					<div className='flex flex-col ml-3'>
						<p className='p-0 m-0 text-4xl font-bold'>SPARK HAIR</p>
						<p className='p-0 m-0 text-xs'>...be productive</p>
					</div>
				</div>
				<p className='p-0 m-0 text-white text-lg font-semibold'>
					Warri, Nigeria.
				</p>
				<a
					href='https://api.whatsapp.com/send?phone=+2347030763737&text=Hello, more information!'
					className='p-0 m-0 text-white text-lg font-semibold'>
					Phone: +234 7030763737
				</a>
				<a
					href='mailto:cynthiapoweide@gmail.com'
					className='p-0 m-0 text-white text-lg font-semibold'>
					Email: cynthiapoweide@gmail.com
				</a>
			</div>
			<div className='flex flex-col gap-3 items-start'>
				<a href='/Shop' className='m-0 p-0 text-xl font-extrabold text-white'>
					SHOP
				</a>
				<a href='/Shop' className='m-0 p-0 text-lg font-semibold text-white'>
					Product
				</a>
				<a href='' className='m-0 p-0 text-lg font-semibold text-white'>
					Checkout
				</a>
				<a
					href='/Myaccount'
					className='m-0 p-0 text-lg font-semibold text-white'>
					My Account
				</a>
			</div>
			<div className='flex flex-col gap-3 items-start'>
				<a href='' className='m-0 p-0 text-xl font-extrabold text-white'>
					Information
				</a>
				<a
					href='/ContactUs'
					className='m-0 p-0 text-lg font-semibold text-white'>
					Contact Us
				</a>
				<a href='' className='m-0 p-0 text-lg font-semibold text-white'>
					Privacy Policy
				</a>
			</div>
		</footer>
	);
}

export default Footer