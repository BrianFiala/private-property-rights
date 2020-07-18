import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {EmojiPeople, Email, HowToVote, Announcement, VideoLibrary} from '@material-ui/icons'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  list: {
    overflow: 'hidden',
    marginTop: theme.spacing(9)
  },
  link: {
    display: 'flex',
    height: '100%',
    width: '100%',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
  },
  listItem: {
    padding: `${theme.spacing(1)}px 0`
  },
  secondary: {
    color: theme.palette.secondary.main
  },
  xSmall: {
    [theme.breakpoints.up(700)]: {
      display: 'none'
    }
  },
  small: {
    [theme.breakpoints.up(870)]: {
      display: 'none'
    }
  },
  medium: {
    [theme.breakpoints.up(1080)]: {
      display: 'none'
    }
  },
  large: {
    [theme.breakpoints.up(1200)]: {
      display: 'none'
    }
  },
  xLarge: {
    [theme.breakpoints.up(1380)]: {
      display: 'none'
    }
  },
  xxLarge: {
    [theme.breakpoints.up(1500)]: {
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
      <ListItem id="/takeaction" className={clsx(classes.listItem, classes.xSmall)} component="li" button key="TakeAction" onClick={onClick}>
        <Link className={classes.link} href="/takeaction">
          <ListItemIcon>
            <Announcement aria-hidden="true" color={tabValue === '/takeaction' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/takeaction' && classes.secondary} primary="TAKE ACTION" />
        </Link>
      </ListItem>
      <ListItem id="/videos" className={clsx(classes.listItem, classes.small)} component="li" button key="Videos" onClick={onClick}>
        <Link className={classes.link} href="/videos">
          <ListItemIcon>
            <VideoLibrary aria-hidden="true" color={tabValue === '/videos' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/videos' && classes.secondary} primary="VIDEOS" />
        </Link>
      </ListItem>
      <ListItem id="/citycouncil" className={clsx(classes.listItem, classes.medium)} component="li" button key="CityCouncil" onClick={onClick}>
        <Link className={classes.link} href="/citycouncil">
          <ListItemIcon>
            <HowToVote aria-hidden="true" color={tabValue === '/citycouncil' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/citycouncil' && classes.secondary} primary="CITY COUNCIL" />
        </Link>
      </ListItem>
      <ListItem id="/whoweare" className={clsx(classes.listItem, classes.large)} component="li" button key="WhoWeAre" onClick={onClick}>
        <Link className={classes.link} href="/whoweare">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" color={tabValue === '/whoweare' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/whoweare' && classes.secondary} primary="WHO WE ARE" />
        </Link>
      </ListItem>
      <ListItem id="/feedback" className={clsx(classes.listItem, classes.xLarge)} component="li" button key="Feedback" onClick={onClick}>
        <Link className={classes.link} href="/feedback">
          <ListItemIcon>
            <Email aria-hidden="true" color={tabValue === '/feedback' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/feedback' && classes.secondary} primary="FEEDBACK" />
        </Link>
      </ListItem>
      <ListItem className={clsx(classes.listItem, classes.login)} component="li" button key="SignIn" onClick={onClick}>
        <div class="g-signin2"
          data-onsuccess="onSignIn"
          data-theme="dark" data-longtitle="true"
          data-height="48" data-width="248" />
        <script async src="https://apis.google.com/js/platform.js" />
      </ListItem>
    </List>
  )
}