import {h} from 'preact' /** @jsx h */
import {fade, makeStyles, useTheme} from '@material-ui/core/styles'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {
  AppBar, Slide, Toolbar, useScrollTrigger, Tabs, Tab,
  IconButton, InputBase} from '@material-ui/core'
import {
  Home, Menu, Search, CheckBox, CheckBoxOutlineBlank, EmojiPeople,
  Mail, HowToVote, Announcement, VideoLibrary} from '@material-ui/icons'

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
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2)
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`
  },
  adminMode: {
    marginLeft: theme.spacing(2)
  },
  xSmall: {
    [theme.breakpoints.down(700)]: {
      display: 'none'
    }
  },
  small: {
    [theme.breakpoints.down(870)]: {
      display: 'none'
    }
  },
  medium: {
    [theme.breakpoints.down(1080)]: {
      display: 'none'
    }
  },
  large: {
    [theme.breakpoints.down(1200)]: {
      display: 'none'
    }
  },
  xLarge: {
    [theme.breakpoints.down(1380)]: {
      display: 'none'
    }
  },
  xxLarge: {
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
        <Toolbar>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="navigation"
          >
            <Tab icon={<Home />}
              label="HOME" href="/" value="/" />
            <Tab icon={<Announcement />}
              className={classes.xSmall}
              label="TAKE ACTION" href="/takeaction" value="/takeaction" />
            <Tab icon={<VideoLibrary />}
              className={classes.small}
              label="VIDEOS" href="/videos" value="/videos" />
            <Tab icon={<HowToVote />}
              className={classes.medium}
              label="CITY COUNCIL" href="/citycouncil" value="/citycouncil" />
            <Tab icon={<EmojiPeople />}
              className={classes.large}
              label="WHO WE ARE" href="/whoweare" value="/whoweare" />
            <Tab icon={<Mail />}
              className={classes.xLarge}
              label="FEEDBACK" href="/feedback" value="/feedback" />
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
              <Search aria-hidden="true" />
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
