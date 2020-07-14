import {h} from 'preact' /** @jsx h */
import MenuIcon from '@material-ui/icons/Menu'
// import LockIcon from '@material-ui/icons/Lock'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import BrightnessIcon from '@material-ui/icons/Brightness4Outlined'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {AppBar, IconButton, Slide, Toolbar, Typography, useScrollTrigger} from '@material-ui/core'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {useAdminState} from '../contexts/AdminStateProvider'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1301
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(6)
    }
  },
  adminMode: {
    marginLeft: theme.spacing(2)
  }
}))

export default function MyAppBar({toggleTheme}) {
  const {userProfile, logout, toggleAdminMode, adminModeEnabled} = useAdminState()
  const {toggleDrawer} = useHeaderState()
  const classes = useStyles(useTheme())
  const trigger = useScrollTrigger({threshold: 32})

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
            <MenuIcon aria-hidden="true" />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}>
            Private Property Rights
          </Typography>
          <div style={`${userProfile ? '' : 'display: none;'}`} class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
          {userProfile && (
            <>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                alignRight
                displayInline
                className={classes.adminMode}>
                Admin Mode
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="toggleAdminMode"
                onClick={toggleAdminMode}>
                {adminModeEnabled ? (
                  <CheckBoxIcon aria-hidden="true" />
                ) : (
                  <CheckBoxBlankIcon aria-hidden="true" />
                )}
              </IconButton>
            </>
          )}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="toggle theme"
            onClick={toggleTheme}>
            <BrightnessIcon aria-hidden="true" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}
