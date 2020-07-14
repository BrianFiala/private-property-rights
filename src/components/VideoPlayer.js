import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import {useAdminState} from '../contexts/AdminStateProvider'
import VideoAdminMenu from './VideoAdminMenu'
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'

export default function VideoPlayer({ video, sizes }) {
  const {adminModeEnabled} = useAdminState()

  const src = video.host === 'youtube'
    ? `https://www.youtube-nocookie.com/embed/${video.id}`
    : `https://player.vimeo.com/video/${video.id}?dnt=true`

  return (
    <Grid item
      id={`video-${video.id}`}
      xs={video.featured ? 12 : sizes.xs}
      sm={video.featured ? 12 : sizes.sm}
      md={video.featured ? 12 : sizes.md}
      lg={video.featured ? 12 : sizes.lg}
      xl={video.featured ? 12 : sizes.xl}>
      <MyPaper>
        {adminModeEnabled ? (
          <VideoAdminMenu video={video} />
        ) : (
          <>
            <Title>{video.title}</Title>
            <br />
          </>
        )}
        <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
          <iframe
            style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: none;" 
            src={src}
            allowfullscreen /> 
        </div>
      </MyPaper>
    </Grid>
  )
}
