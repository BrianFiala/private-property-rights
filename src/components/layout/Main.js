import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Router} from 'preact-router'
import Home from '../../routes/Home'
import About from '../../routes/About'
import News from '../../routes/News'
import Issues from '../../routes/Issues'
import Calendar from '../../routes/Calendar'
import TakeAction from '../../routes/TakeAction'
import PrivacyPolicy from '../../routes/PrivacyPolicy'
import TermsOfService from '../../routes/TermsOfService'
import Admin from '../../routes/Admin'
import NotFound from '../../routes/NotFound'

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
      <About path="/about" />
      <News path="/news" />
      <Issues path="/issues" />
      <Calendar path="/calendar" />
      <TakeAction path="/takeaction" />
      <PrivacyPolicy path="/privacypolicy" />
      <TermsOfService path="/termsofservice" />
      <Admin path="/admin" />
      <NotFound default />
    </Router>
  )
}