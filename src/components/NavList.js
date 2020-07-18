import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {EmojiPeople, Email, Settings, HowToVote, Announcement, VideoLibrary} from '@material-ui/icons'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  list: {
    overflow: 'hidden',
    marginTop: theme.spacing(2)
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
  showAboveXSmall: {
    [theme.breakpoints.up(700)]: {
      display: 'none'
    }
  },
  showAboveSmall: {
    [theme.breakpoints.up(870)]: {
      display: 'none'
    }
  },
  showAboveMedium: {
    [theme.breakpoints.up(1080)]: {
      display: 'none'
    }
  },
  showAboveBig: {
    [theme.breakpoints.up(1200)]: {
      display: 'none'
    }
  },
  showAboveReallyBig: {
    [theme.breakpoints.up(1380)]: {
      display: 'none'
    }
  },
  showAboveReallyReallyBig: {
    [theme.breakpoints.up(1500)]: {
      display: 'none'
    }
  }
}))

export default function NavList() {
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()
  const {userProfile} = useAdminState()
  const classes = useStyles(useTheme())

  function onClick(event) {
    setTabValue(event.currentTarget.id)
    toggleDrawer(event, false)
  }

  return (
    <List className={classes.list}>
      <ListItem id="/takeaction" className={clsx(classes.listItem, classes.showAboveXSmall)} component="li" button key="TakeAction" onClick={onClick}>
        <Link className={classes.link} href="/takeaction">
          <ListItemIcon>
            <Announcement aria-hidden="true" color={tabValue === '/takeaction' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/takeaction' && classes.secondary} primary="TAKE ACTION" />
        </Link>
      </ListItem>
      <ListItem id="/videos" className={clsx(classes.listItem, classes.showAboveSmall)} component="li" button key="Videos" onClick={onClick}>
        <Link className={classes.link} href="/videos">
          <ListItemIcon>
            <VideoLibrary aria-hidden="true" color={tabValue === '/videos' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/videos' && classes.secondary} primary="VIDEOS" />
        </Link>
      </ListItem>
      <ListItem id="/citycouncil" className={clsx(classes.listItem, classes.showAboveMedium)} component="li" button key="CityCouncil" onClick={onClick}>
        <Link className={classes.link} href="/citycouncil">
          <ListItemIcon>
            <HowToVote aria-hidden="true" color={tabValue === '/citycouncil' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/citycouncil' && classes.secondary} primary="CITY COUNCIL" />
        </Link>
      </ListItem>
      <ListItem id="/whoweare" className={clsx(classes.listItem, classes.showAboveBig)} component="li" button key="WhoWeAre" onClick={onClick}>
        <Link className={classes.link} href="/whoweare">
          <ListItemIcon>
            <EmojiPeople aria-hidden="true" color={tabValue === '/whoweare' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/whoweare' && classes.secondary} primary="WHO WE ARE" />
        </Link>
      </ListItem>
      <ListItem id="/feedback" className={clsx(classes.listItem, classes.showAboveReallyBig)} component="li" button key="Feedback" onClick={onClick}>
        <Link className={classes.link} href="/feedback">
          <ListItemIcon>
            <Email aria-hidden="true" color={tabValue === '/feedback' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/feedback' && classes.secondary} primary="FEEDBACK" />
        </Link>
      </ListItem>
      <ListItem id="/admin" className={clsx(classes.listItem, classes.showAboveReallyReallyBig)} component="li" button key="Admin" onClick={onClick}>
        <Link className={classes.link} href="/admin">
          <ListItemIcon>
            <Settings aria-hidden="true" color={tabValue === '/admin' ? 'secondary' : 'primary'} />
          </ListItemIcon>
          <ListItemText className={tabValue === '/admin' && classes.secondary} primary="ADMIN" />
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} component="li" button key="SignIn" onClick={onClick}>
        <div className={`${userProfile ? '' : 'display: none;'}`} class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
      </ListItem>
    </List>
  )
}