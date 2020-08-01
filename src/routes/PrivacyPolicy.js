import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import PrivacyPolicyDetails from '../components/PrivacyPolicyDetails'
import {Grid} from '@material-ui/core'
const backToHome = event => {
  event.preventDefault()
  if (typeof window !== 'undefined') window.location.href = '//privatepropertyrights.info'
}

export default function PrivacyPolicy() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          title="We will never share your information with anyone without your explicit consent. Ever."
          buttonText="HOME"
          buttonAction={backToHome} />
      </Grid>
      <Grid item xs={12}>
        <PrivacyPolicyDetails />
      </Grid>
    </Grid>
  )
}
