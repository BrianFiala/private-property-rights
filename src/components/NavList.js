import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import HomeIcon from '@material-ui/icons/People'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  list: {
    overflow: 'hidden'
  },
  link: {
    display: 'flex',
    height: '100%',
    width: '100%',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
  },
  listItem: {
    padding: 0
  }
}))

export default function NavList() {
  const classes = useStyles(useTheme())
  const {toggleDrawer} = useHeaderState()

  function onClick(event) {
    toggleDrawer(event, false)
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} component="li" button key="Home"
        onClick={onClick}>
        <Link className={classes.link} href="/">
          <ListItemIcon><HomeIcon aria-hidden="true" color="primary" /></ListItemIcon>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} component="li" button key="Videos"
        onClick={onClick}>
        <Link className={classes.link} href="/videos">
          <ListItemIcon><HomeIcon aria-hidden="true" color="primary" /></ListItemIcon>
          <ListItemText primary="Videos" />
        </Link>
      </ListItem>
    </List>
  )
}