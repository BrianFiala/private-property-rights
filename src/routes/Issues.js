import {h} from 'preact' /** @jsx h */
import RefreshIcon from '@material-ui/icons/Refresh'
import {Grid, IconButton} from '@material-ui/core'
import {useVideos} from '../contexts/VideosProvider'
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
      return 6
    })(),
    xl: (() => {
      switch(videos.length) {
      case 1: return 12
      case 2: return 6
      case 3: return 6
      }
      return 6
    })()
  }
}


const styles = {
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

export default function Issues() {
  const {videos, refreshVideos} = useVideos()
  
  // TODO: add lazy loading of videos
  return (
    <Grid container
      spacing={3}
      justify="center">
      <Grid item xs={12}>
        {videos && videos.length ? (
          <MyPaper>
            <aside style={styles.heading}>
              <Title>Videos</Title>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="refresh videos"
                onClick={refreshVideos}>
                <RefreshIcon aria-hidden="true" color="primary" />
              </IconButton>
            </aside>
          </MyPaper>
        ): (
          <InfoItem
            identifier="Videos"
            message="We don't have any videos right now. Would you like to try again?"
            buttonText="Refresh"
            buttonAction={refreshVideos} />
        )}
      </Grid>
      { videos && videos.map(video => (
        <VideoPlayer
          video={video}
          sizes={sizes(videos)} />
      ))}
    </Grid>
  )
}