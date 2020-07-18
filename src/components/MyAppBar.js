import {h} from 'preact' /** @jsx h */
import {fade, makeStyles, useTheme} from '@material-ui/core/styles'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {AppBar, Slide, Toolbar, useScrollTrigger, Tabs, Tab,
  IconButton, InputBase} from '@material-ui/core'
import MyIcon from './MyIcon'
import navListItems from '../assets/navlist-manifest.json'

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
    margin: theme.spacing(0, 3, 0, 3),
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

  const sizes = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge']

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
            <Tab icon={<MyIcon icon="home" />}
              label="HOME" href="/" value="/" />
            {navListItems.map((item, i) => (
              <Tab icon={<MyIcon icon={item.icon} />}
                className={classes[sizes[i]]}
                label={item.text} href={item.href} value={item.href} />
            ))}
            {userProfile && (
              <Tab
                label="ADMIN"
                onClick={toggleAdminMode}
                aria-label="toggle admin mode"
                value="tabNoHighlight"
                icon={adminModeEnabled
                  ? <MyIcon icon="checkbox" aria-hidden="true" />
                  : <MyIcon icon="checkboxBlank" aria-hidden="true" />} />
            )}
          </Tabs>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <MyIcon icon="search" />
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
            <MyIcon icon="menu" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
