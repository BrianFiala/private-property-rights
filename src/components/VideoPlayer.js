import {h} from 'preact' /** @jsx h */
import MyPaper from '../components/MyPaper'
import Title from '../components/Title'

export default function VideoPlayer({ src, title }) {
  return (
    <MyPaper>
      <Title>{title}</Title><br />
      <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
        <iframe
          style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: none;" 
          src={src} 
          allowfullscreen /> 
      </div>
    </MyPaper>
  )
}
