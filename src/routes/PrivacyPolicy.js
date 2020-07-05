import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import PrivacyPolicyDetails from '../components/PrivacyPolicyDetails'
import {Grid} from '@material-ui/core'

export default function PrivacyPolicy() {
  const backToHome = event => {
    event.preventDefault()
    window.location.href = '//privatepropertyrights.info'
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          title="We will never share your information with anyone without your explicit consent. Ever."
          buttonAction={backToHome} />
      </Grid>
      <Grid item xs={12}>
        <PrivacyPolicyDetails />
      </Grid>
    </Grid>
  )
}
