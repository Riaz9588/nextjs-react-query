import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePokemon = () => {
    return useQuery({
        queryKey: ['pokemons'],
        queryFn: () =>
            axios
                .get('https://pokeapi.co/api/v2/pokemon')
                .then(res => res.data.results),
                
        // refetchOnWindowFocus: false,
        // staleTime: 2000,
        // cacheTime: 5000, //It is used for caching data for specific minutes
    })
}
