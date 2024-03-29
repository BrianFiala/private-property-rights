import {h} from 'preact' /** @jsx h */
import termsOfService from '../assets/legal/terms-of-service.html'
import MyPaper from './MyPaper'
import Title from './Title'

export default function TermsOfServiceDetails() {
  return (
    <MyPaper elevation={10}>
      <Title color="secondary">Terms and Conditions</Title><br />
      <div dangerouslySetInnerHTML={{ __html: termsOfService }} />
    </MyPaper>
  )
}
