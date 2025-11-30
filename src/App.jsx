import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Homepage from './components/Homepage';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<main className='bg-neutral-900 px-28 pb-20 pt-12 text-center text-neutral-0 min-h-screen'>
				<Homepage />
			</main>
		</QueryClientProvider>
	);
}
