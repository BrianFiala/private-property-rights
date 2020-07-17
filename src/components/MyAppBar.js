import {h} from 'preact' /** @jsx h */
import {fade, makeStyles, useTheme} from '@material-ui/core/styles'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {VideoLibrary, Announcement, CheckBox, CheckBoxOutlineBlank,
  HowToVote, Home, Menu, Search, Settings, EmojiPeople, Mail} from '@material-ui/icons'
import {AppBar, Slide, Toolbar, useScrollTrigger, Tabs, Tab,
  IconButton, InputBase} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1301
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    flexGrow: 1,
    margin: `0 ${theme.spacing(3)}px`,
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  toolbar: {
    display: 'flex'
  },
  adminMode: {
    marginLeft: theme.spacing(2)
  },
  hideBelowXSmall: {
    [theme.breakpoints.down(700)]: {
      display: 'none'
    }
  },
  hideBelowSmall: {
    [theme.breakpoints.down(870)]: {
      display: 'none'
    }
  },
  hideBelowMedium: {
    [theme.breakpoints.down(1080)]: {
      display: 'none'
    }
  },
  hideBelowBig: {
    [theme.breakpoints.down(1200)]: {
      display: 'none'
    }
  },
  hideBelowReallyBig: {
    [theme.breakpoints.down(1380)]: {
      display: 'none'
    }
  },
  hideBelowReallyReallyBig: {
    [theme.breakpoints.down(1500)]: {
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
        <Toolbar className={classes.toolbar}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="navigation"
          >
            <Tab icon={<Home />}
              label="HOME" href="/" value="/" />
            <Tab icon={<Announcement />}
              className={classes.hideBelowXSmall}
              label="TAKE ACTION" href="/takeaction" value="/takeaction" />
            <Tab icon={<VideoLibrary />}
              className={classes.hideBelowSmall}
              label="VIDEOS" href="/videos" value="/videos" />
            <Tab icon={<HowToVote />}
              className={classes.hideBelowMedium}
              label="CITY COUNCIL" href="/citycouncil" value="/citycouncil" />
            <Tab icon={<EmojiPeople />}
              className={classes.hideBelowBig}
              label="WHO WE ARE" href="/whoweare" value="/whoweare" />
            <Tab icon={<Mail />}
              className={classes.hideBelowReallyBig}
              label="FEEDBACK" href="/feedback" value="/feedback" />
            <Tab icon={<Settings />}
              className={classes.hideBelowReallyReallyBig}
              label="ADMIN" href="/admin" value="/admin" />
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{input: classes.inputInput}}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
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
