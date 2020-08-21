import {h} from 'preact' /** @jsx h */
import {Grid, Typography} from '@material-ui/core'
import InfoItem from '../components/InfoItem'

export default function Topics() {
  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} md={12} lg={6}>
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
      </Grid> */}
      <Grid item xs={12}>
        <InfoItem
          identifier="This One Will Blow Your Mind"
          title="TOPA">
          <Typography color="textPrimary" variant="h6">
            The Oakland City Council is currently considering a radical ordinance called TOPA (Tenant’s Opportunity to Purchase Act).
            The text of the ordinance is currently being withheld from the public by its authors, yet all indications currently point
            to the legislation being similar, if not identical to, the TOPA ordinance recently shelved in Berkeley and the proposal
            that was defeated in Richmond last year after overwhelming non-partisan opposition.
            <br />
            <br />
            TOPA is being sold as a way to prevent displacement and promote ownership opportunities for tenants by giving them first right
            to buy the property they live in. However, once the public is given the opportunity to read the specific details of the legislation,
            it will quickly become clear that this proposal will not create opportunity for any of our residents.
            <b> It uses our underprivileged as a front to grant the city the power to dictate how properties are sold, to who they can be sold,
            and even how much they can be sold for.</b> <u>All while solely benefitting third party special interest groups.</u>
          </Typography>
        </InfoItem>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoItem
          identifier="Renters"
          message="Does buying a property that the city controls but you have to pay for sound good to you? TOPA would essentially remove all the financial benefits and freedom of ownership (appreciation, income, tenancy control), and leave you with all the responsi- bilities. How is that a worthwhile investment? Once the city forces the deed restriction on the property to make it “permanently affordable”, what is that property then worth to you and others? Would a bank even grant a borrower a loan under these conditions?" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoItem
          identifier="Homeowners/property owners"
          message="How would you feel if the sale price you must offer your property to a tenant was dictated by a “city approved” appraiser? And how about regulations that could delay a sale indefinitely? What if you need to sell quickly, or want to sell your property to a friend, neighbor, or family member? Under TOPA, the freedom to sell your property in the manner in which you choose for the price which you choose would go out the window." />
      </Grid>
      <Grid item xs={12}>
        <InfoItem identifier="So Who Does This Benefit?">
          <Typography color="textPrimary" variant="h6">
            So who looks to benefit from this ordinance? If you read the ordinance it quickly becomes clear: it’s <b>special interests groups</b>. Third party developers that can have the tenant’s TOPA rights transferred to them, leverage them against the owner, then later claim special exemptions from regulation.
            <br />
            <br />
            Key issues of the ordinance are listed below:
            <ul>
              <li>Gives tenants Right of First Refusal/Offer to purchase a property before any rental property may be sold in an arms-length transaction.</li>
              <li>Allows for the sales price of the property offered to tenant(s) or third party be set by the City through a "city approved" appraiser.</li>
              <li>Any tenant who purchases a property through TOPA would be required to grant the city the power to control its future renters, rent levels, and allowable property value for 99 years through a deed restriction</li>
              <li>Prevents a property from going on the market for sale until every tenant waives his or her rights in writing, and creates lengthy, unpredictable time periods in which a sale, or lack thereof can be delayed indefinitely.</li>
              <li>Allows qualified tenants to transfer these rights to a third party developer for each potential sale of property.</li>
              <li>The ordinance would cover all rental property, from a single family house up to the largest apartment building</li>
              <li>Any owner who is found in violation of the regulatory process could be fined $1000/per day per unit</li>
            </ul>
            <br />
            This is not a pro-tenant or pro-property owner argument; both sides will be harmed. TOPA only benefits outside special interest groups at the expense of everyone else and our City as a whole. Let’s protect our City from this destructive proposal, band together, and demand the City Council Stop TOPA.
          </Typography>
        </InfoItem>
      </Grid>
      {/* <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="Reduces Rental Unit Availability"
          title="Prop 21"
          message="Legislators will pile fees on top of standard rent, driving costs up for everyone." />
      </Grid> */}
    </Grid>
  )
}
