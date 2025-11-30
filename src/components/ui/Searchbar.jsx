import searchIcon from '/assets/images/icon-search.svg';

function Searchbar({placeholder, className, ...props}) {
	return (
		<div
			tabIndex={0}
			className='flex gap-4 placeholder:text-preset-5 placeholder:text-neutral-200 bg-neutral-800 focus-visible:ring-2 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900 hover:bg-neutral-700 focus-visible:ring-neutral-0 md:w-[526px] max-w-full rounded-xl pl-6 pr-2 py-4 text-neutral-200 border-0 outline-0 transition-all duration-200 '
		>
			<img
				src={searchIcon}
				alt='searchbar search icon'
				className='w-5 aspect-square shrink-0'
			/>
			<label
				htmlFor={props.name}
				className='sr-only'
			>
				Search City
			</label>
			<input
				type='text'
				name={props.name}
				placeholder={
					placeholder ? placeholder : 'Search for a city, e.g., New York'
				}
				className={`w-full outline-0 border-0 ${className}`}
				{...props}
			/>
		</div>
	);
}

export default Searchbar;
