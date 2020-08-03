import {h} from 'preact' /** @jsx h */
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {contents} from './index.scss'

export default function Layout({toggleTheme, url}) {
  return (<>
    <Header toggleTheme={toggleTheme} />
    <article className={contents}>
      <Main url={url} />
      <Footer />
    </article>
  </>)
}
