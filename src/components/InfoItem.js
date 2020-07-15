import {h} from 'preact' /** @jsx h */
import Title from './Title'
import MyPaper from './MyPaper'
import {Typography, Button} from '@material-ui/core'

export default function InfoItem({identifier, title, message, buttonAction, buttonText, children}) {
  return (
    <MyPaper>
      <Title>{identifier}</Title><br />
      <Typography variant="h3">{title}</Typography><br />
      <Typography variant="body1">{message}</Typography>
      {children}
      {buttonText && buttonAction && (
        <Button style={{marginTop: '12px'}} color="primary" size="large" onClick={buttonAction}>{buttonText}</Button>
      )}
    </MyPaper>
  )
}
