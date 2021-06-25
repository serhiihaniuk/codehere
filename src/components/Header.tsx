import React, { useContext, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ListItemIcon, MenuItem } from '@material-ui/core'
import { PreviewContext } from '../Context/Context'
import Menu from '@material-ui/core/Menu'
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp'

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
}))

const Header = () => {
    const classes = useStyles()
    const { setPreview, preview } = useContext(PreviewContext)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const location = useLocation()
    const showBtn =
        location.pathname === '/vanillajs' || location.pathname === '/react'

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        CodeHere
                    </Typography>
                    {showBtn && (
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                setPreview &&
                                    setPreview((prev) => {
                                        return !prev
                                    })
                            }}
                        >
                            {preview ? 'Hide Preview' : 'ShowPreview'}
                        </Button>
                    )}
                </Toolbar>
            </AppBar>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <NavLink to="/vanillajs">
                        <ListItemIcon>
                            <DoubleArrowSharpIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">
                            Blank template
                        </Typography>
                    </NavLink>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <NavLink to="/react">
                        <ListItemIcon>
                            <DoubleArrowSharpIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">
                            React template
                        </Typography>{' '}
                    </NavLink>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Header
