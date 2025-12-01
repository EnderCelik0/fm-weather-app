import {useQuery} from '@tanstack/react-query';

export default function useSearchPlace(place) {
	return useQuery({
		queryKey: ['searchPlace', place],
		queryFn: async () => {
			if (!place || place.trim() === '') {
				return [];
			}

			const response = await fetch(
				`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(place)}`,
			);

			if (!response.ok) {
				throw new Error('API isteği başarısız');
			}

			return response.json();
		},
		enabled: !!place,
	});
}
