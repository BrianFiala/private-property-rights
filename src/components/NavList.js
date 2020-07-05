import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import HomeIcon from '@material-ui/icons/People'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'

const styles = {
  list: {
    overflow: 'hidden'
  },
  link: {
    display: 'flex',
    height: '100%',
    width: '100%'
  }
}

export default function NavList() {
  const {toggleDrawer} = useHeaderState()

  function onClick(event) {
    toggleDrawer(event, false)
  }

  return (
    <List style={styles.list}>
      <ListItem component="li" button key="Home"
        onClick={onClick}>
        <Link style={styles.link} href="/">
          <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
    </List>
  )
}