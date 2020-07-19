import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {EmojiPeople, Event, NotificationImportant, Announcement, NewReleases} from '@material-ui/icons'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  list: {
    overflow: 'hidden',
    marginTop: theme.spacing(10)
  },
  link: {
    display: 'flex',
    height: '100%',
    width: '100%',
    padding: theme.spacing(1, 3, 1, 3)
  },
  listItem: {
    padding: theme.spacing(1, 0, 1, 0)
  },
  secondary: {
    color: theme.palette.secondary.main
  },
  xSmall: {
    [theme.breakpoints.up(theme.spacing(51))]: {
      display: 'none'
    }
  },
  small: {
    [theme.breakpoints.up(theme.spacing(71))]: {
      display: 'none'
    }
  },
  medium: {
    [theme.breakpoints.up(theme.spacing(91))]: {
      display: 'none'
    }
  },
  large: {
    [theme.breakpoints.up(theme.spacing(111))]: {
      display: 'none'
    }
  },
  xLarge: {
    [theme.breakpoints.up(theme.spacing(131))]: {
      display: 'none'
    }
  },
  login: {
    paddingLeft: theme.spacing(2)
  }
}))

export default function NavList() {
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()
  const classes = useStyles(useTheme())

  function onClick(event) {
    setTabValue(event.currentTarget.id)
    toggleDrawer(event, false)
  }

  return (
    <List className={classes.list}>
      <ListItem id="/takeaction" className={clsx(classes.listItem, classes.xSmall)} component="li" button key="takeaction" onClick={onClick}>
        <Link className={classes.link} href="/takeaction">
          <ListItemIcon>
            <NewReleases aria-hidden="true" color={tabValue === '/takeaction' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/takeaction' && classes.secondary} primary="TAKE ACTION" />
        </Link>
      </ListItem>
      <ListItem id="/about" className={clsx(classes.listItem, classes.small)} component="li" button key="about" onClick={onClick}>
        <Link className={classes.link} href="/about">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" color={tabValue === '/about' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/about' && classes.secondary} primary="ABOUT" />
        </Link>
      </ListItem>
      <ListItem id="/news" className={clsx(classes.listItem, classes.medium)} component="li" button key="news" onClick={onClick}>
        <Link className={classes.link} href="/news">
          <ListItemIcon>
            <Announcement aria-hidden="true" color={tabValue === '/news' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/news' && classes.secondary} primary="NEWS" />
        </Link>
      </ListItem>
      <ListItem id="/issues" className={clsx(classes.listItem, classes.large)} component="li" button key="issues" onClick={onClick}>
        <Link className={classes.link} href="/issues">
          <ListItemIcon>
            <NotificationImportant aria-hidden="true" color={tabValue === '/issues' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/issues' && classes.secondary} primary="ISSUES" />
        </Link>
      </ListItem>
      <ListItem id="/calendar" className={clsx(classes.listItem, classes.xLarge)} component="li" button key="calendar" onClick={onClick}>
        <Link className={classes.link} href="/calendar">
          <ListItemIcon>
            <Event aria-hidden="true" color={tabValue === '/calendar' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/calendar' && classes.secondary} primary="CALENDAR" />
        </Link>
      </ListItem>
    </List>
  )
}