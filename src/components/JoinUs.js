import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import {
  Grid, TextField, FormControl, FormLabel, FormGroup,
  FormControlLabel, Checkbox, Typography, Button,
  InputLabel, Select, MenuItem, Dialog, FormHelperText,
} from '@material-ui/core'
import MyPaper from '../components/MyPaper'
import LogoCard from '../components/LogoCard'
import Title from '../components/Title'
import { textFieldWide, votingDistrictSelect } from './index.scss'

export default function Home() {
  const [resident, setResident] = useState(false)
  const [votingDistrict, setVotingDistrict] = useState('')
  const [thankYouOpen, setThankYouOpen] = useState(false)
  const [oopsOpen, setOopsOpen] = useState(false)
  const [mapOpen, setMapOpen] = useState(false)

  const handleThankYouClose = () => {
    setThankYouOpen(false)
  }

  const openMap = () => {
    setMapOpen(true)
  }

  const handleMapClose = () => {
    setMapOpen(false)
  }

  const handleOopsClose = () => {
    setOopsOpen(false)
  }

  const changeResidency = (event) => {
    const isResident = event.target.checked
    if (!isResident) setVotingDistrict('')
    setResident(isResident)
  }

  const changeDistrict = (event) => {
    setVotingDistrict(event.target.value)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const res = await fetch('/subscribe', {
      method: 'POST',
      body: formData
    })

    if (res.ok) {
      console.log('groovy')
      setThankYouOpen(true)
      event.target.reset()
    }
    else {
      setOopsOpen(true)
      console.log('bogus')
    }

    setTimeout(() => {
      console.log('thank you closing')
      handleThankYouClose()
      handleOopsClose()
    }, 2300)
  }

  return (
    <Grid item xs={12}>
      <MyPaper elevation={10}>
        <Title color="secondary">Stay informed by signing up for news and announcements</Title><br />
        <Typography color="primary" variant="h3">Join Us!</Typography><br />
        <Typography color="textPrimary" variant="body1">We will never share your information without your explicit consent. Ever. Your information will be stored with strict confidentiality. All we require is your email, but anything else you are willing to share will really help.</Typography>
        <form id="join-us-form" onSubmit={onSubmit}>
          <Grid container spacing={2} style={{marginTop: '16px'}}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="first"
                onChange={() => {}}
                style={{display: 'flex', marginTop: '16px'}}
                fullwidth
                label="first name (optional)"
                variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="last"
                onChange={() => {}}
                style={{display: 'flex', marginTop: '16px'}}
                fullwidth
                label="last name (optional)"
                variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                type="email"
                onChange={() => {}}
                style={{display: 'flex', marginTop: '16px'}}
                fullwidth
                required
                label="email (required)"
                variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phone"
                type="tel"
                onChange={() => {}}
                style={{display: 'flex', marginTop: '16px'}}
                fullwidth
                label="phone (optional)"
                variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} justify="center" style={{display: 'flex', marginTop: '16px'}}>
              <FormControl component="fieldset" style={{width: '230px'}}>
                <FormLabel color="secondary" component="legend">Which of these describe you?</FormLabel><br />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="renter" />}
                    label="home renter" />
                  <FormControlLabel
                    control={<Checkbox name="owner" />}
                    label="home owner" />
                  <FormControlLabel
                    control={<Checkbox name="provider" />}
                    label="rental home owner" />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} justify="center" style={{display: 'flex', marginTop: '16px'}}>
              <FormControl component="fieldset" style={{width: '230px'}}>
                <FormLabel color="secondary" component="legend">What are you interested in?</FormLabel><br />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="updates" />}
                    label="news updates" />
                  <FormControlLabel
                    control={<Checkbox name="action" />}
                    label="action items" />
                  <FormControlLabel
                    control={<Checkbox name="volunteering" />}
                    label="volunteering" />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} justify="center" style={{display: 'flex', marginTop: '16px'}}>
              <FormControl component="fieldset" style={{width: '230px'}}>
                <FormLabel color="secondary" component="legend">Residency and Employment</FormLabel><br />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="resident" onChange={changeResidency} />}
                    label="Do you live in Oakland?" />
                  <FormControlLabel
                    control={<Checkbox name="worker" />}
                    label="Do you work in Oakland?" />
                  <FormControlLabel
                    control={<Checkbox name="tenantWorkers" />}
                    label="Are you an employer in Oakland?" />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} justify="center" style={{display: 'flex', marginTop: '16px'}}>
              <FormControl
                style={{width: '230px'}}
                variant="outlined"
                className={votingDistrictSelect}
                disabled={!resident}>
                <InputLabel id="voting-district-label">Voting District</InputLabel>
                <Select
                  labelId="voting-district-label"
                  id="voting-district"
                  value={votingDistrict}
                  onChange={changeDistrict}
                  name="votingDistrict"
                  label="Voting District">
                  <MenuItem value=""><em>Decline</em></MenuItem>
                  <MenuItem value={1}>District 1</MenuItem>
                  <MenuItem value={2}>District 2</MenuItem>
                  <MenuItem value={3}>District 3</MenuItem>
                  <MenuItem value={4}>District 4</MenuItem>
                  <MenuItem value={5}>District 5</MenuItem>
                  <MenuItem value={6}>District 6</MenuItem>
                  <MenuItem value={7}>District 7</MenuItem>
                </Select>
                <FormHelperText>
                  <Button
                    onClick={openMap}
                    // style={{marginTop: '16px', width: '100%'}}
                    color="secondary"
                    size="large"
                    type="button">
                    Find your district here
                  </Button>
                  {/* <Link
                    target="_blank"
                    href="http://gisapps1.mapoakland.com/councildistricts/"
                    variant="h6">
                    
                  </Link> */}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                autocomplete
                multiline
                rows="10"
                inputProps={{maxLength: 3000}}
                onChange={() => {}}
                className={textFieldWide}
                fullwidth
                label="Share your thoughts"
                variant="outlined" />
              <Button
                style={{marginTop: '16px', width: '100%'}}
                color="secondary"
                size="large"
                type="submit">
                SIGN ME UP!
              </Button>
            </Grid>
          </Grid>
        </form>
      </MyPaper>
      <Dialog open={thankYouOpen} onClose={handleThankYouClose} maxWidth="xs" fullWidth>
        <LogoCard title="Thank You!" message="We Are In It Together!" />
      </Dialog>
      <Dialog open={oopsOpen} onClose={handleOopsClose} maxWidth="xs" fullWidth>
        <LogoCard title="Oops. We were unable to process your info." message="Please check your details and try again." />
      </Dialog>
      <Dialog open={mapOpen} onClose={handleMapClose} maxWidth="md" fullWidth>
        <MyPaper>
          <iframe
            title="Map of Oakland Voting Districts"
            style="width: 100%; height: 60vh;" 
            src="http://gisapps1.mapoakland.com/councildistricts/" /> 
          <Button
            onClick={handleMapClose}
            style={{marginTop: '16px'}}
            color="secondary"
            size="large"
            type="button">
          CLOSE MAP
          </Button>
        </MyPaper>
      </Dialog>
    </Grid>
  )
}
