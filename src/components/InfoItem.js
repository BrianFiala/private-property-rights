import {h} from 'preact' /** @jsx h */
import Title from './Title'
import MyPaper from './MyPaper'
import {Typography, Button} from '@material-ui/core'

export default function InfoItem({
  identifier, title, message, buttonAction, buttonText, children, elevation = 10
}) {
  return (
    <MyPaper elevation={elevation}>
      <Title color="secondary">{identifier}</Title><br />
      <Typography color="primary" variant="h3">{title}</Typography><br />
      <Typography color="textPrimary" variant="body1">{message}</Typography>
      {children}
      {buttonText && buttonAction && (
        <Button style={{marginTop: '16px'}}
          color="secondary" size="large"
          onClick={buttonAction}>
          {buttonText}
        </Button>
      )}
    </MyPaper>
  )
}
