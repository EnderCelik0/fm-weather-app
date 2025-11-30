import Dropdown from './ui/DaysDropdown';
import UnitsDropdown from './ui/UnitsDropdown';

export default function Navbar() {
	return (
		<nav className='flex justify-between items-center'>
			<img
				src='/assets/images/logo.svg'
				alt='brand logo'
			/>
			<UnitsDropdown/>
		</nav>
	);
}
