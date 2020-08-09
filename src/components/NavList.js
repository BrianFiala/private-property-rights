import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {EmojiPeople, NotificationImportant, Announcement, Home} from '@material-ui/icons'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {list, link, secondary, primary, highContrastText} from './index.scss'

export default function NavList() {
  const {toggleDrawer, route, highContrast} = useHeaderState()

  function onClick(event) {
    toggleDrawer(event, false)
  }

  return (
    <List className={list}>
      <ListItem component="li" button key="home" onClick={onClick}>
        <Link className={link} href="/">
          <ListItemIcon>
            <Home aria-hidden="true" className={highContrast ? highContrastText : (route === '/' ? secondary : primary)} />
          </ListItemIcon>
          <ListItemText className={highContrast ? highContrastText : (route === '/' ? secondary : primary)} primary="HOME" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="about" onClick={onClick}>
        <Link className={link} href="/about">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" className={highContrast ? highContrastText : (route === '/about' ? secondary : primary)} />
          </ListItemIcon>
          <ListItemText className={highContrast ? highContrastText : (route === '/about' ? secondary : primary)} primary="ABOUT" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="topics" onClick={onClick}>
        <Link className={link} href="/topics">
          <ListItemIcon>
            <Announcement aria-hidden="true" className={highContrast ? highContrastText : (route === '/topics' ? secondary : primary)} />
          </ListItemIcon>
          <ListItemText className={highContrast ? highContrastText : (route === '/topics' ? secondary : primary)} primary="TOPICS" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="election" onClick={onClick}>
        <Link className={link} href="/election">
          <ListItemIcon>
            <NotificationImportant aria-hidden="true" className={highContrast ? highContrastText : (route === '/election' ? secondary : primary)} />
          </ListItemIcon>
          <ListItemText className={highContrast ? highContrastText : (route === '/election' ? secondary : primary)} primary="ELECTION" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="resources" onClick={onClick}>
        <Link className={link} href="/resources">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" className={highContrast ? highContrastText : (route === '/resources' ? secondary : primary)} />
          </ListItemIcon>
          <ListItemText className={highContrast ? highContrastText : (route === '/resources' ? secondary : primary)} primary="RESOURCES" />
        </Link>
      </ListItem>
    </List>
  )
}