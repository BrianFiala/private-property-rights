import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {AppBar, Tabs, Tab, IconButton, Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {appBar, spacer, tab, button, menu} from './index.scss'

export default function MyAppBar() {
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setTabValue(newValue)
  }

  return (
    <AppBar elevation={0} color="primary" className={appBar}>
      <div className={spacer}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="navigation">
          <Tab className={tab} label="HOME" href="/" value="/" />
          <Tab className={tab} label="ABOUT" href="/about" value="/about" />
          <Tab className={tab} label="NEWS" href="/news" value="/news" />
          <Tab className={tab} label="ISSUES" href="/issues" value="/issues" />
          <Tab className={tab} label="CALENDAR" href="/calendar" value="/calendar" />
        </Tabs>
        <Button className={button}
          href="/takeaction"
          variant="outlined" color="inherit"
          size="medium">
          Take Action
        </Button>
        <IconButton
          className={menu}
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
