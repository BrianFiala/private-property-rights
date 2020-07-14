import {h} from 'preact' /** @jsx h */
import {useState, useRef} from 'preact/hooks'
import {
  IconButton,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Paper,
  TextField
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import SettingsIcon from '@material-ui/icons/Settings'
import {useVideos} from '../contexts/VideosProvider'

const styles = {
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  elevated: {
    zIndex: 10
  },
  grow: {
    flexGrow: 1
  }
}

export default function VideoAdminMenu({ video }) {
  const {videos, setVideos} = useVideos()
  const anchorRef = useRef(null)
  const [adminMenuOpen, setAdminMenuOpen] = useState(false)
  const [videoData, setVideoData] = useState(video)

  const toggleMenu = (event) => {
    event.preventDefault()
    setAdminMenuOpen(!adminMenuOpen)
  }

  const deleteVideo = () => {
    setVideos(videos.filter(videoObj => videoObj.id !== video.id))
  }

  return (
    <aside style={styles.heading}>
      <TextField
        style={styles.grow}
        fullwidth
        label="edit"
        defaultValue={videoData.title}
        placeholder={videoData.title}
        variant="outlined" />
      <section>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="delete video"
          onClick={deleteVideo}>
          <DeleteIcon aria-hidden="true" />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="expand menu"
          onClick={toggleMenu}
          ref={anchorRef}>
          <SettingsIcon aria-hidden="true" />
        </IconButton>
        <Popper
          style={styles.elevated}
          open={adminMenuOpen}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal>
          <Grow in={adminMenuOpen}>
            <Paper elevation={10}>
              <ClickAwayListener onClickAway={toggleMenu}>
                <MenuList id="menu-list-grow">
                  <MenuItem onClick={()=>{}}>Edit Title</MenuItem>
                  <MenuItem onClick={()=>{}}>Change Video</MenuItem>
                  <MenuItem onClick={()=>{}}>Commit Changes</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        </Popper>
      </section>
    </aside>
  )
}
