import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ProfileModule, SearchModule } from './modules'

const queryClient = new QueryClient()

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SearchModule />
                <ProfileModule />
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App
