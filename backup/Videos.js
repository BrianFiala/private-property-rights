import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import RefreshIcon from '@material-ui/icons/Refresh'
import {Grid, IconButton} from '@material-ui/core'
import {useVideos} from '../contexts/VideosProvider'
import VideoPlayer from '../components/VideoPlayer'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'
import InfoItem from '../components/InfoItem'
import {heading} from './index.scss'

export default function Videos() {
  const {videos, refreshVideos, sizes, videosLoaded} = useVideos()

  useEffect(() => {
    if (!videosLoaded) refreshVideos()
  }, [refreshVideos, videosLoaded])
  
  // TODO: add lazy loading of videos
  return (
    <Grid container
      spacing={3}
      justify="center">
      <Grid item xs={12}>
        {videos && videos.length ? (
          <MyPaper elevation={10}>
            <aside className={heading}>
              <Title color="secondary">Videos</Title>
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
            elevation={10}
            identifier="Videos"
            message="We don't have any videos right now. Would you like to try again?"
            buttonText="Refresh"
            buttonAction={refreshVideos} />
        )}
      </Grid>
      { videos && videos.map(video => (
        <VideoPlayer
          video={video}
          sizes={sizes} />
      ))}
    </Grid>
  )
}
