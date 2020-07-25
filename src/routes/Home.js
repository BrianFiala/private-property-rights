import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {route} from 'preact-router'
import {Grid, TextField, Typography, Paper, Container, StylesProvider} from '@material-ui/core'
import {useTheme, makeStyles} from '@material-ui/core/styles'
import MyPaper from '../components/MyPaper'

const useStyles = makeStyles(theme => ({
  items: {
    width: '100%',
    padding: theme.spacing(3, 0),
    backgroundImage: 'url(assets/just-a-house.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 20%',
    backgroundSize: '30%'
  },
  banner: {
    position: 'relative',
    height: '50vh',
    width: '100%'
    // marginBottom: theme.spacing(3)
  },
  title: {
    position: 'absolute',
    width: '100%',
    margin: 'auto',
    top: '40%',
    color: '#EEE',
    fontWeight: 400
  }
}))

export default function Home() {
  const classes = useStyles(useTheme())

  return (
    <Grid container className={classes.items}>
      <Grid item xs={12} className={classes.banner}>
        <Typography className={classes.title} align="center" component="h1" variant="h1">In It Together</Typography>
      </Grid>
      <Grid item xs={12}>
        <InfoItem
          // className={classes.marginBottom}
          identifier="identifier"
          title="title"
          message="The majority of Oakland housing providers are small, locally based members of the community"
          buttonAction={() => {route('issues')}}
          buttonText="Learn More" />
      </Grid>
    </Grid>
  )
}
