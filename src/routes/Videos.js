import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import VideoPlayer from '../components/VideoPlayer'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'
import videos from '../assets/videos'

const sizes = {
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

export default function Videos() {
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
              sizes={sizes} />
          ))}
        </>
      ) : (
        <Grid item xs={12}>
          <MyPaper>
            <Title>We don't have any videos right now, please check back soon!</Title>
          </MyPaper>
        </Grid>
      )}
    </Grid>
  )
}
