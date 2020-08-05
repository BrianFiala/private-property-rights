import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {route} from 'preact-router'
import {useVideos} from '../contexts/VideosProvider'
import VideoPlayer from '../components/VideoPlayer'
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'
// import {homeItems, banner, bannerSpacer} from './index.scss'
import {homeItems} from './index.scss'

export default function Home() {
  const {videos, refreshVideos, sizes, videosLoaded} = useVideos()

  useEffect(() => {
    if (!videosLoaded) refreshVideos()
  }, [refreshVideos, videosLoaded])

  return (
    <Grid container spacing={1} className={homeItems}>
      {/* <Grid item xs={12} className={banner} />
      <Grid item xs={12} className={bannerSpacer} /> */}
      {videos?.[0] && 
        <VideoPlayer video={videos[0]} sizes={sizes} autoplay />
      }
      <Grid item xs={12}>
        <InfoItem
          identifier="Our Mission Statement"
          title="Why We Take Action"
          message="We are a collective of tenants and housing providers. The majority of Oakland housing providers are small, locally based members of the community. Tenant and housing provider laws trigger discord both between the housing provider and their tenants, and between tenants themselves."
          buttonAction={() => {route('/about')}}
          buttonText="Learn More" />
      </Grid>
      <Grid item xs={6}>
        <InfoItem
          identifier="Our Mission Statement"
          title="Why We Take Action"
          message="We are a collective of tenants and housing providers. The majority of Oakland housing providers are small, locally based members of the community. Tenant and housing provider laws trigger discord both between the housing provider and their tenants, and between tenants themselves."
          buttonAction={() => {route('/news')}}
          buttonText="Learn More" />
      </Grid>
      <Grid item xs={6}>
        <InfoItem
          identifier="Our Mission Statement"
          title="Why We Take Action"
          message="We are a collective of tenants and housing providers. The majority of Oakland housing providers are small, locally based members of the community. Tenant and housing provider laws trigger discord both between the housing provider and their tenants, and between tenants themselves."
          buttonAction={() => {route('/gethelp')}}
          buttonText="Learn More" />
      </Grid>
    </Grid>
  )
}
