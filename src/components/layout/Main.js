import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Router} from 'preact-router'
import {useHeaderState, tabValues} from '../../contexts/HeaderStateProvider'
import Home from '../../routes/Home'
import About from '../../routes/About'
import Topics from '../../routes/Topics'
import Election from '../../routes/Election'
import Resources from '../../routes/Resources'
import TakeAction from '../../routes/TakeAction'
import PrivacyPolicy from '../../routes/PrivacyPolicy'
import TermsOfService from '../../routes/TermsOfService'
import Admin from '../../routes/Admin'
import NotFound from '../../routes/NotFound'

const removeLoader = loader => {
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
  const {setTabValue, setRoute} = useHeaderState()

  useEffect(() => {
    typeof window !== 'undefined' &&
    document.querySelectorAll('.loader-wrapper').forEach(loader => removeLoader(loader))
  }, [])

  const handleRoute = event => {
    setTabValue(tabValues.includes(event.url) ? event.url : false)
    setRoute(event.url)
  }

  return (
    <Router url={url} onChange={handleRoute}>
      <Home path="/" />
      <About path="/about" />
      <Topics path="/topics" />
      <Election path="/election" />
      <Resources path="/resources" />
      <TakeAction path="/takeaction" />
      <PrivacyPolicy path="/privacypolicy" />
      <TermsOfService path="/termsofservice" />
      <Admin path="/admin" />
      <NotFound default />
    </Router>
  )
}