import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import MyPaper from '../components/MyPaper'
import {logoBackground, logoBackgroundHighContrast} from './index.scss'

export default function Home() {
  const {highContrast} = useHeaderState()

  return (
    <Grid item xs={12} md={6}>
      <MyPaper>
        <aside className={highContrast ? logoBackgroundHighContrast : logoBackground}>
          <img src="/assets/iit-oakland-logo.png" style={{width: '100%', maxWidth: '450px', height: 'auto'}} />
        </aside>
      </MyPaper>
    </Grid>
  )
}
