import {h} from 'preact' /** @jsx h */
import {Typography, Button} from '@material-ui/core'
import Title from './Title'
import MyPaper from './MyPaper'
import {body1, fontWeight500} from './index.scss'

export default function InfoItem({
  identifier, title, message, buttonAction, buttonText, children, elevation = 10
}) {
  return (
    <MyPaper elevation={elevation}>
      {identifier && <><Title color="secondary">{identifier}</Title><br /></>}
      {title && <><Typography className={fontWeight500} color="primary" variant="h2">{title}</Typography><br /></>}
      {message && <Typography color="textPrimary" variant="h6">{message}</Typography>}
      {children}
      {buttonText && buttonAction && (
        <Button
          style={{marginTop: '16px'}}
          color="secondary"
          size="large"
          onClick={buttonAction}>
          {buttonText}
        </Button>
      )}
    </MyPaper>
  )
}
