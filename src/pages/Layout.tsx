import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CodePage from './CodePage'
import MainPage from './MainPage'
// MUI
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    wrapper: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
}))

const Layout = () => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <Header />
            <Switch>
                <Route path="/vanillajs" component={CodePage} />
                <Route path="/react" component={CodePage} />
                <Route path="/codehere" component={MainPage} />
                <Route path="/" component={MainPage} />
            </Switch>
        </div>
    )
}

export default Layout
