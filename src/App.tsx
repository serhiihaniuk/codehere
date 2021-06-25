import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './pages/Layout'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './utils/theme'
import { PreviewContext } from './Context/Context'

const App: React.FC = () => {
    const [preview, setPreview] = useState(true)

    return (
        <Router>
            <PreviewContext.Provider
                value={{
                    preview,
                    setPreview,
                }}
            >
                <ThemeProvider theme={theme}>
                    <Layout />
                </ThemeProvider>
            </PreviewContext.Provider>
        </Router>
    )
}

export default App
