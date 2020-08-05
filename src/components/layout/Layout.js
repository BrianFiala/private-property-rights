import {h} from 'preact' /** @jsx h */
import {Container} from '@material-ui/core'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {contents, container} from './index.scss'

export default function Layout({toggleTheme, url}) {
  return (<>
    <Header toggleTheme={toggleTheme} />
    <Container maxWidth={false} className={container}>
      <article className={contents}>
        <Main url={url} />
        <Footer />
      </article>
    </Container>
  </>)
}
