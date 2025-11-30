const weatherFeatures = [
	{id: 1, feature: 'Feels Like', value: '18°'},
	{id: 2, feature: 'Humidity', value: '46%'},
	{id: 3, feature: 'Wind', value: '14 km/h'},
	{id: 4, feature: 'Precipitation', value: '0 mm'},
];

export default function WeatherFeatureCards() {
	return (
		<section className='grid grid-cols-2 md:grid-cols-4 gap-6'>
			{weatherFeatures.map(({feature, value}) => (
				<WeatherFeatureCard
					key={feature}
					feature={feature}
					value={value}
				/>
			))}
		</section>
	);
}

function WeatherFeatureCard({feature, value}) {
	return (
		<div className='p-5 text-start bg-neutral-800 text-neutral-200 rounded-xl space-y-6'>
			<h6 className='text-preset-6'>{feature}</h6>
			<p className='text-preset-3'>{value}</p>
		</div>
	);
}
