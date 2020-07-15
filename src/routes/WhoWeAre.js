import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {Grid, TextField} from '@material-ui/core'

export default function WhoWeAre() {
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
          <section style={{display: 'flex', flexGrow: 1, marginTop: '12px'}}>
            <TextField
              onChange={() => {}}
              style={{flexGrow: 1, marginRight: '12px'}}
              fullwidth
              label="name (optional)"
              variant="outlined" />
            <TextField
              onChange={() => {}}
              style={{flexGrow: 1, marginLeft: '12px'}}
              fullwidth
              label="phone (optional)"
              variant="outlined" />
          </section>
          <TextField
            onChange={() => {}}
            style={{flexGrow: 1, marginTop: '12px'}}
            fullwidth
            label="email (required)"
            variant="outlined" />
        </InfoItem>
      </Grid>
    </Grid>
  )
}
