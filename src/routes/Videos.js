import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import VideoPlayer from '../components/VideoPlayer'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'
import videos from '../assets/videos'

export default function Videos() {
  const mediumSize = () => {
    if (videos.length > 1) return 6
    return 12
  }
  const largeSize = () => {
    switch(videos.length) {
    case 1: return 12
    case 2: return 6
    }
    return 4
  }
  const xLargeSize = () => {
    switch(videos.length) {
    case 1: return 12
    case 2: return 6
    case 3: return 4
    }
    return 3
  }
  
  return (
    <Grid container spacing={3}>
      { videos ? (
        <>
          <Grid item xs={12}>
            <MyPaper>
              <Title>Videos</Title>
            </MyPaper>
          </Grid>
          { videos.map(video => (
            <Grid item
              xs={12}
              md={mediumSize()}
              lg={largeSize()}
              xl={xLargeSize()}>
              <VideoPlayer
                src={video.src}
                title={video.title} />
            </Grid>
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
