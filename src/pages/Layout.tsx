import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import CodePage from './CodePage'
import MainPage from './MainPage'
// MUI
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
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
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        CodeHere
                    </Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>

            <Switch>
                <Route path='/vanillajs' component={CodePage} />
                <Route path='/react' component={CodePage} />
                <Route path='/codehere'  component={MainPage} />
                <Route path='/'  component={MainPage} />
            </Switch>
        </div>
    )
}

export default Layout
