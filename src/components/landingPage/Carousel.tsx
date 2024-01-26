import React from 'react'
import Carousel1 from '../../assets/carousel-img-1.png'


const Carousel: React.FC = () => {
  return (
		<div
			id='default-carousel'
			className='relative w-full'
			data-carousel='slide'>
			{/* <!-- Carousel wrapper --> */}
			<div className='z-10  relative h-56 overflow-hidden  md:h-96'>
				{/* <!-- Item 1 --> */}
				<div className='hidden duration-700 ease-in-out' data-carousel-item>
					<div className='flex w-full h-56  md:h-96'>
						<div className='flex flex-col justify-between py-9 md:py-12 items-center  h-full w-full text-center'>
							<span className='text-2xl md:text-6xl lg:text-7xl  carousetext '>
								WELCOME TO
							</span>
							<span className='text-2xl md:text-6xl lg:text-7xl carousetext '>
								SPARK HAIR
							</span>

							<button
								type='button'
								className='text-white text-xl md:text-3xl w-fit h-10 md:h-16 bg-[#774936]  focus:ring-1  font-medium rounded-sm px-5 py-1 md:py-2.5 me-2 mb-2  focus:outline-none '>
								SHOP NOW
							</button>
						</div>
						<div className=' h-full w-full '>
							<img
								src={Carousel1}
								className='w-full h-full object-cover'
								alt='...'
							/>
						</div>
					</div>
				</div>
				{/* <!-- Item 2 --> */}
				<div className='hidden duration-700 ease-in-out' data-carousel-item>
					<div className='flex w-full h-56  md:h-96'>
						<div className='flex flex-col justify-between py-9 md:py-12 items-center  h-full w-full text-center'>
							<span className='text-2xl md:text-6xl lg:text-7xl  carousetext '>
								WELCOME TO
							</span>
							<span className='text-2xl md:text-6xl lg:text-7xl carousetext '>
								SPARK HAIR
							</span>

							<button
								type='button'
								className='text-white text-xl md:text-3xl w-fit h-10 md:h-16 bg-[#774936]  focus:ring-1  font-medium rounded-sm px-5 py-1 md:py-2.5 me-2 mb-2  focus:outline-none '>
								SHOP NOW
							</button>
						</div>
						<div className=' h-full w-full '>
							<img
								src={Carousel1}
								className='w-full h-full object-cover'
								alt='...'
							/>
						</div>
					</div>
				</div>
				{/* <!-- Item 3 --> */}
				<div className='hidden duration-700 ease-in-out' data-carousel-item>
					<div className='flex w-full h-56  md:h-96'>
						<div className='flex flex-col justify-between py-9 md:py-12 items-center  h-full w-full text-center'>
							<span className='text-2xl md:text-6xl lg:text-7xl  carousetext '>
								MAKING SHOPPING
							</span>
							<span className='text-2xl md:text-6xl lg:text-7xl carousetext '>
								EXPERIENCE EASIER
							</span>

							<button
								type='button'
								className='text-white text-xl md:text-3xl w-fit h-10 md:h-16 bg-[#774936]  focus:ring-1  font-medium rounded-sm px-5 py-1 md:py-2.5 me-2 mb-2  focus:outline-none '>
								SHOP NOW
							</button>
						</div>
						<div className=' h-full w-full '>
							<img
								src={Carousel1}
								className='w-full h-full object-cover'
								alt='...'
							/>
						</div>
					</div>
				</div>
				{/* <!-- Item 4 --> */}
				<div className='hidden duration-700 ease-in-out' data-carousel-item>
					<div className='flex w-full h-56  md:h-96'>
						<div className='flex flex-col justify-between py-9 md:py-12 items-center  h-full w-full text-center'>
							<span className='text-2xl md:text-6xl lg:text-7xl  carousetext '>
								MAKING SHOPPING
							</span>
							<span className='text-2xl md:text-6xl lg:text-7xl carousetext '>
								EXPERIENCE EASIER
							</span>

							<button
								type='button'
								className='text-white text-xl md:text-3xl w-fit h-10 md:h-16 bg-[#774936]  focus:ring-1  font-medium rounded-sm px-5 py-1 md:py-2.5 me-2 mb-2  focus:outline-none '>
								SHOP NOW
							</button>
						</div>
						<div className=' h-full w-full '>
							<img
								src={Carousel1}
								className='w-full h-full object-cover'
								alt='...'
							/>
						</div>
					</div>
				</div>
				{/* <!-- Item 5 --> */}
				<div className='hidden duration-700 ease-in-out' data-carousel-item>
					<div className='flex w-full h-56  md:h-96'>
						<div className='flex flex-col justify-between py-10 md:py-12 items-center  h-full w-full text-center'>
							<span className='text-2xl md:text-6xl lg:text-7xl  carousetext '>
								WELCOME TO
							</span>
							<span className='text-2xl md:text-6xl lg:text-7xl carousetext '>
								SPARK HAIR
							</span>

							<button
								type='button'
								className='text-white text-xl md:text-3xl w-fit h-10 md:h-16 bg-[#774936]  focus:ring-1  font-medium rounded-sm px-5 py-1 md:py-2.5 me-2 mb-2  focus:outline-none '>
								SHOP NOW
							</button>
						</div>
						<div className=' h-full w-full '>
							<img
								src={Carousel1}
								className='w-full h-full object-cover'
								alt='...'
							/>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Slider indicators --> */}
			<div className='absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
				<button
					type='button'
					className='w-3 h-3 rounded-full'
					aria-current='true'
					aria-label='Slide 1'
					data-carousel-slide-to='0'></button>
				<button
					type='button'
					className='w-3 h-3 rounded-full'
					aria-current='false'
					aria-label='Slide 2'
					data-carousel-slide-to='1'></button>
				<button
					type='button'
					className='w-3 h-3 rounded-full'
					aria-current='false'
					aria-label='Slide 3'
					data-carousel-slide-to='2'></button>
				<button
					type='button'
					className='w-3 h-3 rounded-full'
					aria-current='false'
					aria-label='Slide 4'
					data-carousel-slide-to='3'></button>
				<button
					type='button'
					className='w-3 h-3 rounded-full'
					aria-current='false'
					aria-label='Slide 5'
					data-carousel-slide-to='4'></button>
			</div>
			{/* <!-- Slider controls --> */}
			<button
				type='button'
				className='absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
				data-carousel-prev>
				<span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
					<svg
						className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 6 10'>
						<path
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M5 1 1 5l4 4'
						/>
					</svg>
					<span className='sr-only'>Previous</span>
				</span>
			</button>
			<button
				type='button'
				className='absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
				data-carousel-next>
				<span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
					<svg
						className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 6 10'>
						<path
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='m1 9 4-4-4-4'
						/>
					</svg>
					<span className='sr-only'>Next</span>
				</span>
			</button>
		</div>
	);
}

export default Carousel