import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {route} from 'preact-router'
import {Grid, useMediaQuery} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import {homeItems, banner, bannerSpacer} from './index.scss'

export default function Home() {
  const theme = useTheme()
  const moreSpace = useMediaQuery(theme.breakpoints.up('xs'))

  return (
    <Grid container spacing={moreSpace ? 3 : 2} className={homeItems}>
      <Grid item xs={12} className={banner} />
      <Grid item xs={12} className={bannerSpacer} />
      <Grid item xs={12}>
        <InfoItem
          elevation={10}
          identifier="Our Mission Statement"
          title="Why We Take Action"
          message="We are a collective of tenants and housing providers. The majority of Oakland housing providers are small, locally based members of the community. Tenant and housing provider laws trigger discord both between the housing provider and their tenants, and between tenants themselves."
          buttonAction={() => {route('/issues')}}
          buttonText="Learn More" />
      </Grid>
      <Grid item xs={6}>
        <InfoItem
          elevation={10}
          identifier="Our Mission Statement"
          title="Why We Take Action"
          message="We are a collective of tenants and housing providers. The majority of Oakland housing providers are small, locally based members of the community. Tenant and housing provider laws trigger discord both between the housing provider and their tenants, and between tenants themselves."
          buttonAction={() => {route('/issues')}}
          buttonText="Learn More" />
      </Grid>
      <Grid item xs={6}>
        <InfoItem
          elevation={10}
          identifier="Our Mission Statement"
          title="Why We Take Action"
          message="We are a collective of tenants and housing providers. The majority of Oakland housing providers are small, locally based members of the community. Tenant and housing provider laws trigger discord both between the housing provider and their tenants, and between tenants themselves."
          buttonAction={() => {route('/issues')}}
          buttonText="Learn More" />
      </Grid>
    </Grid>
  )
}
