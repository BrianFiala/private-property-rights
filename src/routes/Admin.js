import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Grid, Button} from '@material-ui/core'
import {useAdminState} from '../contexts/AdminStateProvider'
import Title from '../components/Title'
import MyPaper from '../components/MyPaper'

export default function Admin() {
  const {username, adminModeEnabled, toggleAdminMode} = useAdminState()
  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.setAttribute('src', 'https://apis.google.com/js/platform.js')
    document.body.appendChild(scriptTag)
  }, [])


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {username ? (
          <MyPaper>
            <Title>Welcome {username}</Title><br />
            <Button color="primary" size="large"
              onClick={toggleAdminMode}>
              {`${adminModeEnabled ? 'Disable' : 'Enable'} Admin Mode`}
            </Button>
          </MyPaper>
        ) : (
          <MyPaper>
            <Title>Please signin with Google to continue</Title><br />
            <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
          </MyPaper>
        )}
      </Grid>
    </Grid>
  )
}