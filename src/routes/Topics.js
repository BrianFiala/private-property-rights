import {h} from 'preact' /** @jsx h */
import {Grid, Typography, Link, Button} from '@material-ui/core'
import InfoItem from '../components/InfoItem'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'

export default function Topics() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MyPaper>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Title color="secondary">STOP Taking Our Property Away</Title><br />
              <Typography color="primary" variant="h3">TOPA</Typography><br />
            </Grid>
            <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
              <img
                src="/assets/stop-topa.png"
                alt="stop topa logo"
                style={{width: '100%', maxWidth: '200px'}} />
            </Grid>
            <Grid container item xs={12}>
              <Typography color="textPrimary">
                <br /><br />
                The Oakland City Council is currently considering a radical ordinance called TOPA
                (Tenant’s Opportunity to Purchase Act).
                The text of the ordinance is being withheld from the public by its authors,
                yet all indications point to the legislation being similar, if not identical to,
                the TOPA ordinance recently shelved in Berkeley and the proposal that was defeated
                in Richmond last year after overwhelming non-partisan <span style={{marginRight: '16px'}}>opposition.</span>
                <Link target="_blank" style={{whiteSpace: 'nowrap'}}
                  href="https://drive.google.com/file/d/1CKf9vhefXLrhxFLLu1FjktdHrrJ6tt9O/view?usp=sharing">
                  <span> Read the Berkeley Ordinance here</span>
                </Link>
                <br /><br />
                TOPA is being claimed as a way to prevent displacement and promote ownership
                opportunities for tenants by giving them first right to buy the property they live in.
                However, once the public is given the opportunity to read the specific details of the
                legislation, it will quickly become clear that this proposal will not create
                opportunity for any of our residents.
                <b>
                  It uses our underprivileged as a front to grant the city the power to dictate how
                  properties are sold, to who they can be sold, and even how much they can be sold for.
                </b>
                All while solely benefitting third party special interest groups.
                <br /><br />
              </Typography>
              <Button
                color="secondary"
                variant="outlined"
                fullWidth
                style={{
                  borderRadius: '20px',
                  marginTop: '16px'
                }}
                size="large">
                <Link target="_blank"
                  href="https://www.change.org/p/oakland-city-council-oppose-oakland-s-topa-ordinance">
                  Sign the petition here, we already have 2700 plus signatures!
                </Link>
              </Button>
            </Grid>
          </Grid>
        </MyPaper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoItem identifier="Renters">
          <Typography color="textPrimary">
            Does buying a property that the city controls but you have to pay for sound good to you?
            TOPA would essentially remove all the financial benefits and freedom of ownership
            (appreciation, income, tenancy control), and leave you with all the responsibilities.
            How is that a worthwhile investment? Once the city forces the deed restriction on the
            property to make it “permanently affordable”, what is that property then worth to you
            and others? Would a bank even grant a borrower a loan under these conditions?
            <br /><br />
            If you wish to continue renting after the building becomes permanently affordable,
            you will very likely be evicted for not qualifying for affordable housing.
          </Typography>
        </InfoItem>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoItem
          identifier="Homeowners/property owners"
          message="How would you feel if the sale price you must offer your property to a tenant was dictated by a “city approved” appraiser? And how about regulations that could delay a sale indefinitely? What if you need to sell quickly, or want to sell your property to a friend, neighbor, or family member? Under TOPA, the freedom to sell your property in the manner in which you choose for the price which you choose would go out the window." />
      </Grid>
      <Grid item xs={12}>
        <MyPaper>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Title color="secondary">So Who Does This Benefit?</Title><br />
              <Typography color="primary" variant="h3">No One Wins</Typography><br />
            </Grid>
            <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
              <img
                src="/assets/bright-ideas.png"
                alt="bright ideas graphic"
                style={{width: '100%', maxWidth: '300px'}} />
            </Grid>
            <Grid container item xs={12}>
              <Typography color="textPrimary">
                <br /><br />
                So who looks to benefit from this ordinance? If you read the ordinance it quickly becomes clear: it’s <b>special interests groups</b>. Third party developers that can have the tenant’s TOPA rights transferred to them, leverage them against the owner, then later claim special exemptions from regulation.
                <br /><br />
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
                <br /><br />
                Click here to email City Council to Stop TOPA.
              </Typography>
            </Grid>
          </Grid>
        </MyPaper>
      </Grid>
      <Grid item xs={12}>
        <MyPaper>
          <img
            src="/assets/topa-price-chart.png"
            alt="topa price determination chart"
            style={{width: '100%'}} />
        </MyPaper>
      </Grid>
      <Grid item xs={12}>
        <MyPaper>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Title color="secondary">Facts & Myths About TOPA</Title><br />
              <Typography color="primary" variant="h3">Fact Check</Typography><br />
            </Grid>
            <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
              <img
                src="/assets/facts-myths.png"
                alt="bright ideas graphic"
                style={{width: '100%', maxWidth: '300px'}} />
            </Grid>
            <Grid container item xs={12}>
              <Typography color="textPrimary">
                <br /><br />
                MYTH: The owner gets the fair market price.
                <br /><br />
                FACT: If the tenant or nonprofit wants to purchase the property and the property does not go out on the open market, then the "fair market price" is never really determined. The fair market price is the price the market will bear. This fully disrupts the normal process of sale of residential real estate.
                <br /><br />
                MYTH: TOPA is the only way tenants have a chance at purchasing a property.
                <br /><br />
                FACT: Tenants currently have a chance to buy the property they occupy. In fact many times they have a direct line into the owner to request negotiating to sale --something the standard marketplace does not. But securing financing is difficult andr many times tenants will not have the financing they need to compete in the marketplace. Remember, TOPA does not provide tenants with financing. It only provides them with a lengthy amount of time to figure out if they can secure financing.
                Tenant occupied multi-unit properties often remain on the market for long periods of time in rent-regulated cities. They will on average, sell below listing price. Nonprofits and Land Use trusts can easily buy these properties on the open market using subsidies from the City, along with the state's infusion of money aimed at affordable housing. 
                <br /><br />
                MYTH: TOPA stabilizes existing housing for tenants and preserves affordable housing.
                <br /><br />
                FACT: Berkeley is a highly-regulated, rent controlled city with strong protections given to tenants. The idea that tenants will lose their housing, or that their housing will automatically become unaffordable due to a change in ownership is untrue. Any new owner will also be subject to rent control and their tenants will have eviction protections.
                <br /><br />
                MYTH: TOPA is the best use of affordable housing funds
                <br /><br />
                FACT: TOPA will cost the City of Berkeley more than $1m annually just to administer. That's money that could be used for rent assistance, homelessness services or a myriad of other housing-related needs. 
                <br /><br />
                MYTH: TOPA combats homelessness.
                <br /><br />
                FACT: TOPA has been in existence in Washington D.C. for 40 years. D.C.'s population is 705,000 with a homeless population estimated around 6,000. Oakland has a population around 420,000 with an estimated homeless population of 4,000. Berkeley has a population of 122,000 with an estimated number of homeless at 1,100. The ratios between the three cities are remarkably the same. There is no proof TOPA has reduced the homeless population in D.C.
                <br /><br />
                MYTH: TOPA helped tenants and nonprofits acquire a lot of rental housing in D.C.
                <br /><br />
                FACT: From Oct. 26, 2009, through Aug. 15, 2015, out of 398 TOPA offers only 19 were successful. From 1980-2002, there is no data showing any rental housing was acquired by tenants or nonprofits under TOPA. In 2002, the program received an infusion of funding which allowed for the "preservation" of 3,500 units (that's units, not properties) from 2002-2018. In that scenario it is clear that funding was the key contributor to the ability to purchase -- not TOPA.
              </Typography>
            </Grid>
          </Grid>
        </MyPaper>
      </Grid>
    </Grid>
  )
}
