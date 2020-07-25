import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Router} from 'preact-router'
import {Container} from '@material-ui/core'
import {useTheme, makeStyles} from '@material-ui/core/styles'
import Home from '../../routes/Home'
import About from '../../routes/About'
import News from '../../routes/News'
import Issues from '../../routes/Issues'
import Calendar from '../../routes/Calendar'
import TakeAction from '../../routes/TakeAction'
import PrivacyPolicy from '../../routes/PrivacyPolicy'
import TermsOfService from '../../routes/TermsOfService'
import Admin from '../../routes/Admin'
import NotFound from '../../routes/NotFound'

const removeLoader = (loader) => {
  requestAnimationFrame(() => {
    loader.style.opacity = 0
    setTimeout(() => {
      requestAnimationFrame(() => {
        loader.remove()
      })
    }, 300)
  })
}

const useStyles = makeStyles(theme => ({
  contents: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(10)
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: theme.spacing(180),
    margin: 'auto'
  }
}))

export default function Main({url}) {
  const classes = useStyles(useTheme())
  useEffect(() => {
    typeof window !== 'undefined' &&
    document.querySelectorAll('.loader-wrapper').forEach(loader => removeLoader(loader))
  }, [])

  return (
    <Container maxWidth={false} className={classes.contents}>
      <Router url={url}>
        <Home path="/" />
        <About path="/about" />
        <News path="/news" />
        <Issues path="/issues" />
        <Calendar path="/calendar" />
        <TakeAction path="/takeaction" />
        <PrivacyPolicy path="/privacypolicy" />
        <TermsOfService path="/termsofservice" />
        <Admin path="/admin" />
        <NotFound default />
      </Router>
    </Container>
  )
}