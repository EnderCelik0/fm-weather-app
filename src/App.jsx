import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from './components/Homepage';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Homepage />
		</QueryClientProvider>
	);
}
