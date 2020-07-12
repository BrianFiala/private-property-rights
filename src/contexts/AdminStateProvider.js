import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

const handleErrors = (res) => {
  if (!res.ok) throw Error(`${res.status} ${res.statusText}`)
  return res
}

const authenticate = async (googleUser, setUserProfile) => {
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

const AdminStateContext = createContext()
export const useAdminState = () => useContext(AdminStateContext)

export const AdminStateProvider = ({children}) => {
  const [userProfile, setUserProfile] = useState()
  const [adminModeEnabled, setAdminModeEnabled] = useState(false)
  const toggleAdminMode = () => setAdminModeEnabled(!adminModeEnabled)
  const logout = () => {
    setUserProfile(null)
    setAdminModeEnabled(false)
  }

  if (typeof window !== 'undefined')
    window.onSignIn = (googleUser) => {
      authenticate(googleUser, setUserProfile)
    }

  return (
    <AdminStateContext.Provider value={{
      userProfile,
      adminModeEnabled,
      setAdminModeEnabled,
      logout,
      toggleAdminMode
    }}>
      {children}
    </AdminStateContext.Provider>
  )
}
