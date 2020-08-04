import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

const HeaderStateContext = createContext()
export const useHeaderState = () => useContext(HeaderStateContext)
export const tabValues = ['/about', '/news', '/gethelp', '/city', '/calendar']


export const HeaderStateProvider = ({children, url}) => {
  const [open, setOpen] = useState(false)
  const [tabValue, setTabValue] = useState(tabValues.includes(url) ? url : false)
  const [route, setRoute] = useState(url)

  // function toggleDrawer(event, providedValue) { --> just export setOpen
  function toggleDrawer(event, providedValue) {
    if (!(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))) {
      setOpen(typeof providedValue !== "undefined" ? providedValue : !open)
    }
  }

  return (
    <HeaderStateContext.Provider value={{
      tabValue,
      setTabValue,
      route,
      setRoute,
      open,
      toggleDrawer}}>
      {children}
    </HeaderStateContext.Provider>
  )
}
