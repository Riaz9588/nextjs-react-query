import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />

      </QueryClientProvider>
    </div>
  )

}

