import React from 'react'
import { useBerries } from '@/hooks/useBerries'



function Berries() {
    const { isLoading, isError, error, data, isFetching } = useBerries()

    console.log(data)

    if (isLoading) return <div>"Loading..."</div>

    if (isError) return <div>Error: {error.message}</div>

    return (
        <ul>
            {data.map(berry => (
                <li key={berry.name}>{berry.name}</li>
            ))}
            {isFetching ? "Fetching Data" : null}

        </ul>
    )
}

export default Berries