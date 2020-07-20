import {h} from 'preact' /** @jsx h */
import {useTheme} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'

export default function MyPaper({elevation, children, unscrollable}) {  
  const theme = useTheme()

  return (
    <Paper
      elevation={elevation}
      style={{
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: unscrollable ? 'visible' : 'auto'
      }}>
      {children}
    </Paper>
  )
}
