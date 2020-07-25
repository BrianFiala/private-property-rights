import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import NavList from './NavList'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {Drawer, Paper} from '@material-ui/core'
import {drawerPaper, drawerPaperClose} from './index.scss'

export default function MyDrawer() {
  const {open, toggleDrawer} = useHeaderState()

  return (
    <Paper>
      <Drawer
        classes={{paper: clsx(drawerPaper, !open && drawerPaperClose)}}
        anchor="right"
        open={open}
        onClose={event => toggleDrawer(event, false)}
        transitionDuration={420}>
        <NavList />
      </Drawer>
    </Paper>
  )
}
