import {h} from 'preact' /** @jsx h */
import MyAppBar from '../MyAppBar'
import MyDrawer from '../MyDrawer'

export default function Header({toggleTheme, toggleHighContrast, highContrast}) {
  return (<>
    <MyAppBar toggleTheme={toggleTheme} toggleHighContrast={toggleHighContrast} highContrast={highContrast} />
    <MyDrawer />
  </>)
}
