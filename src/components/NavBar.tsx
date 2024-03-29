import React from "react";

const NavBar: React.FC = () => {
	return (
		<nav className=' z-50 bg-[#774936] border-gray-200 h-20 md:h-24 py-1 md:py-4 text-white'>
			<div className=' relative z-50 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<a
					href='https://flowbite.com/'
					className='flex items-center space-x-3 rtl:space-x-reverse'>
					{/* <img
						src='https://flowbite.com/docs/images/logo.svg'
						className='h-8'
						alt='spark Logo'
					/> */}
					<span className='self-center text-2xl font-semibold whitespace-nowrap '>
						SPARK HAIR
					</span>
				</a>
				<div className='flex md:order-2'>
					<button
						type='button'
						data-collapse-toggle='navbar-search'
						aria-controls='navbar-search'
						aria-expanded='false'
						className='md:hidden text-white hover:bg-[#c99983]  focus:outline-none focus:ring-2 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1'>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 20 20'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
							/>
						</svg>
						<span className='sr-only'>Search</span>
					</button>
					<div className='relative hidden md:block'>
						<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
							<span className='sr-only'>Search icon</span>
						</div>
						<input
							type='text'
							id='search-navbar'
							className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#c99983] focus:border-[#c99983]'
							placeholder='Search...'
						/>
					</div>
					<button
						data-collapse-toggle='navbar-search'
						type='button'
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#c99983] focus:outline-none focus:ring-2 focus:ring-gray-200'
						aria-controls='navbar-search'
						aria-expanded='false'>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
				</div>
				<div
					className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
					id='navbar-search'>
					<div className='relative mt-3 md:hidden'>
						<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500 '
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='text'
							id='search-navbar'
							className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#c99983] focus:border-[#c99983] '
							placeholder='Search...'
						/>
					</div>
					<ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#774936] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 '>
						<li>
							<a
								href='/'
								className='block py-2 px-3 text-white hover:bg-[#c99983] rounded md:bg-transparent md:hover:text-[#b97d5f] md:text-white md:p-0'
								aria-current='page'>
								Home
							</a>
						</li>
						<li>
							<a
								href='/Shop'
								className='block py-2 px-3 text-white rounded hover:bg-[#c99983] md:hover:bg-transparent md:hover:text-[#b97d5f] md:p-0 '>
								Shop
							</a>
						</li>

						<li>
							<button
								id='dropdownNavbarLink'
								data-dropdown-toggle='dropdownNavbar'
								className='flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-[#c99983] md:hover:bg-transparent md:border-0 md:hover:text-[#b97d5f] md:p-0 md:w-auto '>
								Categories
								<svg
									className='w-2.5 h-2.5 ms-2.5'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 10 6'>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='m1 1 4 4 4-4'
									/>
								</svg>
							</button>
							{/* Dropdown menu */}
							<div
								id='dropdownNavbar'
								className='z-10 hidden font-normal bg-[#fef8f8] divide-y divide-gray-100 rounded-lg shadow w-44 '>
								<ul
									className='py-2 text-sm text-gray-700 '
									aria-labelledby='dropdownLargeButton'>
									<li>
										<a
											href='#'
											className='block px-4 py-2 hover:bg-gray-100 text-[#774936]'>
											Dashboard
										</a>
									</li>
									<li>
										<a
											href='#'
											className='block px-4 py-2 hover:bg-gray-100 text-[#774936]'>
											Settings
										</a>
									</li>
									<li>
										<a
											href='#'
											className='block px-4 py-2 hover:bg-gray-100 text-[#774936]'>
											Earnings
										</a>
									</li>
								</ul>
								<div className='py-1'>
									<a
										href='#'
										className='block px-4 py-2 text-sm hover:bg-gray-100 text-[#774936]'>
										Sign out
									</a>
								</div>
							</div>
						</li>

						<li>
							<a
								href='/CheckOut'
								className='block py-2 px-3 text-white rounded hover:bg-[#c99983] md:hover:bg-transparent md:hover:text-[#b97d5f] md:p-0 '>
								Checkout
							</a>
						</li>
						<li>
							<a
								href='/Myaccount'
								className='block py-2 px-3 text-white rounded hover:bg-[#c99983] md:hover:bg-transparent md:hover:text-[#b97d5f] md:p-0 '>
								My account
							</a>
						</li>
						<li>
							<a
								href='/ContactUs'
								className='block py-2 px-3 text-white rounded hover:bg-[#c99983] md:hover:bg-transparent md:hover:text-[#b97d5f] md:p-0 '>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
