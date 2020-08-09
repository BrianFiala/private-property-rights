import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Grid} from '@material-ui/core'
import {useVideos} from '../contexts/VideosProvider'
import VideoPlayer from '../components/VideoPlayer'
import InfoItem from '../components/InfoItem'

export default function About() {
  const {videos, refreshVideos, sizes, videosLoaded} = useVideos()

  useEffect(() => {
    if (!videosLoaded) refreshVideos()
  }, [refreshVideos, videosLoaded])

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="About Us"
          title="Who We Are"
          message="We are a collective of tenants and housing providers that aim to provide a voice for those at risk." />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="Meet the Collective"
          title="Our Stories"
          message="Each of us has a unique perspective. We hope you enjoy hearing our stories." />
      </Grid>
      { videos && videos.map(video => (
        <VideoPlayer
          video={video}
          sizes={sizes} />
      ))}
      <Grid item xs={12} md={12} lg={6}>
        <InfoItem
          identifier="Here's What People Are Saying"
          title="Quotes"
          message={`Steve S., "I've lived in Oakland all my life. I love this city, but I am scared about the direction housing regulation is taking. Where are people going to live when rental providers leave because of overbearing draconian policy?"`} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <InfoItem
          identifier="Some Pretty Pictures"
          title="Here's a Chicken"
          message="We hope you think Cucumber is cute. We think she is turbo-dorbs." />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <InfoItem
          identifier="Cucumber!">
          <img src="/assets/cucumber.jpg" style={{
            width: '100%',
            height: 'auto'
          }} />
        </InfoItem>
      </Grid>
    </Grid>
  )
}
