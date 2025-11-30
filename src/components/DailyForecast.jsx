import {weatherIcons} from '../constants';

const dailyForecasts = [
	{id: 1, day: 'Tuesday', weather: 'rainy', minTemp: '20°', maxTemp: '14°'},
	{id: 2, day: 'Tuesday', weather: 'sunny', minTemp: '21°', maxTemp: '15°'},
	{id: 3, day: 'Tuesday', weather: 'fog', minTemp: '24°', maxTemp: '14°'},
	{id: 4, day: 'Tuesday', weather: 'drizzle', minTemp: '25°', maxTemp: '13°'},
	{
		id: 5,
		day: 'Tuesday',
		weather: 'partly cloudy',
		minTemp: '21°',
		maxTemp: '15°',
	},
	{
		id: 6,
		day: 'Tuesday',
		weather: 'thunderstorms',
		minTemp: '25°',
		maxTemp: '16°',
	},
	{id: 7, day: 'Tuesday', weather: 'snow', minTemp: '24°', maxTemp: '15°'},
];

export default function DailyForecasts() {
	return (
		<section className='space-y-5'>
			<h5 className='text-start text-preset-5'>Daily Forecast</h5>
			<div className='grid grid-cols-3  lg:grid-cols-7 gap-4 '>
				{dailyForecasts.map(({id, day, weather, minTemp, maxTemp}) => (
					<ForecastCard
						key={id}
						day={day}
						weather={weatherIcons[weather]}
						minTemp={minTemp}
						maxTemp={maxTemp}
					/>
				))}
			</div>
		</section>
	);
}

function ForecastCard({day, weather, minTemp, maxTemp}) {
	return (
		<div className='flex flex-col items-center gap-4 px-2.5 py-4 rounded-xl bg-neutral-800'>
			<h6 className='text-preset-6'>{day}</h6>
			<img
				src={weather}
				alt='daily weather icon'
				className='w-[60px] aspect-square'
			/>
			<div className='flex justify-between w-full'>
				<p className='text-preset-7'>{minTemp}</p>
				<p className='text-preset-7 text-neutral-200'>{maxTemp}</p>
			</div>
		</div>
	);
}
