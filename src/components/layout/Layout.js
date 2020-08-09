import {h} from 'preact' /** @jsx h */
import {Container} from '@material-ui/core'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {frame, frameHighContrast, contents, container, backgroundColorizer, backgroundColorizerHighContrast} from './index.scss'

export default function Layout({toggleTheme, toggleHighContrast, highContrast, url}) {
  return (<>
    <Header toggleTheme={toggleTheme} toggleHighContrast={toggleHighContrast} highContrast={highContrast} />
    <div className={highContrast ? frameHighContrast : frame}>
      <div className={highContrast ? backgroundColorizerHighContrast : backgroundColorizer}>
        <Container maxWidth={false} className={container}>
          <article className={contents}>
            <Main url={url} />
            <Footer />
          </article>
        </Container>
      </div>
    </div>
  </>)
}
