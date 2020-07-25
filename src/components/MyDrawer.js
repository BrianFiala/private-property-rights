import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import NavList from './NavList'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {Drawer, Paper} from '@material-ui/core'
import classes from './MyDrawer.scss'

export default function MyDrawer() {
  const {open, toggleDrawer} = useHeaderState()

  return (
    <Paper>
      <Drawer
        classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}}
        anchor="right"
        open={open}
        onClose={event => toggleDrawer(event, false)}
        transitionDuration={420}>
        <NavList />
      </Drawer>
    </Paper>
  )
}
