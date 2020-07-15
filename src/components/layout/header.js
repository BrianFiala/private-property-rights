import {h} from 'preact' /** @jsx h */
import MyAppBar from '../MyAppBar'
import MyDrawer from '../MyDrawer'
import { HeaderStateProvider } from '../../contexts/HeaderStateProvider'

export default function Header() {
  return (
    <HeaderStateProvider>
      <MyAppBar />
      <MyDrawer />
    </HeaderStateProvider>
  )
}
