import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import EmailIcon from '@material-ui/icons/Email'
import SettingsIcon from '@material-ui/icons/Settings'
import HowToVoteIcon from '@material-ui/icons/HowToVote'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import {AppBar, Slide, Toolbar, useScrollTrigger, Tabs, Tab, IconButton} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {useAdminState} from '../contexts/AdminStateProvider'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1301
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1
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
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="expand menu"
            onClick={event => toggleDrawer(event)}
            onKeyDown={event => toggleDrawer(event)}>
            <MenuIcon />
          </IconButton>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="navigation"
            centered
          >
            <Tab icon={<HomeIcon />} label="HOME" href="/" value="/" />
            <Tab icon={<AnnouncementIcon />} label="TAKE ACTION" href="/takeaction" value="/takeaction" />
            <Tab icon={<HowToVoteIcon />} label="CITY COUNCIL" href="/citycouncil" value="/citycouncil" />
            <Tab icon={<VideoLibraryIcon />} label="VIDEOS" href="/videos" value="/videos" />
            <Tab icon={<EmojiPeopleIcon />} label="WHO WE ARE" href="/whoweare" value="/whoweare" />
            <Tab icon={<EmailIcon />} label="FEEDBACK" href="/feedback" value="/feedback" />
            <Tab icon={<SettingsIcon />} label="ADMIN" href="/admin" value="/admin" />
            {userProfile && (
              <Tab 
                label="ADMIN"
                onClick={toggleAdminMode}
                aria-label="toggle admin mode"
                value="tabNoHighlight"
                icon={adminModeEnabled
                  ? <CheckBoxIcon aria-hidden="true" />
                  : <CheckBoxBlankIcon aria-hidden="true" />} />
            )}
          </Tabs>
          <aside className={classes.title}>
            <div style={`${userProfile ? '' : 'display: none;'}`} class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
          </aside>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
