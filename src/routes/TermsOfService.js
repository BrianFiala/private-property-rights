import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import TermsOfServiceDetails from '../components/TermsOfServiceDetails'
import {Grid} from '@material-ui/core'

const backToHome = event => {
  event.preventDefault()
  if (typeof window !== 'undefined') window.location.href = '//iitoakland.com'
}

export default function TermsOfService() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          title="We will never share your information with anyone without your explicit consent. Ever."
          buttonText="HOME"
          buttonAction={backToHome} />
      </Grid>
      <Grid item xs={12}>
        <TermsOfServiceDetails />
      </Grid>
    </Grid>
  )
}
