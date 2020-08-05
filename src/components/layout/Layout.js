import {h} from 'preact' /** @jsx h */
import {Container} from '@material-ui/core'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {contents, container, backgroundColorizer} from './index.scss'

export default function Layout({toggleTheme, url}) {
  return (<>
    <Header toggleTheme={toggleTheme} />
    <div className={backgroundColorizer}>
      <Container maxWidth={false} className={container}>
        <article className={contents}>
          <Main url={url} />
          <Footer />
        </article>
      </Container>
    </div>
  </>)
}
