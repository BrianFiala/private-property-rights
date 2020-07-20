import {h} from 'preact' /** @jsx h */
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
  secondary: {
    color: theme.palette.secondary.main
  },
  xSmall: {
    padding: theme.spacing(1, 2, 1, 2),
    [theme.breakpoints.up(theme.spacing(51))]: {
      display: 'none'
    }
  },
  small: {
    padding: theme.spacing(1, 2, 1, 2),
    [theme.breakpoints.up(theme.spacing(71))]: {
      display: 'none'
    }
  },
  medium: {
    padding: theme.spacing(1, 2, 1, 2),
    [theme.breakpoints.up(theme.spacing(91))]: {
      display: 'none'
    }
  },
  large: {
    padding: theme.spacing(1, 2, 1, 2),
    [theme.breakpoints.up(theme.spacing(111))]: {
      display: 'none'
    }
  },
  xLarge: {
    padding: theme.spacing(1, 2, 1, 2),
    [theme.breakpoints.up(theme.spacing(131))]: {
      display: 'none'
    }
  }
}))

export default function NavList() {
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()
  const classes = useStyles(useTheme())

  function onClick(event) {
    setTabValue(event.currentTarget.id)
    toggleDrawer(event, false)
  }

  const tabColor = (thisTabValue = '') => {
    if (thisTabValue === tabValue) return 'secondary'
    return 'primary'
  }

  return (
    <List className={classes.list}>
      <ListItem id="/takeaction" className={classes.xSmall} component="li" button key="takeaction" onClick={onClick}>
        <Link className={classes.link} href="/takeaction">
          <ListItemIcon>
            <NewReleases aria-hidden="true" color={tabColor('/takeaction')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/takeaction' && classes.secondary} primary="TAKE ACTION" />
        </Link>
      </ListItem>
      <ListItem id="/about" className={classes.small} component="li" button key="about" onClick={onClick}>
        <Link className={classes.link} href="/about">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" color={tabColor('/about')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/about' && classes.secondary} primary="ABOUT" />
        </Link>
      </ListItem>
      <ListItem id="/news" className={classes.medium} component="li" button key="news" onClick={onClick}>
        <Link className={classes.link} href="/news">
          <ListItemIcon>
            <Announcement aria-hidden="true" color={tabColor('/news')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/news' && classes.secondary} primary="NEWS" />
        </Link>
      </ListItem>
      <ListItem id="/issues" className={classes.large} component="li" button key="issues" onClick={onClick}>
        <Link className={classes.link} href="/issues">
          <ListItemIcon>
            <NotificationImportant aria-hidden="true" color={tabColor('/issues')} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/issues' && classes.secondary} primary="ISSUES" />
        </Link>
      </ListItem>
      <ListItem id="/calendar" className={classes.xLarge} component="li" button key="calendar" onClick={onClick}>
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