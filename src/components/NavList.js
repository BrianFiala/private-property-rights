import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {EmojiPeople, Event, NotificationImportant, Announcement, Home} from '@material-ui/icons'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {list, link, secondary} from './index.scss'

export default function NavList() {
  const {toggleDrawer, tabValue} = useHeaderState()

  function onClick(event) {
    toggleDrawer(event, false)
  }

  const tabColor = (thisTabValue = '') => {
    if (thisTabValue === tabValue) return 'secondary'
    return 'primary'
  }

  return (
    <List className={list}>
      <ListItem component="li" button key="home" onClick={onClick}>
        <Link className={link} href="/">
          <ListItemIcon>
            <Home aria-hidden="true" color={tabColor('/')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/' && secondary} primary="HOME" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="about" onClick={onClick}>
        <Link className={link} href="/about">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" color={tabColor('/about')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/about' && secondary} primary="ABOUT" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="news" onClick={onClick}>
        <Link className={link} href="/news">
          <ListItemIcon>
            <Announcement aria-hidden="true" color={tabColor('/news')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/news' && secondary} primary="NEWS" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="issues" onClick={onClick}>
        <Link className={link} href="/issues">
          <ListItemIcon>
            <NotificationImportant aria-hidden="true" color={tabColor('/issues')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/issues' && secondary} primary="ISSUES" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="calendar" onClick={onClick}>
        <Link className={link} href="/calendar">
          <ListItemIcon>
            <Event aria-hidden="true" color={tabColor('/calendar')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/calendar' && secondary} primary="CALENDAR" />
        </Link>
      </ListItem>
    </List>
  )
}