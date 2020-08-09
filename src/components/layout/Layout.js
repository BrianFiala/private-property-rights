import {h} from 'preact' /** @jsx h */
import {Container} from '@material-ui/core'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {frame, frameHighContrast, contents, contentsHighContrast, container,
  backgroundColorizer, backgroundColorizerHighContrast} from './index.scss'

export default function Layout({highContrast, url}) {
  return (<>
    <Header />
    <div className={highContrast ? frameHighContrast
      : frame}>
      <div className={highContrast ? backgroundColorizerHighContrast
        : backgroundColorizer}>
        <Container maxWidth={false} className={container}>
          <article className={highContrast ? contentsHighContrast
            : contents}>
            <Main url={url} />
            <Footer />
          </article>
        </Container>
      </div>
    </div>
  </>)
}
