import {h} from 'preact' /** @jsx h */
import {Paper} from '@material-ui/core'
import {myPaper} from './index.scss'

export default function MyPaper({elevation = 10, children, unscrollable}) {  
  return (
    <Paper
      elevation={elevation}
      className={myPaper}
      style={{
        overflow: unscrollable ? 'visible' : 'auto'
      }}>
      {children}
    </Paper>
  )
}
