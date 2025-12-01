import {motion, AnimatePresence} from 'motion/react';
import {useState} from 'react';

const UNIT_MAPPINGS = {
	metric: {
		temp: 'celcius',
		windSpeed: 'kmh',
		precipitation: 'mm',
	},
	imperial: {
		temp: 'fahrenheit',
		windSpeed: 'mph',
		precipitation: 'in',
	},
};

export default function UnitsDropdown() {
	const [isOpen, setIsOpen] = useState(false);

	const [units, setUnits] = useState({
		unitType: 'metric',
		temp: 'celcius',
		windSpeed: 'kmh',
		precipitation: 'mm',
	});

	function changeUnitType() {
		const newUnitType = units.unitType === 'imperial' ? 'metric' : 'imperial';
		setUnits((prev) => ({
			...prev,
			unitType: newUnitType,
			...UNIT_MAPPINGS[newUnitType],
		}));
	}

	return (
		<div className='relative px-4 py-3 bg-neutral-800 rounded-xl *:cursor-pointer'>
			<button
				className='flex gap-2.5 items-center'
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<img
					src='/assets/images/icon-units.svg'
					alt='units dropdown icon'
				/>
				<p className='text-preset-7'>Units</p>
				<img
					src='/assets/images/icon-dropdown.svg'
					alt='unit dropdown icon'
					className={`${isOpen ? 'rotate-180' : ''} transition-all duration-200`}
				/>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{height: 0, opacity: 0}}
						animate={{height: 'auto', opacity: 1}}
						exit={{height: 0, opacity: 0}}
						className='absolute right-0 w-56 py-1.5 px-2 top-14 bg-neutral-800 border border-neutral-600 rounded-xl flex flex-col gap-1 text-left z-20'
					>
						<button
							className='text-preset-7 pl-1 py-2.5 cursor-pointer rounded-lg text-left'
							onClick={() => changeUnitType(units.unitType)}
						>
							{units.unitType === 'metric'
								? 'Switch to Imperial'
								: 'Switch to Metric'}
						</button>

						<UnitSection
							title='Temperature'
							options={[
								{label: 'Celsius (°C)', value: 'celcius'},
								{label: 'Fahrenheit (°F)', value: 'fahrenheit'},
							]}
							selectedValue={units.temp}
							onSelect={(value) => setUnits((prev) => ({...prev, temp: value}))}
							showBorder={true}
						/>

						<UnitSection
							title='Wind Speed'
							options={[
								{label: 'km/h', value: 'kmh'},
								{label: 'mph', value: 'mph'},
							]}
							selectedValue={units.windSpeed}
							onSelect={(value) =>
								setUnits((prev) => ({...prev, windSpeed: value}))
							}
							showBorder={true}
						/>

						<UnitSection
							title='Precipitation'
							options={[
								{label: 'Millimeters (mm)', value: 'mm'},
								{label: 'Inches (in)', value: 'in'},
							]}
							selectedValue={units.precipitation}
							onSelect={(value) =>
								setUnits((prev) => ({...prev, precipitation: value}))
							}
							showBorder={false}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

function UnitSection({
	title,
	options,
	selectedValue,
	onSelect,
	showBorder = false,
}) {
	return (
		<section className='flex flex-col gap-2'>
			<h5 className='text-preset-8 text-neutral-300 select-none'>{title}</h5>
			<div
				className={`flex flex-col gap-1 text-left *:cursor-pointer ${showBorder ? 'border-b border-b-neutral-600' : ''}`}
			>
				{options.map((option) => (
					<button
						key={option.value}
						onClick={() => onSelect(option.value)}
						className='text-preset-7 flex justify-between  text-left  px-2 py-2.5 hover:bg-neutral-700 rounded-lg
						
						focus-visible:ring-1 
						focus-visible:ring-offset-neutral-600 
						focus-visible:ring-offset-2 
						focus-visible:bg-neutral-700
						'
					>
						<div className='flex w-full justify-between items-center'>
							<p className='text-preset-7'>{option.label}</p>
							{selectedValue === option.value && (
								<img
									src='/assets/images/icon-checkmark.svg'
									alt='unit selected icon'
								/>
							)}
						</div>
					</button>
				))}
			</div>
		</section>
	);
}
