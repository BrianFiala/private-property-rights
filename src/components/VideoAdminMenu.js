import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import {IconButton, TextField, FormControlLabel, Checkbox, Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import {useVideos} from '../contexts/VideosProvider'

const styles = {
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  grow: {
    flexGrow: 1
  },
  buttons: {
    marginLeft: '16px'
  }
}

export default function VideoAdminMenu({ video }) {
  const {videos, setVideos} = useVideos()
  const [videoData, setVideoData] = useState(video)

  const deleteVideo = () => {
    setVideos(videos.filter(videoObj => videoObj.key !== video.key))
  }

  const editTitle = (event) => {
    setVideoData({
      ...videoData,
      title: event.target.value
    })
  }

  const changeFeatured = () => {
    setVideoData({
      ...videoData,
      featured: !videoData.featured
    })
    // setFeatured(!featured)
  }

  const onSubmit = () => {
    event.preventDefault()
    const newVideos = videos.map(oldVideo => {
      if (oldVideo.key === video.key) return videoData
      return oldVideo
    })
    setVideos(newVideos)
  }

  return (
    <aside style={styles.heading}>
      <TextField
        onChange={editTitle}
        style={styles.grow}
        fullwidth
        label="edit"
        defaultValue={videoData.title}
        placeholder={videoData.title}
        variant="outlined" />
      <section style={styles.buttons}>
        <FormControlLabel
          control={
            <Checkbox
              checked={videoData.featured}
              onChange={changeFeatured}
              name="changeFeatured"
              color="primary" />
          }
          label="Large"
          labelPlacement="end"
        />
        <Button
          variant="outlined"
          onClick={onSubmit}
          color="secondary">
          Submit
        </Button>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="delete video"
          onClick={deleteVideo}>
          <DeleteIcon aria-hidden="true" color="error" />
        </IconButton>
      </section>
    </aside>
  )
}
