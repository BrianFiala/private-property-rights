import {h} from 'preact' /** @jsx h */
import EmailIcon from '@material-ui/icons/Email'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Typography, Link, IconButton} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footerContainer: {
    margin: `${theme.spacing(2)}px auto 0`
  },
  footerMailTo: {
    display: 'flex'
  }
}))

export default function Footer() {
  const classes = useStyles(useTheme())

  return (
    <footer className={classes.footerContainer}>
      <Link
        color="inherit"
        href="mailto:serpentsmiles@gmail.com"
        className={classes.footerMailTo}>
        <span>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="email the owners">
            <EmailIcon />
          </IconButton>
        </span>
        <span>
          <Typography
            variant="body2"
            color="textSecondary"
            align="left">
            {`Copyright © Zoya ${new Date().getFullYear()}.`}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="left">
            Design and engineering by Brian
          </Typography>
        </span>
      </Link>
    </footer>
  )
}
