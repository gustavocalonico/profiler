import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SearchComponent } from './modules/search'

const queryClient = new QueryClient()

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <SearchComponent />
            </div>
        </QueryClientProvider>
    )
}

export default App
