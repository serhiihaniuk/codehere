import React from 'react'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp'

import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 700,
        margin: '50px auto',
    },
})
const Menu = () => {
    const classes = useStyles()

    return (
        <>
            {' '}
            <Paper className={classes.root}>
                <MenuList>
                    <MenuItem>
                        <NavLink to="/vanillajs">
                            <ListItemIcon>
                                <DoubleArrowSharpIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">
                                Blank template
                            </Typography>
                        </NavLink>
                    </MenuItem>

                    <MenuItem>
                        <NavLink to="/react">
                            <ListItemIcon>
                                <DoubleArrowSharpIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">
                                React template
                            </Typography>{' '}
                        </NavLink>
                    </MenuItem>
                </MenuList>
            </Paper>
            <Paper className={classes.root}></Paper>
        </>
    )
}

export default Menu
