import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import InfoItem from '../components/InfoItem'

export default function Resources() {
  return (
    <Grid container
      spacing={3}
      justify="center">
      <Grid item xs={12} md={6}>
        <InfoItem
          identifier="United Way Bay Area" />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoItem
          identifier="Catholic Charities East Bay" />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoItem
          identifier="ECHO Housing" />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoItem
          identifier="Rent Adjustment Program" />
      </Grid>
    </Grid>
  )
}
