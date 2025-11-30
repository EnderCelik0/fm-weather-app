import {useState} from 'react';
import checkMark from '/assets/images/icon-checkmark.svg';
import chevron from '/assets/images/icon-dropdown.svg';
import {AnimatePresence, motion} from 'framer-motion';

export default function DaysDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedDay, setSelectedDay] = useState('Monday');

	function handleSelect(e, selectedDay) {
		e.stopPropagation();
		setIsOpen(false);
		setSelectedDay(selectedDay);
	}

	const options = [
		{id: 1, name: 'Monday'},
		{id: 2, name: 'Tuesday'},
		{id: 3, name: 'Wednesday'},
		{id: 4, name: 'Thursday'},
		{id: 5, name: 'Friday'},
		{id: 6, name: 'Saturday'},
		{id: 7, name: 'Sunday'},
	];

	return (
		<motion.div className=' relative z-10'>
			<motion.button
				onClick={() => setIsOpen((prev) => !prev)}
				className='bg-neutral-600 border   transition-all duration-200 px-2 gap-1 py-2 cursor-pointer  flex justify-between w-full  items-center 
						outline-none border-none rounded-xl hover:bg-neutral-700 
						
						focus-visible:ring-1 
						focus-visible:ring-offset-neutral-600 
						focus-visible:ring-offset-2 
						focus-visible:bg-neutral-700'
			>
				{selectedDay}
				<img
					src={chevron}
					alt='day select chevron'
					className={`${isOpen ? 'rotate-180' : ''} transition-all duration-200`}
				/>
			</motion.button>

			<AnimatePresence mode='wait'>
				{isOpen && (
					<motion.div
						initial={{height: 0, opacity: 1, y: 10}}
						animate={{height: 'auto', opacity: 1, y: 0}}
						exit={{height: 0, opacity: 0, y: 0}}
						className='absolute top-14 flex flex-col gap-4 border border-neutral-600 bg-neutral-800 p-2 rounded-[10px] right-0 z-10'
					>
						{options?.map((option, idx) => (
							<motion.div
								initial={{opacity: 0, x: -10}}
								animate={{opacity: 1, x: 0}}
								transition={{delay: idx * 0.05}}
							>
								<button
									key={option.id}
									onClick={(e) => handleSelect(e, option.name)}
									className='flex justify-between w-full gap-2.5 items-center  px-2 py-2.5
							outline-none border-none rounded-[10px] hover:bg-neutral-700 transition-colors duration-200 cursor-pointer
							
							focus-visible:ring-1 
							focus-visible:ring-offset-neutral-600 
							focus-visible:ring-offset-2 
							focus-visible:bg-neutral-700 
							'
								>
									<span>{option.name}</span>
									{option.name === selectedDay && <img src={checkMark} />}
								</button>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
