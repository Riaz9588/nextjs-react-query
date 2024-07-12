import React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Pokemon from '@/components/Pokemon'
import PokemonCount from '@/components/PokemonCount';
import Berries from '@/components/Berries';
import PokemonSearch from '@/components/PokemonSearch';


function ReactQuery() {

    return (
        <>
            <PokemonSearch/>
            <PokemonCount/>
            <Pokemon/>
            <Berries/>


            <ReactQueryDevtools />
        </>
    )
}

export default ReactQuery