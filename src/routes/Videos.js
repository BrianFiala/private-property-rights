import {h} from 'preact' /** @jsx h */
import {useEffect, useState} from 'preact/hooks'
import {Grid} from '@material-ui/core'
import VideoPlayer from '../components/VideoPlayer'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'
import InfoItem from '../components/InfoItem'

const sizes = (videos) => {
  return {
    xs: 12,
    sm: 12,
    md: (() => {
      if (videos.length > 1) return 6
      return 12
    })(),
    lg: (() => {
      switch(videos.length) {
      case 1: return 12
      case 2: return 6
      }
      return 4
    })(),
    xl: (() => {
      switch(videos.length) {
      case 1: return 12
      case 2: return 6
      case 3: return 4
      }
      return 3
    })()
  }
}

const refreshVideos = async (setVideos) => {
  fetch('assets/videos.json')
    .then(data => data.json())
    .then(videos => setVideos(videos))
    .catch(console.error)
}

export default function Videos() {
  const [videos, setVideos] = useState()
  
  useEffect(() => {
    refreshVideos(setVideos)
  }, [])
  
  // TODO: add lazy loading of videos
  return (
    <Grid container
      spacing={3}
      justify="center">
      { videos ? (
        <>
          <Grid item xs={12}>
            <MyPaper>
              <Title>Videos</Title>
            </MyPaper>
          </Grid>
          { videos.map(video => (
            <VideoPlayer
              video={video}
              sizes={sizes(videos)} />
          ))}
        </>
      ) : (
        <Grid item xs={12}>
          <InfoItem
            identifier="Videos"
            title="Welcome to the home route"
            message="We don't have any videos right now. Would you like to try again?"
            onClick={() => refreshVideos(setVideos)} />
        </Grid>
      )}
    </Grid>
  )
}
