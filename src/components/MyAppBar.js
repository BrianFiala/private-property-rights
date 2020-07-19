import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {AppBar, Slide, Toolbar, useScrollTrigger, Tabs, Tab, IconButton} from '@material-ui/core'
import {Home, Menu, Event, CheckBox, CheckBoxOutlineBlank, EmojiPeople,
  Announcement, NewReleases, NotificationImportant} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1301,
    padding: theme.spacing(0, 3, 0, 3)
  },
  toolbar: {    
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      width: theme.spacing(154),
      margin:'auto'
    }
  },
  tab: {
    display: 'none',
    width: '160px'
  },
  adminMode: {
    marginLeft: theme.spacing(2)
  },
  persist: {
    display: 'initial'
  },
  xSmall: {
    [theme.breakpoints.up(theme.spacing(51))]: {
      display: 'initial'
    }
  },
  small: {
    [theme.breakpoints.up(theme.spacing(71))]: {
      display: 'initial'
    }
  },
  medium: {
    [theme.breakpoints.up(theme.spacing(91))]: {
      display: 'initial'
    }
  },
  large: {
    [theme.breakpoints.up(theme.spacing(111))]: {
      display: 'initial'
    }
  },
  xLarge: {
    [theme.breakpoints.up(theme.spacing(131))]: {
      display: 'initial'
    }
  },
  menu: {
    [theme.breakpoints.up(theme.spacing(131))]: {
      display: 'none'
    }
  }
}))

export default function MyAppBar() {
  const classes = useStyles(useTheme())
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()
  const {userProfile, toggleAdminMode, adminModeEnabled} = useAdminState()
  const trigger = useScrollTrigger({threshold: 32})

  const handleChange = (event, newValue) => {
    event.preventDefault()
    if (newValue !== 'tabNoHighlight') {
      setTabValue(newValue)
    }
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        color="primary"
        className={classes.appBar}>
        <Toolbar
          disableGutters
          className={classes.toolbar}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="navigation"
            tabItemContainerStyle={{width: '160px'}}>
            <Tab icon={<Home />}
              className={clsx(classes.tab, classes.persist)}
              label="HOME" href="/" value="/" />
            <Tab icon={<NewReleases />}
              className={clsx(classes.tab, classes.xSmall)}
              label="TAKE ACTION" href="/takeaction" value="/takeaction" />
            <Tab icon={<EmojiPeople />}
              className={clsx(classes.tab, classes.small)}
              label="ABOUT" href="/about" value="/about" />
            <Tab icon={<Announcement />}
              className={clsx(classes.tab, classes.medium)}
              label="NEWS" href="/news" value="/news" />
            <Tab icon={<NotificationImportant />}
              className={clsx(classes.tab, classes.large)}
              label="ISSUES" href="/issues" value="/issues" />
            <Tab icon={<Event />}
              className={clsx(classes.tab, classes.xLarge)}
              label="CALENDAR" href="/calendar" value="/calendar" />
            {userProfile && (
              <Tab
                label="ADMIN"
                onClick={toggleAdminMode}
                aria-label="toggle admin mode"
                value="tabNoHighlight"
                icon={adminModeEnabled
                  ? <CheckBox aria-hidden="true" />
                  : <CheckBoxOutlineBlank aria-hidden="true" />} />
            )}
          </Tabs>
          <IconButton
            className={classes.menu}
            edge="end"
            color="secondary"
            aria-label="expand menu"
            onClick={event => toggleDrawer(event)}
            onKeyDown={event => toggleDrawer(event)}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
