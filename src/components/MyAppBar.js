import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {AppBar, Tabs, Tab, IconButton, Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import classes from './MyAppBar.scss'

export default function MyAppBar() {
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setTabValue(newValue)
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
        </Tabs>
        <Button className={classes.button}
          href="/takeaction"
          variant="outlined" color="inherit"
          size="medium">
          Take Action
        </Button>
        <IconButton
          className={classes.menu}
          edge="end"
          color="inherit"
          aria-label="expand menu"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}>
          <Menu />
        </IconButton>
      </div>
    </AppBar>
  )
}
