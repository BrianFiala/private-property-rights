import {h} from 'preact' /** @jsx h */
import {route} from 'preact-router'
import VideoPlayer from '../components/VideoPlayer'
import InfoItem from '../components/InfoItem'
import {
  Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText
} from '@material-ui/core'
// import {homeItems, banner, bannerSpacer} from './index.scss'
import {homeItems, textFieldSection, textFieldLeft, textFieldRight, textFieldWide, subscriberCheckboxes} from './index.scss'

export default function Home() {

  const sizes = {xs: 12, sm: 12, md: 12, lg: 6, xl: 6}
  const video = {
    key: 1,
    title: 'Cool Strobing Sculpture, or Something',
    host: 'vimeo',
    id: '116582567'
  }

  return (
    <Grid container spacing={1} className={homeItems}>
      {/* <Grid item xs={12} className={banner} />
      <Grid item xs={12} className={bannerSpacer} /> */}
      {/* <VideoPlayer video={video} sizes={sizes} autoplay /> */}
      <VideoPlayer video={video} sizes={sizes} />
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="Our Mission Statement"
          title="Why We Take Action"
          message="We are a collective of tenants and housing providers. The majority of Oakland housing providers are small, locally based members of the community. Tenant and housing provider laws trigger discord both between the housing provider and their tenants, and between tenants themselves."
          buttonAction={() => {route('/about')}}
          buttonText="Learn More" />
      </Grid>
      <Grid item xs={12}>
        <InfoItem
          identifier="Stay informed by signing up for news and announcements"
          title="Join Us!"
          message="We will never share your information without your explicit consent. Ever. See our privacy policy for more details."
          buttonAction={() => {}}
          buttonText="Sign Me Up!">
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
    </Grid>
  )
}
