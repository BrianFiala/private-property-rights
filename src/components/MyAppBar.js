import {h} from 'preact' /** @jsx h */
import {useState, useRef} from 'preact/hooks'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {AppBar, Tabs, Tab, IconButton, Button, MenuItem} from '@material-ui/core'
import {Menu, Brightness4Outlined} from '@material-ui/icons'
import {appBar, spacer, tab, button, menu, imageButton, themeToggle, homeAndTheme} from './index.scss'
import MyDropDown from './MyDropDown'

export default function MyAppBar({toggleTheme}) {
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()
  const [cityOpen, setCityOpen] = useState(false)
  const [newsOpen, setNewsOpen] = useState(false)
  const [actionOpen, setActionOpen] = useState(false)
  const cityTab = useRef()
  const newsTab = useRef()
  const takeActionButton = useRef()

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setTabValue(newValue)
  }

  const openCityMenu = () => {
    setCityOpen(true)
  }

  const closeCityMenu = () => {
    setCityOpen(false)
  }

  const openNewsMenu = () => {
    setNewsOpen(true)
  }

  const closeNewsMenu = () => {
    setNewsOpen(false)
  }

  const openActionMenu = () => {
    setActionOpen(true)
  }

  const closeActionMenu = () => {
    setActionOpen(false)
  }

  const handleTabMenuClick = () => {
    setCityOpen(false)
    setNewsOpen(false)
    setActionOpen(false)
  }

  return (
    <AppBar elevation={0} color="primary" className={appBar}>
      <div className={spacer}>
        <aside className={homeAndTheme}>
          <Button href="/" className={imageButton}>
            <img src="/assets/iit-logo.png" alt="go to home" className="appBarImage" />
          </Button>
          <IconButton
            className={themeToggle}
            edge="end"
            color="inherit"
            aria-label="toggle visual theme"
            onClick={toggleTheme}
            onKeyDown={toggleTheme}>
            <Brightness4Outlined />
          </IconButton>
        </aside>
        <nav>
          <Tabs value={tabValue} onChange={handleChange} aria-label="navigation">
            <Tab className={tab} label="ABOUT US" href="/about" value="/about" />
            <Tab className={tab} label="GET HELP" href="/gethelp" value="/gethelp" />
            <Tab className={tab} label="NEWS" href="/news" value="/news"
              ref={newsTab}
              onMouseEnter={openNewsMenu}
              aria-controls="news-menu-options"
              aria-haspopup="true" />
            <Tab className={tab} label="CITY" href="/city" value="/city"
              ref={cityTab}
              onMouseEnter={openCityMenu}
              aria-controls="city-menu-options"
              aria-haspopup="true" />
            <Tab className={tab} label="CALENDAR" href="/calendar" value="/calendar" />
          </Tabs>
          <Button className={button}
            href="/takeaction"
            variant="outlined" color="inherit"
            size="medium"
            ref={takeActionButton}
            onMouseEnter={openActionMenu}
            aria-controls="take-action-options"
            aria-haspopup="true">
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
        </nav>
      </div>
      <MyDropDown
        id="city-tab-options"
        anchorEl={cityTab}
        setOpen={openCityMenu}
        setClosed={closeCityMenu}
        open={cityOpen}>
        <MenuItem key="council-members" onClick={handleTabMenuClick}>
          COUNCIL MEMBERS
        </MenuItem>
        <MenuItem key="election" onClick={handleTabMenuClick}>
          2020 ELECTION
        </MenuItem>
        <MenuItem key="legislation" onClick={handleTabMenuClick}>
          LEGISLATIONS
        </MenuItem>
      </MyDropDown>
      <MyDropDown
        id="news-tab-options"
        anchorEl={newsTab}
        setOpen={openNewsMenu}
        setClosed={closeNewsMenu}
        open={newsOpen}>
        <MenuItem key="oakland" onClick={handleTabMenuClick}>
          OAKLAND
        </MenuItem>
        <MenuItem key="bay-area" onClick={handleTabMenuClick}>
          BAY AREA
        </MenuItem>
        <MenuItem key="california" onClick={handleTabMenuClick}>
          CALIFORNIA
        </MenuItem>
        <MenuItem key="national" onClick={handleTabMenuClick}>
          NATIONAL
        </MenuItem>
      </MyDropDown>
      <MyDropDown
        id="take-action-options"
        anchorEl={takeActionButton}
        setOpen={openActionMenu}
        setClosed={closeActionMenu}
        open={actionOpen}>
        <MenuItem key="councilmembers" onClick={handleTabMenuClick}>
          EMAIL COUNCILMEMBERS
        </MenuItem>
        <MenuItem key="mailing-list" onClick={handleTabMenuClick}>
          JOIN MAILING LIST
        </MenuItem>
        <MenuItem key="petition" onClick={handleTabMenuClick}>
          SIGN PETITION
        </MenuItem>
        <MenuItem key="calendar" onClick={handleTabMenuClick}>
          UPCOMING MEETINGS
        </MenuItem>
      </MyDropDown>
    </AppBar>
  )
}
