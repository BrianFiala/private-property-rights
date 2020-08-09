import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'

export default function Topics() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="Rent Control"
          title="Costa Hawkins"
          message="This is about rent control." />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="It's All Going to Hell in a Handbasket"
          title="TPO Ammendments"
          message="(T)enants (P)rotection (O)rdinance. Tenants and housemates without credit checks." />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="This One Will Blow Your Mind"
          title="TOPA"
          message="(T)enant (O)ption to (P)urchase (A)ct. Anyone above the poverty line will be evicted." />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="Reduces Rental Unit Availability"
          title="Prop 21"
          message="Legislators will pile fees on top of standard rent, driving costs up for everyone. " />
      </Grid>
    </Grid>
  )
}
