import React from 'react'
import { usePokemon } from '@/hooks/usePokemon'

function Pokemon() {
    const { isLoading, isError, error, data, isFetching } = usePokemon()

    console.log(data) 

    if (isLoading) return <div>"Loading..."</div>

    if (isError) return <div>Error: {error.message}</div>

    return (
        <ul>
            {data.map(pokemon => (
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
            {isFetching ? "Fetching Data" : null}

        </ul>
    )
}

export default Pokemon