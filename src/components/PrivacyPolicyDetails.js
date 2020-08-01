import {h} from 'preact' /** @jsx h */
import privacyPolicy from '../assets/legal/privacy-policy.html'
import MyPaper from './MyPaper'
import Title from './Title'

export default function PrivacyPolicyDetails() {
  return (
    <MyPaper elevation={10}>
      <Title color="secondary">Privacy Policy</Title><br />
      <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
    </MyPaper>
  )
}
