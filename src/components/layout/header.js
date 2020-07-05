import {h} from 'preact' /** @jsx h */
import MyAppBar from '../MyAppBar'
import MyDrawer from '../MyDrawer'
import { HeaderStateProvider } from '../../contexts/HeaderStateProvider'

export default function Header({toggleTheme}) {
  return (
    <HeaderStateProvider>
      <header>
        <MyAppBar toggleTheme={toggleTheme} />
        <MyDrawer />
      </header>
    </HeaderStateProvider>
  )
}
