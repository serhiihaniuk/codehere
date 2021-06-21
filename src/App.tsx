import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Layout from './pages/Layout'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './utils/theme'

const App: React.FC = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Layout />
            </ThemeProvider>
        </Router>
    )
}

export default App
