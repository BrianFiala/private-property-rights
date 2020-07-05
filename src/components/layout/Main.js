import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Router} from 'preact-router'
import NotFound from '../../routes/NotFound'
import Home from '../../routes/Home'

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
      <NotFound default />
    </Router>
  )
}