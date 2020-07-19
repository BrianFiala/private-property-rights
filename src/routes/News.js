import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {Grid, TextField} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textFieldSection: {
    display: 'flex', 
    flexGrow: 1, 
    marginTop: theme.spacing(2)
  },
  textFieldName: {
    flexGrow: 1,
    marginRight: theme.spacing(1)
  },
  textFieldPhone: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  },
  textFieldEmail: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  }
}))

export default function News() {
  const classes = useStyles(useTheme())

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          identifier="About Us"
          title="We are here to help"
          message="Oakland property laws are intense."
          buttonAction={() => {}} />
      </Grid>
          
      <Grid item xs={12}>
        <InfoItem
          identifier="Stay informed by signing up for news and announcements"
          title="Join Us!"
          message="We will never share your information without your explicit consent. Ever. See our privacy policy for more details."
          buttonAction={() => {}}
          buttonText="Sign Me Up!">
          <section className={classes.textFieldSection}>
            <TextField
              onChange={() => {}}
              className={classes.textFieldName}
              fullwidth
              label="name (optional)"
              variant="outlined" />
            <TextField
              onChange={() => {}}
              className={classes.textFieldPhone}
              fullwidth
              label="phone (optional)"
              variant="outlined" />
          </section>
          <TextField
            onChange={() => {}}
            className={classes.textFieldEmail}
            fullwidth
            label="email (required)"
            variant="outlined" />
        </InfoItem>
      </Grid>
    </Grid>
  )
}
