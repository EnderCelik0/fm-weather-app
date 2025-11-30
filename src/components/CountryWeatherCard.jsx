export default function CountryWeatherCard() {
	return (
		<section
			className='
			md:bg-[url(/assets/images/bg-today-large.svg)] 
		bg-[url(/assets/images/bg-today-small.svg)] 
		bg-cover w-full rounded-[20px] py-20 px-6 '
		>
			<div className='flex md:flex-row flex-col  justify-between items-center text-neutral-0'>
				<div className='text-start space-y-3'>
					<h6 className='text-preset-4'>Berlin, Germany</h6>
					<p className='text-preset-6 opacity-80'>Tuesday, Aug 5, 2025</p>
				</div>
				<div className='flex gap-5 items-center'>
					<img
						src='/assets/images/icon-sunny.webp'
						alt={`weather icon`}
						className='w-32 aspect-square shrink-0'
					/>
					<h1 className='text-preset-1 '>20°</h1>
				</div>
			</div>
		</section>
	);
}
