import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {Grid, TextField} from '@material-ui/core'
import {textFieldSection, textFieldLeft, textFieldRight, textFieldWide} from './index.scss'

export default function TakeAction() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          identifier="Let us know how we're doing"
          title="We'd like to hear from you!"
          message="Feel free to send us a message anytime."
          buttonText="COOL"
          buttonAction={() => {}} />
      </Grid>

      <Grid item xs={12}>
        <InfoItem
          identifier="Please share your thoughts with us"
          message="Your feedback is guaranteed anonymous unless you want us to know who you are. Your response will be received when you click send. If you'd like us to stay in touch, you can select the checkbox below to include your contact info along with your message."
          buttonAction={() => {}}
          buttonText="SEND!">
          <section className={textFieldSection}>
            <TextField
              onChange={() => {}}
              className={textFieldLeft}
              fullwidth
              label="name (optional)"
              variant="outlined" />
            <TextField
              onChange={() => {}}
              className={textFieldRight}
              fullwidth
              label="phone (optional)"
              variant="outlined" />
          </section>
          <TextField
            onChange={() => {}}
            className={textFieldWide}
            fullwidth
            label="email (optional)"
            variant="outlined" />
          <section className={textFieldSection}>
            <TextField
              autocomplete
              multiline
              rows="15"
              onChange={() => {}}
              className={textFieldLeft}
              fullwidth
              label="Share your thoughts"
              variant="outlined" />
          </section>
        </InfoItem>
      </Grid>
    </Grid>
  )
}
