import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {
  Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox
} from '@material-ui/core'
import {textFieldSection, textFieldLeft, textFieldRight, textFieldWide, subscriberCheckboxes} from './index.scss'

export default function Home() {
  return (
    <Grid item xs={12}>
      <InfoItem
        identifier="Stay informed by signing up for news and announcements"
        title="Join Us!"
        message="We will never share your information without your explicit consent. Ever. Your information will be stored with strict confidentiality. All we require is your email, but anything else you are willing to share will really help."
        buttonAction={() => {}}
        buttonText="Sign Me Up!">
        <br />
        <section className={textFieldSection}>
          <TextField
            onChange={() => {}}
            className={textFieldLeft}
            fullwidth
            label="first name (optional)"
            variant="outlined" />
          <TextField
            onChange={() => {}}
            className={textFieldRight}
            fullwidth
            label="last name (optional)"
            variant="outlined" />
        </section>
        <section className={textFieldSection}>
          <TextField
            onChange={() => {}}
            className={textFieldLeft}
            fullwidth
            label="email (required)"
            variant="outlined" />
          <TextField
            onChange={() => {}}
            className={textFieldRight}
            fullwidth
            label="phone (optional)"
            variant="outlined" />
        </section>
        <FormControl component="fieldset" className="">
          <section className={subscriberCheckboxes}>
            <aside>
              <FormLabel color="secondary" component="legend">Which of these describe you?</FormLabel><br />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="renter" />}
                  label="home renter"
                />
                <FormControlLabel
                  control={<Checkbox name="owner" />}
                  label="home owner"
                />
                <FormControlLabel
                  control={<Checkbox name="provider" />}
                  label="rental home owner"
                />
              </FormGroup>
            </aside>
            <aside>
              <FormLabel color="secondary" component="legend">What are you interested in?</FormLabel><br />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="updates" />}
                  label="news updates"
                />
                <FormControlLabel
                  control={<Checkbox name="action" />}
                  label="action items"
                />
                <FormControlLabel
                  control={<Checkbox name="volunteering" />}
                  label="volunteering"
                />
              </FormGroup>
            </aside>
          </section>
        </FormControl>
        <section className={textFieldSection}>
          <TextField
            autocomplete
            multiline
            rows="15"
            onChange={() => {}}
            className={textFieldWide}
            fullwidth
            label="Share your thoughts"
            variant="outlined" />
        </section>
      </InfoItem>
    </Grid>
  )
}
