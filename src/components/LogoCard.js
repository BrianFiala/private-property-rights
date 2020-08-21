import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../contexts/HeaderStateProvider'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'
import {logoBackground, logoBackgroundHighContrast} from './index.scss'

export default function LogoCard({title, message}) {
  const {highContrast} = useHeaderState()

  return (
    <MyPaper>
      {title && <><Title color="secondary">{title}</Title><br /></>}
      <aside className={highContrast ? logoBackgroundHighContrast : logoBackground} />
      {message && <><br /><Title color="secondary">{message}</Title></>}
    </MyPaper>
  )
}
