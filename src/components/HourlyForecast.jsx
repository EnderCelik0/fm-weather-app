import {weatherIcons} from '../constants';
import DaysDropdown from './ui/DaysDropdown';
import {AnimatePresence, motion} from 'motion/react';

const hourlyForecasts = [
	{id: 1, hour: '3 PM', weather: 'rainy', minTemp: '20°'},
	{id: 2, hour: '4 PM', weather: 'sunny', minTemp: '21°'},
	{id: 3, hour: '5 PM', weather: 'fog', minTemp: '24°'},
	{id: 4, hour: '6 PM', weather: 'drizzle', minTemp: '25°'},
	{
		id: 5,
		hour: '7 PM',
		weather: 'partly cloudy',
		minTemp: '21°',
	},
	{
		id: 6,
		hour: '8 PM',
		weather: 'thunderstorms',
		minTemp: '25°',
	},
	{id: 7, hour: '9 PM', weather: 'snow', minTemp: '24°'},
	{id: 8, hour: '10 PM', weather: 'snow', minTemp: '24°'},
	{id: 9, hour: '11 PM', weather: 'snow', minTemp: '24°'},
	{id: 10, hour: '12 PM', weather: 'snow', minTemp: '24°'},
	{id: 11, hour: '1 AM', weather: 'snow', minTemp: '24°'},
	{id: 12, hour: '2 AM', weather: 'snow', minTemp: '24°'},
	{id: 13, hour: '2 AM', weather: 'snow', minTemp: '24°'},
	{id: 14, hour: '3 AM', weather: 'snow', minTemp: '24°'},
];

export default function HourlyForecasts() {
	const scrollbarStyles =
		'[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-neutral-70 [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-neutral-600';

	return (
		<section className='overflow-hidden h-full rounded-[20px]'>
			<div
				className={`${scrollbarStyles} max-h-full overflow-y-auto  bg-neutral-800  p-6 space-y-4  rounded-[20px] `}
			>
				<div className='flex justify-between items-center '>
					<h5 className='text-preset-5'>Hourly Forecast</h5>
					<DaysDropdown />
				</div>
				<AnimatePresence mode='wait'>
					<div className={`flex flex-col gap-4  overflow-hidden `}>
						{hourlyForecasts.map(({id, hour, weather, minTemp}, idx) => (
							<HourlyForecast
								idx={idx}
								key={id}
								hour={hour}
								weather={weatherIcons[weather]}
								minTemp={minTemp}
							/>
						))}
					</div>
				</AnimatePresence>
			</div>
		</section>
	);
}

function HourlyForecast({weather, hour, minTemp, idx}) {
	return (
		<motion.div
			initial={{opacity: 0, x: -10}}
			animate={{opacity: 1, x: 0}}
			transition={{delay: idx * 0.075}}
			className='bg-neutral-700 flex w-full justify-between  rounded-lg border border-neutral-600 py-2.5 px-4 items-center'
		>
			<div className='space-x-2 flex items-center'>
				<img
					src={weather}
					alt='hourly weather icon'
					className='w-10 aspect-square shrink-0'
				/>
				<p className='text-preset-5-medium'>{hour}</p>
			</div>
			<p className='text-preset-7'>{minTemp}</p>
		</motion.div>
	);
}
