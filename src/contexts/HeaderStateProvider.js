import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

const HeaderStateContext = createContext()
export const useHeaderState = () => useContext(HeaderStateContext)
export const tabValues = ['/about', '/resources', '/topics', '/election']


export const HeaderStateProvider = ({children, url, toggleTheme, toggleHighContrast, highContrast}) => {
  const [open, setOpen] = useState(false)
  const [tabValue, setTabValue] = useState(tabValues.includes(url) ? url : false)
  const [route, setRoute] = useState(url)

  // function toggleDrawer(event, providedValue) { --> just export setOpen
  function toggleDrawer(event, providedValue) {
    if (!(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))) {
      setOpen(typeof providedValue !== "undefined" ? providedValue : !open)
    }
  }

  const contextValue = {
    tabValue,
    setTabValue,
    route,
    setRoute,
    open,
    toggleDrawer,
    toggleTheme,
    toggleHighContrast,
    highContrast
  }

  return (
    <HeaderStateContext.Provider value={contextValue}>
      {children}
    </HeaderStateContext.Provider>
  )
}
