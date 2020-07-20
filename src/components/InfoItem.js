import {h} from 'preact' /** @jsx h */
import Title from './Title'
import MyPaper from './MyPaper'
import {Typography, Button} from '@material-ui/core'
import {useTheme, makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2)
  }
}))

export default function InfoItem({identifier, title, message, buttonAction, buttonText, children}) {
  const classes = useStyles(useTheme())

  return (
    <MyPaper>
      <Title>{identifier}</Title><br />
      <Typography variant="h3">{title}</Typography><br />
      <Typography variant="body1">{message}</Typography>
      {children}
      {buttonText && buttonAction && (
        <Button className={classes.button} color="primary" size="large" onClick={buttonAction}>{buttonText}</Button>
      )}
    </MyPaper>
  )
}
