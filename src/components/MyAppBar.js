import {h} from 'preact' /** @jsx h */
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {AppBar, Slide, Toolbar, useScrollTrigger, Tabs, Tab, IconButton, Typography, Button} from '@material-ui/core'
import {Home, Menu, Event, CheckBox, CheckBoxOutlineBlank, EmojiPeople,
  Announcement, NewReleases, NotificationImportant} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1,
    width: '100vw',
    flexDirection: 'row',
  },
  spacer: {
    padding: theme.spacing(1, 2, 1, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 3, 2, 3)
    },
    margin: 'auto',
    maxWidth: '1440px',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    marginLeft: theme.spacing(3)
  },
  tab: {
    display: 'none',
    [theme.breakpoints.up(theme.spacing(98))]: {
      width: theme.spacing(12),
      minWidth: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  menu: {
    [theme.breakpoints.up(theme.spacing(98))]: {
      marginLeft: theme.spacing(2),
      width: theme.spacing(10),
      display: 'none'
    }
  }
}))

export default function MyAppBar() {
  const classes = useStyles(useTheme())
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()
  const {userProfile, toggleAdminMode, adminModeEnabled} = useAdminState()

  const handleChange = (event, newValue) => {
    event.preventDefault()
    if (newValue !== 'tabNoHighlight') {
      setTabValue(newValue)
    }
  }

  return (
    <AppBar elevation={0} color="primary" className={classes.appBar}>
      <div className={classes.spacer}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="navigation">
          <Tab className={classes.tab} label="HOME" href="/" value="/" />
          <Tab className={classes.tab} label="ABOUT" href="/about" value="/about" />
          <Tab className={classes.tab} label="NEWS" href="/news" value="/news" />
          <Tab className={classes.tab} label="ISSUES" href="/issues" value="/issues" />
          <Tab className={classes.tab} label="CALENDAR" href="/calendar" value="/calendar" />
          {userProfile && (
            <Tab label="ADMIN" value="tabNoHighlight"
              onClick={toggleAdminMode} aria-label="toggle admin mode"
              icon={adminModeEnabled
                ? <CheckBox aria-hidden="true" />
                : <CheckBoxOutlineBlank aria-hidden="true" />} />
          )}
        </Tabs>
        <Button className={classes.button}
          component="link" variant="outlined" color="inherit"
          size="medium" href="/takeaction">
          Take Action
        </Button>
        <IconButton
          className={classes.menu}
          edge="end"
          color="primary.contrastText"
          aria-label="expand menu"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}>
          <Menu />
        </IconButton>
      </div>
    </AppBar>
  )
}
