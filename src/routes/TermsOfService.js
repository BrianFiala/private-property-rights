import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import TermsOfServiceDetails from '../components/TermsOfServiceDetails'
import {Grid} from '@material-ui/core'

export default function TermsOfService() {
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
        <TermsOfServiceDetails />
      </Grid>
    </Grid>
  )
}
