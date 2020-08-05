import {h} from 'preact' /** @jsx h */
import {route} from 'preact-router'
import InfoItem from '../components/InfoItem'
import {Grid, TextField} from '@material-ui/core'
import {textFieldSection, textFieldLeft, textFieldRight, textFieldWide} from './index.scss'

export default function About() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          identifier="About Us"
          title="We are here to help"
          message="We are a collective of tenants and housing providers. The majority of Oakland housing providers are small, locally based members of the community. Tenant and housing provider laws trigger discord both between the housing provider and their tenants, and between tenants themselves."
          buttonAction={() => {route('/issues')}}
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
            label="email (required)"
            variant="outlined" />
        </InfoItem>
      </Grid>
    </Grid>
  )
}
