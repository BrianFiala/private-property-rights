import {h} from 'preact' /** @jsx h */
import MyAppBar from '../MyAppBar'
import MyDrawer from '../MyDrawer'

export default function Header({toggleTheme}) {
  return (<>
    <MyAppBar toggleTheme={toggleTheme} />
    <MyDrawer />
  </>)
}
