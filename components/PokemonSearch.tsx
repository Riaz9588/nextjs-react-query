import { usePokemonSearch } from '@/hooks/usePokemonSearch'
import React, { useState } from 'react'
import { useDebounce } from 'use-debounce';

function PokemonSearch() {
    const [pokemon, setPokemon] = useState('')
    const [value] = useDebounce(pokemon, 1000);

    const { isLoading, isError, error, data, isInitialLoading } = usePokemonSearch(value)

    return (
        <div style={{marginBottom: '20px'}}>
            <input placeholder='Enter pokemon name' type="text" onChange={e => setPokemon(e.target.value)} />
            {
                isLoading ? ("Loading...") : isError ? (`Error-404: Pokemon Not Found!`) : <img src={data.sprites?.front_default} alt="" />       
            }
        </div>
    )
}

export default PokemonSearch