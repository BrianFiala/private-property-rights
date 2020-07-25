import {h} from 'preact' /** @jsx h */
import EmailIcon from '@material-ui/icons/Email'
import {Typography, Link, IconButton} from '@material-ui/core'
import {useTheme, makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    margin: '0 auto',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.primary,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1, .5, 1),
    [theme.breakpoints.up(423)]: {
      padding: theme.spacing(1, 3, 1, 3)
    }
  },
  emailAdmins: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    margin: theme.spacing(0, 1, 0, 0),
    [theme.breakpoints.up(343)]: {
      margin: theme.spacing(0, 1, 0, 2)
    },
    [theme.breakpoints.up(343)]: {
      margin: theme.spacing(0, 1, 0, 3)
    },
    [theme.breakpoints.up(359)]: {
      margin: theme.spacing(0, 1, 0, 5)
    },
    [theme.breakpoints.up(455)]: {
      margin: theme.spacing(0, 1)
    },
    color: theme.palette.primary.contrastText
  },
  vertical: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.contrastText
  }
}))

export default function Footer() {
  const classes = useStyles(useTheme())

  return (
    <footer className={classes.footer}>
      <Link href="/privacypolicy" color="inherit">
        <Typography variant="body2" align="center">
          privacy policy
        </Typography>
      </Link>
      <Link href="mailto:privatepropertyrightsinfo@gmail.com"
        color="inherit" className={classes.emailAdmins}>
        <IconButton color="inherit" edge="start" aria-label="email the admins">
          <EmailIcon aria-hidden="true" />
        </IconButton>
        <span className={classes.vertical}>
          <Typography variant="body2" align="left">
            Design and engineering<br />by Brian &copy; {`${new Date().getFullYear()}`}
          </Typography>
        </span>
      </Link>
      <Link href="/termsofservice" color="inherit">
        <Typography variant="body2" align="center">
          terms of service
        </Typography>
      </Link>
    </footer>
  )
}
