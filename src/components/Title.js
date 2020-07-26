import {h} from 'preact' /** @jsx h */
import {Typography} from '@material-ui/core'

export default function Title({children, color}) {
  return (
    <Typography
      component="h2"
      variant="h6"
      color={color}>
      {children}
    </Typography>
  )
}