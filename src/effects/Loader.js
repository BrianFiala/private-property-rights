import {h} from 'preact' /** @jsx h */
import './Loader.scss'

export default function Loader() {
  return (
    <div class="loader-wrapper">
      <div class="loader">
        <div class="la-pacman la-2x">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}