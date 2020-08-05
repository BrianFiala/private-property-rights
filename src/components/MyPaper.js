import {h} from 'preact' /** @jsx h */
import {Paper} from '@material-ui/core'

export default function MyPaper({elevation = 10, children, unscrollable}) {  
  return (
    <Paper
      elevation={elevation}
      style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: unscrollable ? 'visible' : 'auto'
      }}>
      {children}
    </Paper>
  )
}
