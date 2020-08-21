import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import InfoItem from '../components/InfoItem'

export default function Election() {
  return (
    <Grid container
      spacing={2}
      justify="center">
      <Grid item xs={12}>
        <InfoItem
          identifier="Let's See How Our Representatives Are Doing"
          title="Report Cards"
          message="We're going to be very honest here. We are going to give our legislators all the credit they deserve." />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoItem
          title="Bas"
          message="A real politician." />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoItem
          title="Kalb"
          message="Just great. Super." />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoItem
          title="Parker"
          message="What's not to like?" />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoItem
          title="McElhaney"
          message="McElhaney's a real winner." />
      </Grid>
    </Grid>
  )
}
