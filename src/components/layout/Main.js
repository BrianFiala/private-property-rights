import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Router} from 'preact-router'
import NotFound from '../../routes/NotFound'
import Home from '../../routes/Home'
import Videos from '../../routes/Videos'
import PrivacyPolicy from '../../routes/PrivacyPolicy'
import TermsOfService from '../../routes/TermsOfService'

function removeLoader(loader) {
  requestAnimationFrame(() => {
    loader.style.opacity = 0
    setTimeout(() => {
      requestAnimationFrame(() => {
        loader.remove()
      })
    }, 300)
  })
}

export default function Main() {
  useEffect(() => {
    document.querySelectorAll('.loader-wrapper').forEach(loader => removeLoader(loader))
  }, [])

  return (
    <Router>
      <Home path="/" />
      <Videos path="/videos" />
      <PrivacyPolicy path="/privacypolicy" />
      <TermsOfService path="/termsofservice" />
      <NotFound default />
    </Router>
  )
}