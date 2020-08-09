import {h} from 'preact' /** @jsx h */
import {useState, useRef} from 'preact/hooks'
import {route} from 'preact-router'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {AppBar, Tabs, Tab, IconButton, Button,
  MenuItem, FormControlLabel, Checkbox} from '@material-ui/core'
import {Menu, Brightness4Outlined} from '@material-ui/icons'
import {appBar, appBarSpacer, appBarSpacerHighContrast,
  spacer, tab, button, menu, imageButton, themeToggle,
  tabHighContrast, homeAndTheme, appBarHighContrast,
  spacerHighContrast, imageButtonHighContrast} from './index.scss'
import MyDropDown from './MyDropDown'

export default function MyAppBar() {
  const {toggleDrawer, tabValue, setTabValue, toggleTheme, toggleHighContrast, highContrast} = useHeaderState()
  const [electionOpen, setElectionOpen] = useState(false)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const [actionOpen, setActionOpen] = useState(false)
  const electionTab = useRef()
  const topicsTab = useRef()
  const takeActionButton = useRef()

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setTabValue(newValue)
  }

  const openElectionMenu = () => {
    setElectionOpen(true)
  }

  const closeElectionMenu = () => {
    setElectionOpen(false)
  }

  const openTopicsMenu = () => {
    setTopicsOpen(true)
  }

  const closeTopicsMenu = () => {
    setTopicsOpen(false)
  }

  const openActionMenu = () => {
    setActionOpen(true)
  }

  const closeActionMenu = () => {
    setActionOpen(false)
  }

  const handleTabMenuClick = (path) => {
    setElectionOpen(false)
    setTopicsOpen(false)
    setActionOpen(false)
    route(path)
  }

  return (<>
    <div className={highContrast ? appBarSpacerHighContrast : appBarSpacer} />
    <AppBar elevation={10} color="primary" className={highContrast
      ? appBarHighContrast
      : appBar}>
      <div className={highContrast ? spacerHighContrast : spacer}>
        <aside className={homeAndTheme}>
          <Button href="/" className={highContrast ? imageButtonHighContrast : imageButton}>
            <img alt="go to home"
              className="appBarImage"
              src={highContrast
                ? '/assets/iit-high-contrast.jpg'
                : '/assets/iit-oakland-logo.png'} />
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
          <FormControlLabel
            label="high contrast"
            control={
              <Checkbox
                checked={highContrast}
                onChange={toggleHighContrast}
                name="toggleHighCOntrast"
                style={highContrast
                  ? {color: '#FFF', marginLeft: '24px'}
                  : {marginLeft: '24px', color: 'inherit'}} />
            } />
        </aside>
        <nav>
          <Tabs value={tabValue} onChange={handleChange} aria-label="navigation">
            <Tab className={highContrast ? tabHighContrast : tab}
              label="ABOUT US"
              href="/about"
              value="/about" />
            <Tab className={highContrast ? tabHighContrast : tab}
              label="TOPICS"
              href="/topics"
              value="/topics"
              // ref={topicsTab}
              // onMouseEnter={openTopicsMenu}
              // aria-controls="topics-menu-options"
              // aria-haspopup="true"
            />
            <Tab className={highContrast ? tabHighContrast : tab}
              label="ELECTION"
              href="/election"
              value="/election"
              // ref={electionTab}
              // onMouseEnter={openElectionMenu}
              // aria-controls="election-menu-options"
              // aria-haspopup="true"
            />
            <Tab className={highContrast ? tabHighContrast : tab}
              label="RESOURCES"
              href="/resources"
              value="/resources" />
          </Tabs>
          <Button
            className={button}
            href="/takeaction"
            variant="outlined" color="inherit"
            size="medium"
            // ref={takeActionButton}
            // onMouseEnter={openActionMenu}
            // aria-controls="take-action-options"
            // aria-haspopup="true"
          >
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
      {/* <MyDropDown
        id="election-tab-options"
        anchorEl={electionTab}
        setOpen={openElectionMenu}
        setClosed={closeElectionMenu}
        open={electionOpen}>
        <MenuItem key="council-members"
          onClick={handleTabMenuClick}>
          COUNCIL MEMBERS
        </MenuItem>
        <MenuItem key="election"
          onClick={handleTabMenuClick}>
          2020 ELECTION
        </MenuItem>
        <MenuItem key="legislation"
          onClick={handleTabMenuClick}>
          LEGISLATIONS
        </MenuItem>
      </MyDropDown>
      <MyDropDown
        id="topics-tab-options"
        anchorEl={topicsTab}
        setOpen={openTopicsMenu}
        setClosed={closeTopicsMenu}
        open={topicsOpen}>
        <MenuItem key="oakland"
          onClick={handleTabMenuClick}>
          OAKLAND
        </MenuItem>
        <MenuItem key="bay-area"
          onClick={handleTabMenuClick}>
          BAY AREA
        </MenuItem>
        <MenuItem key="california"
          onClick={handleTabMenuClick}>
          CALIFORNIA
        </MenuItem>
        <MenuItem key="national"
          onClick={handleTabMenuClick}>
          NATIONAL
        </MenuItem>
      </MyDropDown>
      <MyDropDown
        id="take-action-options"
        anchorEl={takeActionButton}
        setOpen={openActionMenu}
        setClosed={closeActionMenu}
        open={actionOpen}>
        <MenuItem key="councilmembers"
          onClick={handleTabMenuClick}>
          EMAIL COUNCILMEMBERS
        </MenuItem>
        <MenuItem key="mailing-list"
          onClick={handleTabMenuClick}>
          JOIN MAILING LIST
        </MenuItem>
        <MenuItem key="petition"
          onClick={handleTabMenuClick}>
          SIGN PETITION
        </MenuItem>
        <MenuItem key="calendar"
          onClick={handleTabMenuClick}>
          UPCOMING MEETINGS
        </MenuItem>
      </MyDropDown> */}
    </AppBar>
  </>)
}
