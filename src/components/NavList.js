import {h} from 'preact' /** @jsx h */
import { useEffect } from 'preact/hooks'
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
    width: '100%',
    padding: '8px 18px' // TODO: use consts pulled from theme
  },
  listItem: {
    padding: 0
  }
}

export default function NavList() {
  const {toggleDrawer} = useHeaderState()

  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.setAttribute('src', 'https://apis.google.com/js/platform.js')
    document.body.appendChild(scriptTag)
  }, [])

  function onClick(event) {
    toggleDrawer(event, false)
  }

  return (
    <List style={styles.list}>
      <ListItem style={styles.listItem} component="li" button key="Home"
        onClick={onClick}>
        <Link style={styles.link} href="/">
          <ListItemIcon><HomeIcon aria-hidden="true" color="primary" /></ListItemIcon>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem style={styles.listItem} component="li" button key="Videos"
        onClick={onClick}>
        <Link style={styles.link} href="/videos">
          <ListItemIcon><HomeIcon aria-hidden="true" color="primary" /></ListItemIcon>
          <ListItemText primary="Videos" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="Sign In"
        onClick={onClick}>
        <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
      </ListItem>
    </List>
  )
}