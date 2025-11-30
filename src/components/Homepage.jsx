import Navbar from './Navbar';
import Button from './ui/Button';
import CountryWeatherCard from './CountryWeatherCard';
import Searchbar from './ui/Searchbar';
import WeatherFeatureCards from './WeatherFeatureCards';
import DailyForecasts from './DailyForecast';
import HourlyForecasts from '../components/HourlyForecast';

function Homepage() {
	return (
		<main className='space-y-16 '>
			<Navbar />
			<Header />
			<div className='flex flex-col md:flex-row justify-center gap-4 '>
				<Searchbar />
				<Button>Search</Button>
			</div>
			<section className='grid grid-cols-1 lg:grid-cols-3 space-x-8  '>
				<div className='lg:col-span-2 space-y-8'>
					<CountryWeatherCard />
					<WeatherFeatureCards />
					<div>
						<DailyForecasts />
					</div>
				</div>
				<div className='max-h-[678px]'>
					<HourlyForecasts />
				</div>
			</section>
		</main>
	);
}

export default Homepage;

function Header() {
	return <h2 className='text-preset-2'>How's the sky looking today?</h2>;
}
