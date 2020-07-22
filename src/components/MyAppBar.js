import {h} from 'preact' /** @jsx h */
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {AppBar, Slide, Toolbar, useScrollTrigger, Tabs, Tab, IconButton} from '@material-ui/core'
import {Home, Menu, Event, CheckBox, CheckBoxOutlineBlank, EmojiPeople,
  Announcement, NewReleases, NotificationImportant} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1301,
    padding: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3, 0, 3)
    }
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      width: theme.spacing(154),
      margin:'auto'
    }
  },
  tab: {
    width: theme.spacing(20)
  },
  xSmall: {
    display: 'none',
    [theme.breakpoints.up(theme.spacing(51))]: {
      width: theme.spacing(20),
      display: 'initial'
    }
  },
  small: {
    display: 'none',
    [theme.breakpoints.up(theme.spacing(71))]: {
      width: theme.spacing(20),
      display: 'initial'
    }
  },
  medium: {
    display: 'none',
    [theme.breakpoints.up(theme.spacing(91))]: {
      width: theme.spacing(20),
      display: 'initial'
    }
  },
  large: {
    display: 'none',
    [theme.breakpoints.up(theme.spacing(111))]: {
      width: theme.spacing(20),
      display: 'initial'
    }
  },
  xLarge: {
    display: 'none',
    [theme.breakpoints.up(theme.spacing(131))]: {
      width: theme.spacing(20),
      display: 'initial'
    }
  },
  menu: {
    [theme.breakpoints.up(theme.spacing(131))]: {
      width: theme.spacing(20),
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
          className={classes.toolBar}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="navigation">
            <Tab icon={<Home />}
              className={classes.tab}
              // onClick={setOpen(false)}
              label="HOME" href="/" value="/" />
            <Tab icon={<NewReleases />}
              className={classes.xSmall}
              label="TAKE ACTION" href="/takeaction" value="/takeaction" />
            <Tab icon={<EmojiPeople />}
              className={classes.small}
              label="ABOUT" href="/about" value="/about" />
            <Tab icon={<Announcement />}
              className={classes.medium}
              label="NEWS" href="/news" value="/news" />
            <Tab icon={<NotificationImportant />}
              className={classes.large}
              label="ISSUES" href="/issues" value="/issues" />
            <Tab icon={<Event />}
              className={classes.xLarge}
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
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
