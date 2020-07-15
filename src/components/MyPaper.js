import {h} from 'preact' /** @jsx h */
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'

const useStyles = makeStyles((theme, unscrollable) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: unscrollable ? 'visible' : 'auto'
  }
}))

export default function MyPaper({elevation, children, unscrollable}) {  
  const classes = useStyles(useTheme(), unscrollable)

  return (
    <Paper
      elevation={elevation}
      className={classes.paper}>
      {children}
    </Paper>
  )
}
