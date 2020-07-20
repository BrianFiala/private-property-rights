import {h} from 'preact' /** @jsx h */
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Container} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  contents: {
    marginTop: theme.spacing(9),
    minHeight: `calc(100% - ${theme.spacing(9)}px)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),          
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    }
  }
}))

export default function Layout({url}) {
  const classes = useStyles(useTheme())

  return (
    <div style={{
      display: 'flex',
      width: '100%', // maybe vw
      minHeight: '100vh' // maybe 100%
    }}>
      <Header />
      <Container disableGutters> {/* maybe remove */}
        <Container disableGutters
          className={classes.contents}>
          <Main url={url} />
          <Footer />
        </Container>
      </Container>
    </div>
  )
}