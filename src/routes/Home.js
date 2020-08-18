import {h} from 'preact' /** @jsx h */
import {route} from 'preact-router'
import {Grid} from '@material-ui/core'
import VideoPlayer from '../components/VideoPlayer'
import InfoItem from '../components/InfoItem'
import JoinUs from '../components/JoinUs'
import LogoCard from '../components/LogoCard'
// import {homeItems, banner, bannerSpacer} from './index.scss'
import {homeItems} from './index.scss'

export default function Home() {
  const sizes = {xs: 12, sm: 12, md: 6, lg: 6, xl: 6}
  const video = {
    key: 1,
    title: 'Cool Strobing Sculpture, or Something',
    host: 'vimeo',
    id: '116582567'
  }

  return (
    <Grid container spacing={1} className={homeItems}>
      {/* <Grid item xs={12} className={banner} />
      <Grid item xs={12} className={bannerSpacer} /> */}
      <Grid item xs={12} md={6}>
        <LogoCard />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <InfoItem
          title="We Are In It Together"
          message="A collective of Oakland residents, both housing providers and tenants, united by the need for responsible housing policies that benefit the entire community"
          buttonAction={() => route('/about')}
          buttonText="About Us" />
      </Grid>
      {/* <VideoPlayer video={video} sizes={sizes} autoplay /> */}
      <VideoPlayer video={video} sizes={sizes} />
      <Grid item xs={12} md={6} lg={6}>
        <InfoItem
          title="Who, What, and Why"
          message="We love Oakland, and we are proud to call ourselves Oaklandish. We are long time residents; many of us have lived here all of our lives. We believe in harmonious shared housing. We are deeply concerned about our city's housing policies and the direction our city council is taking us." />
      </Grid>
      <JoinUs />
    </Grid>
  )
}
