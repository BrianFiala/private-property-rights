import {h} from 'preact' /** @jsx h */
import {
  Grid, TextField, FormControl, FormLabel, FormGroup,
  FormControlLabel, Checkbox, Typography, Button
} from '@material-ui/core'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'
import {
  textFieldSection, textFieldLeft, textFieldRight,
  textFieldWide, subscriberCheckboxes
} from './index.scss'

export default function Home() {
  return (
    <Grid item xs={12}>
      <MyPaper elevation={10}>
        <Title color="secondary">Stay informed by signing up for news and announcements</Title><br />
        <Typography color="primary" variant="h3">Join Us!</Typography><br />
        <Typography color="textPrimary" variant="body1">We will never share your information without your explicit consent. Ever. Your information will be stored with strict confidentiality. All we require is your email, but anything else you are willing to share will really help.</Typography>
        <br />
        <form id="join-us-form" action="/subscribe" method="post">
          <section className={textFieldSection}>
            <TextField
              name="first"
              onChange={() => {}}
              className={textFieldLeft}
              fullwidth
              label="first name (optional)"
              variant="outlined" />
            <TextField
              name="last"
              onChange={() => {}}
              className={textFieldRight}
              fullwidth
              label="last name (optional)"
              variant="outlined" />
          </section>
          <section className={textFieldSection}>
            <TextField
              name="email"
              onChange={() => {}}
              className={textFieldLeft}
              fullwidth
              label="email (required)"
              variant="outlined" />
            <TextField
              name="phone"
              onChange={() => {}}
              className={textFieldRight}
              fullwidth
              label="phone (optional)"
              variant="outlined" />
          </section>
          <section className={subscriberCheckboxes}>
            <FormControl component="fieldset">
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
            </FormControl>
            <FormControl component="fieldset">
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
            </FormControl>
          </section>
          <section className={textFieldSection}>
            <TextField
              name="message"
              autocomplete
              multiline
              rows="15"
              onChange={() => {}}
              className={textFieldWide}
              fullwidth
              label="Share your thoughts"
              variant="outlined" />
          </section>
          <Button
            style={{marginTop: '16px', width: '100%'}}
            color="secondary"
            size="large"
            type="submit">
            SIGN ME UP!
          </Button>
        </form>
      </MyPaper>
    </Grid>
  )
}
