import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

const HeaderStateContext = createContext()
export const useHeaderState = () => useContext(HeaderStateContext)

export const HeaderStateProvider = ({children, url}) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.pathname : '/'
  const [open, setOpen] = useState(false)
  const [tabValue, setTabValue] = useState(url || currentUrl)

  function toggleDrawer(event, providedValue) {
    if (!(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))) {
      setOpen(typeof providedValue !== "undefined" ? providedValue : !open)
    }
  }

  return (
    <HeaderStateContext.Provider value={{
      tabValue,
      setTabValue,
      open,
      toggleDrawer}}>
      {children}
    </HeaderStateContext.Provider>
  )
}
