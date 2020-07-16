import {h} from 'preact' /** @jsx h */
import EmailIcon from '@material-ui/icons/Email'
import {Typography, Link, IconButton} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footerContainer: {
    marginTop: theme.spacing(3),
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    display: 'flex'
  }
}))

export default function Footer() {
  const classes = useStyles(useTheme())

  return (
    <footer className={classes.footerContainer}>
      <Link
        color="inherit"
        href="/privacypolicy"
        className={classes.link}>
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
        className={classes.link}>
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
        className={classes.link}>
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
