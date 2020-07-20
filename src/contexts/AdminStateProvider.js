import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'
import {useVideos} from '../contexts/VideosProvider'

const handleErrors = (res) => {
  if (!res.ok) throw Error(`${res.status} ${res.statusText}`)
  return res
}

const authenticate = (googleUser, setUserProfile) => {
  const token = googleUser.getAuthResponse().id_token
  if (token)
    fetch('/auth', {
      headers: {
        Authorization: token,
        Accept: 'application/json, text/plain, text/html'
      }
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(data => setUserProfile(data))
      .catch(console.error) // provide feedback to user
}

const sendUpdate = data => {
  fetch('/update', {
    method: 'POST',
    body: JSON.stringify(data)
  }).catch(console.error) // provide feedback to user
}

const AdminStateContext = createContext()
export const useAdminState = () => useContext(AdminStateContext)

export const AdminStateProvider = ({children}) => {
  const {videos} = useVideos()
  const [updateData, setUpdateData] = useState()
  const [userProfile, setUserProfile] = useState()
  const [adminModeEnabled, setAdminModeEnabled] = useState(false)
  const toggleAdminMode = () => setAdminModeEnabled(!adminModeEnabled)
  
  const logout = () => {
    // TODO: disconnect from google
    setUserProfile(null)
    setAdminModeEnabled(false)
  }

  const commitAllChanges = () => {
    console.log('commiting all changes')
    sendUpdate(videos)
  }

  if (typeof window !== 'undefined') {
    window.onSignIn = (googleUser) => {
      authenticate(googleUser, setUserProfile)
    }
  }

  return (
    <AdminStateContext.Provider value={{
      userProfile,
      adminModeEnabled,
      setAdminModeEnabled,
      logout,
      toggleAdminMode,
      commitAllChanges,
      updateData,
      setUpdateData
    }}>
      {children}
    </AdminStateContext.Provider>
  )
}
