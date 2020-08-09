import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'

export default function Topics() {
  return (
    <Grid container spacing={2}>
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
          message="(T)enant (O)ption to (P)urchase (A)ct. A tenant cannot be asked to leave without giving them the opportunity to buy the property at a rate determined by the city (not the free market). If you ever rent your property, you will lose it to the tenant if they decide they want to buy it. If they don't want to buy it, then the option to purchase is extended to a housing coalition. If either the tenant or the coalition decide to purchase, the property is theirs. You will not have a choice in the matter." />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="Reduces Rental Unit Availability"
          title="Prop 21"
          message="Legislators will pile fees on top of standard rent, driving costs up for everyone." />
      </Grid>
    </Grid>
  )
}
