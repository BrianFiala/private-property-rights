import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import BrightnessIcon from '@material-ui/icons/Brightness4Outlined'
import HomeIcon from '@material-ui/icons/People'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {AppBar, IconButton, Slide, Toolbar, useScrollTrigger, Tabs, Tab} from '@material-ui/core'
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

export default function MyAppBar({toggleTheme}) {
  const theme = useTheme()
  const classes = useStyles(theme)
  const {userProfile, toggleAdminMode, adminModeEnabled} = useAdminState()
  const trigger = useScrollTrigger({threshold: 32})
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    if (newValue !== 3) {
      setValue(newValue)
    }
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        color="primary"
        className={classes.appBar}>
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="navigation"
            centered
          >
            <Tab icon={<HomeIcon />} label="HOME" href="/" />
            <Tab icon={<VideoLibraryIcon />} label="VIDEOS" href="/videos" />
            <Tab icon={<AnnouncementIcon />} label="NEWS" href="/admin" />
            {userProfile && (
              <Tab 
                label="ADMIN"
                onClick={toggleAdminMode}
                aria-label="toggle admin mode"
                icon={adminModeEnabled
                  ? <CheckBoxIcon aria-hidden="true" />
                  : <CheckBoxBlankIcon aria-hidden="true" />} />
            )}
          </Tabs>
          <aside className={classes.title}>
            <div style={`${userProfile ? '' : 'display: none;'}`} class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
            <IconButton
              edge="end"
              color="secondary"
              aria-label="toggle theme"
              onClick={toggleTheme}>
              <BrightnessIcon aria-hidden="true" />
            </IconButton>
          </aside>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
