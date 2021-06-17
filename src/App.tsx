import React from 'react'
import Layout from './pages/Layout'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './utils/theme'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    )
}

export default App
