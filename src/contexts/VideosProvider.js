import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

const VideosContext = createContext()
export const useVideos = () => useContext(VideosContext)

export const VideosProvider = ({children}) => {
  const [videos, setVideos] = useState([])
  const [videosLoaded, setVideosLoaded] = useState(false)
  
  const refreshVideos = () => {
    fetch('/assets/videos.json')
      .then(res => {
        if (res.status === 200) {
          setVideosLoaded(true)
          return res.json()
        }
      })
      .then(videos => setVideos(videos || []))
      .catch(console.error)
  }

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

  return (
    <VideosContext.Provider value={{
      videos,
      setVideos,
      videosLoaded,
      refreshVideos,
      sizes
    }}>
      {children}
    </VideosContext.Provider>
  )
}
