import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {EmojiPeople, Event, NotificationImportant, Announcement, Home} from '@material-ui/icons'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {list, link, secondary, primary} from './index.scss'

export default function NavList() {
  const {toggleDrawer, route} = useHeaderState()

  function onClick(event) {
    toggleDrawer(event, false)
  }

  return (
    <List className={list}>
      <ListItem component="li" button key="home" onClick={onClick}>
        <Link className={link} href="/">
          <ListItemIcon>
            <Home aria-hidden="true" className={route === '/' ? secondary : primary} />
          </ListItemIcon>
          <ListItemText className={route === '/' ? secondary : primary} primary="HOME" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="about" onClick={onClick}>
        <Link className={link} href="/about">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" className={route === '/about' ? secondary : primary} />
          </ListItemIcon>
          <ListItemText className={route === '/about' ? secondary : primary} primary="ABOUT" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="gethelp" onClick={onClick}>
        <Link className={link} href="/gethelp">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" className={route === '/gethelp' ? secondary : primary} />
          </ListItemIcon>
          <ListItemText className={route === '/gethelp' ? secondary : primary} primary="GET HELP" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="news" onClick={onClick}>
        <Link className={link} href="/news">
          <ListItemIcon>
            <Announcement aria-hidden="true" className={route === '/news' ? secondary : primary} />
          </ListItemIcon>
          <ListItemText className={route === '/news' ? secondary : primary} primary="NEWS" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="city" onClick={onClick}>
        <Link className={link} href="/city">
          <ListItemIcon>
            <NotificationImportant aria-hidden="true" className={route === '/city' ? secondary : primary} />
          </ListItemIcon>
          <ListItemText className={route === '/city' ? secondary : primary} primary="CITY" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="calendar" onClick={onClick}>
        <Link className={link} href="/calendar">
          <ListItemIcon>
            <Event aria-hidden="true" className={route === '/calendar' ? secondary : primary} />
          </ListItemIcon>
          <ListItemText className={route === '/calendar' ? secondary : primary} primary="CALENDAR" />
        </Link>
      </ListItem>
    </List>
  )
}