import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePokemonSearch = ( pokemon ) => {
    return useQuery({
        queryKey: ['pokemon', pokemon],
        queryFn: () =>
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(res => res.data),
        // enabled: !!pokemon,
        retry: 1
    })
}

