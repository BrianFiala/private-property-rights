import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {EmojiPeople, Event, NotificationImportant, Announcement, Home} from '@material-ui/icons'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import classes from './NavList.scss'

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
    <List className={classes.list}>
      <ListItem component="li" button key="home" onClick={onClick}>
        <Link className={classes.link} href="/">
          <ListItemIcon>
            <Home aria-hidden="true" color={tabColor('/')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/' && classes.secondary} primary="HOME" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="about" onClick={onClick}>
        <Link className={classes.link} href="/about">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" color={tabColor('/about')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/about' && classes.secondary} primary="ABOUT" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="news" onClick={onClick}>
        <Link className={classes.link} href="/news">
          <ListItemIcon>
            <Announcement aria-hidden="true" color={tabColor('/news')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/news' && classes.secondary} primary="NEWS" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="issues" onClick={onClick}>
        <Link className={classes.link} href="/issues">
          <ListItemIcon>
            <NotificationImportant aria-hidden="true" color={tabColor('/issues')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/issues' && classes.secondary} primary="ISSUES" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="calendar" onClick={onClick}>
        <Link className={classes.link} href="/calendar">
          <ListItemIcon>
            <Event aria-hidden="true" color={tabColor('/calendar')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/calendar' && classes.secondary} primary="CALENDAR" />
        </Link>
      </ListItem>
    </List>
  )
}