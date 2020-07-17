import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext, useEffect} from 'preact/hooks'

const VideosContext = createContext()
export const useVideos = () => useContext(VideosContext)

export const VideosProvider = ({children}) => {
  const [videos, setVideos] = useState([])
  
  const refreshVideos = async () => {
    fetch('assets/videos.json')
      .then(data => {
        if (data.status === 200) return data.json()
      })
      .then(videos => setVideos(videos || []))
      .catch(console.error)
  }

  useEffect(() => {
    refreshVideos()
  }, [])

  return (
    <VideosContext.Provider value={{
      videos,
      setVideos,
      refreshVideos
    }}>
      {children}
    </VideosContext.Provider>
  )
}
