import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Router} from 'preact-router'
import NotFound from '../../routes/NotFound'
import Home from '../../routes/Home'
import ActionItems from '../../routes/ActionItems'
import CityCouncil from '../../routes/CityCouncil'
import Videos from '../../routes/Videos'
import WhoWeAre from '../../routes/WhoWeAre'
import Feedback from '../../routes/Feedback'
import Admin from '../../routes/Admin'
import PrivacyPolicy from '../../routes/PrivacyPolicy'
import TermsOfService from '../../routes/TermsOfService'

const removeLoader = (loader) => {
  requestAnimationFrame(() => {
    loader.style.opacity = 0
    setTimeout(() => {
      requestAnimationFrame(() => {
        loader.remove()
      })
    }, 300)
  })
}

export default function Main({url}) {
  useEffect(() => {
    document.querySelectorAll('.loader-wrapper').forEach(loader => removeLoader(loader))
  }, [])

  return (
    <Router url={url}>
      <Home path="/" />
      <ActionItems path="/actionitems" />
      <CityCouncil path="/citycouncil" />
      <Videos path="/videos" />
      <WhoWeAre path="/whoweare" />
      <Feedback path="/feedback" />
      <Admin path="/admin" />
      <PrivacyPolicy path="/privacypolicy" />
      <TermsOfService path="/termsofservice" />
      <NotFound default />
    </Router>
  )
}