import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'
import {VideoLibrary, Announcement, CheckBox, CheckBoxOutlineBlank, HowToVote, Home, Menu} from '@material-ui/icons'
import {AppBar, Slide, Toolbar, useScrollTrigger, Tabs, Tab, IconButton} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1301
  },
  toolbar: {
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'space-between'
  },
  adminMode: {
    marginLeft: theme.spacing(2)
  }
}))

export default function MyAppBar() {
  const classes = useStyles(useTheme())
  const {toggleDrawer} = useHeaderState()
  const {userProfile, toggleAdminMode, adminModeEnabled} = useAdminState()
  const trigger = useScrollTrigger({threshold: 32})
  const [value, setValue] = useState(typeof window !== 'undefined' ? window.location.pathname : '/')

  const handleChange = (event, newValue) => {
    event.preventDefault()
    if (newValue !== 'tabNoHighlight') {
      setValue(newValue)
    }
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        color="primary"
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="navigation"
          >
            <Tab icon={<Home />}
              label="HOME" href="/" value="/" />
            <Tab icon={<Announcement />}
              label="TAKE ACTION" href="/takeaction" value="/takeaction" />
            <Tab icon={<VideoLibrary />}
              label="VIDEOS" href="/videos" value="/videos" />
            <Tab icon={<HowToVote />}
              label="CITY COUNCIL" href="/citycouncil" value="/citycouncil" />
            {userProfile && (
              <Tab 
                className={classes.hideMediumDown}
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
