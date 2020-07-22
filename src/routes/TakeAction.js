import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {Grid, TextField} from '@material-ui/core'
import {useTheme, makeStyles} from '@material-ui/core/styles'

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

export default function TakeAction() {
  const classes = useStyles(useTheme())

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          identifier="Let us know how we're doing"
          title="We'd like to hear from you!"
          message="Feel free to send us a message anytime."
          buttonAction={() => {}} />
      </Grid>
          
      <Grid item xs={12}>
        <InfoItem
          identifier="Please share your thoughts with us"
          message="Your feedback is guaranteed anonymous unless you want us to know who you are. Your response will be received when you click send. If you'd like us to stay in touch, you can select the checkbox below to include your contact info along with your message."
          buttonAction={() => {}}
          buttonText="SEND!">
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
            label="email (optional)"
            variant="outlined" />
          <section className={classes.textFieldSection}>
            <TextField
              autocomplete
              multiline
              rows="15"
              onChange={() => {}}
              className={classes.textFieldName}
              fullwidth
              label="Share your thoughts"
              variant="outlined" />
          </section>
        </InfoItem>
      </Grid>
    </Grid>
  )
}
