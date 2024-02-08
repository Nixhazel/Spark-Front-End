import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Login from "../components/myAccount/Login";
import Signup from "../components/myAccount/Signup";

const MyAccount: React.FC = () => {
	return (
		<>
			<NavBar />
			<section className='bg-[#fef8f8] flex flex-col items-center justify-center w-full '>
				<h1 className=' font-bold text-[#774936] text-xl md:text-3xl w-[95%] md:w-3/4 px-4 md:px-8  py-5 md:py-10'>
					My account
				</h1>
				<article className='flex flex-wrap md:flex-nowrap gap-8 justify-between items-start w-[95%] md:w-3/4'>
					<Login />
					<Signup />
				</article>
			</section>
			<Footer />
		</>
	);
};

export default MyAccount;
