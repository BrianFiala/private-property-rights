import {createContext, h} from 'preact' /** @jsx h */
import {useState, useContext} from 'preact/hooks'

const authenticate = async (googleUser, setUsername, setToken) => {
  const token = googleUser.getAuthResponse().id_token
  const response = await fetch('https://privatepropertyrights.info/auth', {
    withCredentials: true,
    headers: {
      Authorization: token,
      Accept: 'text/html'
    }
  })
  if (response.ok) {
    setToken(token)
    setUsername(await response.text())
  }
}

const AdminStateContext = createContext()
export const useAdminState = () => useContext(AdminStateContext)

export const AdminStateProvider = ({children}) => {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')
  const [adminModeEnabled, setAdminModeEnabled] = useState(false)
  const toggleAdminMode = () => setAdminModeEnabled(!adminModeEnabled)

  if (typeof window !== 'undefined' && !username) {
    window.onSignIn = (googleUser) => authenticate(googleUser, setUsername, setToken)
  }

  return (
    <AdminStateProvider.Provider value={{
      token,
      username,
      setUsername,
      adminModeEnabled,
      toggleAdminMode
    }}>
      {children}
    </AdminStateProvider.Provider>
  )
}
