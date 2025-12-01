import {useState} from 'react';
import searchIcon from '/assets/images/icon-search.svg';
import {motion, AnimatePresence} from 'motion/react';
import {scrollbarStyles} from '../../constants';
import useSearchPlace from '../../queries/useSearchPlace';
import Button from '../ui/Button';
import {useDebounce} from '@uidotdev/usehooks';

function Searchbar({placeholder, className, ...props}) {
	const [loading, setLoading] = useState(true);
	const [place, setPlace] = useState('');
	const debouncedPlace = useDebounce(place, 400);

	const {
		status: searchStatus,
		error,
		data: searchData,
	} = useSearchPlace(debouncedPlace);

	console.log(searchData);

	function handleSearch(e) {
		e.preventDefault();
	}
	return (
		<div className=' md:w-[526px] max-w-full'>
			<form
				className='flex flex-col lg:flex-row gap-4'
				onSubmit={(e) => handleSearch(e)}
			>
				<div
					tabIndex={0}
					className='flex gap-4 placeholder:text-preset-5 placeholder:text-neutral-200 bg-neutral-800 focus-visible:ring-2 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900 hover:bg-neutral-700 focus-visible:ring-neutral-0 w-full  pl-6 pr-2 py-4 text-neutral-200 border-0 outline-0 transition-all duration-200 rounded-xl relative'
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
						onChange={(e) => setPlace(e.target.value)}
					/>
					<SearchResultDropdown
						results={searchData?.results}
						status={searchStatus}
					/>
				</div>
				<Button>Search</Button>
			</form>
		</div>
	);
}

export default Searchbar;

function SearchResultDropdown({results, status}) {
	console.log(status);

	return (
		<AnimatePresence>
			{status !== 'pending' && (
				<motion.div
					initial={{height: 0, opacity: 0}}
					animate={{height: 'auto', opacity: 1}}
					exit={{height: 0, opacity: 0}}
					className='absolute right-0  top-16 bg-neutral-800 border border-neutral-600 rounded-xl   gap-1 text-left z-20  w-full overflow-hidden '
				>
					<div
						className={`${scrollbarStyles} overflow-y-auto h-full *:cursor-pointer max-h-51 py-1.5 flex flex-col px-2`}
					>
						{status === 'pending' ? (
							<div className='flex gap-2.5 items-center justify-start w-full p-1'>
								<img
									src={'/assets/images/icon-loading.svg'}
									alt='loading search results'
									className='animate-spin'
								/>
								<p>Search in progress</p>
							</div>
						) : (
							results?.map((result) => (
								<button
									key={result.id}
									className='text-preset-7 flex justify-between    px-2 py-2.5 hover:bg-neutral-700 rounded-lg w-full
						
								focus-visible:ring-1 
								focus-visible:ring-offset-neutral-600 
								focus-visible:ring-offset-2 
								focus-visible:bg-neutral-700
								'
								>
									{result.name}
								</button>
							))
						)}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
