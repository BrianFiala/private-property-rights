import {h} from 'preact' /** @jsx h */
import EmailIcon from '@material-ui/icons/Email'
import {Typography, Link, IconButton} from '@material-ui/core'
import {footer, emailAdmins, vertical} from './index.scss'

export default function Footer() {
  return (
    <footer className={footer}>
      <Link href="/privacypolicy" color="inherit">
        <Typography variant="body2" align="center">
            privacy policy
        </Typography>
      </Link>
      <Link href="mailto:privatepropertyrightsinfo@gmail.com"
        color="inherit" className={emailAdmins}>
        <IconButton color="inherit" edge="start" aria-label="email the admins">
          <EmailIcon aria-hidden="true" />
        </IconButton>
        <span className={vertical}>
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
