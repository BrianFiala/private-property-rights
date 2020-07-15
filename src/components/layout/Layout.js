import {h} from 'preact' /** @jsx h */
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Container} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh'
  },
  contents: {
    minHeight: 'calc(100% - 72px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    }
  },
  appBarSpacer: {
    marginTop: '72px'
  }
}))

export default function Layout({url}) {
  const classes = useStyles(useTheme())

  return (
    <div className={classes.root}>
      <Header />
      <Container disableGutters>
        <div className={classes.appBarSpacer} />
        <Container
          disableGutters
          className={classes.contents}>
          <Main url={url} />
          <Footer />
        </Container>
      </Container>
    </div>
  )
}