import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import {useTheme, makeStyles} from '@material-ui/core/styles'
import {IconButton, TextField, FormControlLabel, Checkbox, Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import {useVideos} from '../contexts/VideosProvider'

const useStyles = makeStyles(theme => ({
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1.5)
  },
  grow: {
    flexGrow: 1
  },
  buttons: {
    marginLeft: theme.spacing(2)
  }
}))

export default function VideoAdminMenu({ video }) {
  const classes = useStyles(useTheme())
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
    <aside className={classes.heading}>
      <TextField
        onChange={editTitle}
        className={classes.grow}
        fullwidth
        label="edit"
        defaultValue={videoData.title}
        placeholder={videoData.title}
        variant="outlined" />
      <section className={classes.buttons}>
        <FormControlLabel
          label="Large"
          labelPlacement="end"
          control={
            <Checkbox
              checked={videoData.featured}
              onChange={changeFeatured}
              name="changeFeatured"
              color="primary" />
          } />
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
