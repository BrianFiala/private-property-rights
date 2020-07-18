import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import NavList from './NavList'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Drawer, Paper} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: 280,
    transition: theme.transitions.create('position', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    width: 0,
    border: 0,
    transition: theme.transitions.create('position', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}))

export default function MyDrawer() {
  const {open, toggleDrawer} = useHeaderState()
  const classes = useStyles(useTheme())

  return (
    <Paper>
      <Drawer
        classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}}
        anchor="right"
        open={open}
        onClose={event => toggleDrawer(event, false)}
        transitionDuration={420}
        variant="persistent">
        <NavList />
      </Drawer>
    </Paper>
  )
}
