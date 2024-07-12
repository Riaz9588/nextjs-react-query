import React from 'react'
import { usePokemon } from '@/hooks/usePokemon'


function PokemonCount() {
    const { isLoading, isError, error, data, isFetching } = usePokemon()
  return (
    <div>PokemonCount: {data?.length}</div>
  )
}

export default PokemonCount