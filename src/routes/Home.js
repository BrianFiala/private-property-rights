import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {route} from 'preact-router'
import {Grid, Typography} from '@material-ui/core'
import {items, banner, title} from './index.scss'

export default function Home() {
  return (
    <Grid container className={items}>
      <Grid item xs={12} className={banner}>
        <Typography className={title} align="center" component="h1" variant="h1">In It Together</Typography>
      </Grid>
      <Grid item xs={12}>
        <InfoItem
          identifier="identifier"
          title="title"
          message="The majority of Oakland housing providers are small, locally based members of the community"
          buttonAction={() => {route('/issues')}}
          buttonText="Learn More" />
      </Grid>
    </Grid>
  )
}
