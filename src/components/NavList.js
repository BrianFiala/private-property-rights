import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {EmojiPeople, Email, Settings} from '@material-ui/icons'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'

const styles = {
  list: {
    overflow: 'hidden',
    marginTop: '8px'
  },
  link: {
    display: 'flex',
    height: '100%',
    width: '100%',
    padding: '8px 16px'
  },
  listItem: {
    padding: 0
  }
}

export default function NavList() {
  const {toggleDrawer} = useHeaderState()
  const {userProfile} = useAdminState()

  function onClick(event) {
    toggleDrawer(event, false)
  }

  return (
    <List style={styles.list}>
      <ListItem style={styles.listItem} component="li" button key="WhoWeAre"
        onClick={onClick}>
        <Link style={styles.link} href="/whoweare">
          <ListItemIcon><EmojiPeople aria-hidden="true" color="primary" /></ListItemIcon>
          <ListItemText primary="WHO WE ARE" />
        </Link>
      </ListItem>
      <ListItem style={styles.listItem} component="li" button key="Feedback"
        onClick={onClick}>
        <Link style={styles.link} href="/feedback">
          <ListItemIcon><Email aria-hidden="true" color="primary" /></ListItemIcon>
          <ListItemText primary="FEEDBACK" />
        </Link>
      </ListItem>
      <ListItem style={styles.listItem} component="li" button key="Admin"
        onClick={onClick}>
        <Link style={styles.link} href="/admin">
          <ListItemIcon><Settings aria-hidden="true" color="primary" /></ListItemIcon>
          <ListItemText primary="ADMIN" />
        </Link>
      </ListItem>
      <ListItem style={styles.listItem} component="li" button key="Videos"
        onClick={onClick}>
        <div style={`${userProfile ? '' : 'display: none;'}`} class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
      </ListItem>
    </List>
  )
}