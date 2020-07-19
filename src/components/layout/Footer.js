import {h} from 'preact' /** @jsx h */
import EmailIcon from '@material-ui/icons/Email'
import {Typography, Link, IconButton} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'

export default function Footer() {
  const theme = useTheme()

  return (
    <footer style={{
      marginTop: `${theme.spacing(3)}`,
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center'}}>
      <Link
        color="inherit"
        href="/privacypolicy"
        style={{display: 'flex'}}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center">
          privacy policy
        </Typography>
      </Link>
      <Link
        color="inherit"
        href="mailto:privatepropertyrightsinfo@gmail.com"
        style={{display: 'flex'}}>
        <span>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="email the owners">
            <EmailIcon aria-hidden="true" />
          </IconButton>
        </span>
        <span>
          <Typography
            variant="body2"
            color="textSecondary"
            align="left">
            Design and engineering<br />by Brian &copy; {`${new Date().getFullYear()}`}
          </Typography>
        </span>
      </Link>
      <Link
        color="inherit"
        href="/termsofservice"
        style={{display: 'flex'}}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center">
          terms of service
        </Typography>
      </Link>
    </footer>
  )
}
