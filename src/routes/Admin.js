import {h} from 'preact' /** @jsx h */
import {Grid, Button, Typography} from '@material-ui/core'
import {useAdminState} from '../contexts/AdminStateProvider'
import Title from '../components/Title'
import MyPaper from '../components/MyPaper'

export default function Admin() {
  const {userProfile, adminModeEnabled, toggleAdminMode} = useAdminState()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MyPaper elevation={10}>
          {userProfile ? (<>
            <Typography variant="h3">Welcome {userProfile.username}</Typography><br />
            <Button color="primary" size="large"
              onClick={toggleAdminMode}>
              {`${adminModeEnabled ? 'Disable' : 'Enable'} Admin Mode`}
            </Button>
          </>) : (<>
            <Title color="secondary">Please signin to continue</Title><br />
          </>)}
          <div style={`${userProfile ? 'display: none;' : ''}`}
            class="g-signin2" data-onsuccess="onSignIn"
            data-height="48" data-width="230"
            data-theme="dark" data-longtitle="true" />
          <script async src="https://apis.google.com/js/platform.js" />
        </MyPaper>
      </Grid>
    </Grid>
  )
}
