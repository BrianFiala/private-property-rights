import {
  Home,
  EmojiPeople,
  Email,
  Settings,
  HowToVote,
  Announcement,
  VideoLibrary,
  Menu,
  Search,
  CheckBox,
  CheckBoxOutlineBlank
} from '@material-ui/icons'

const generateHighlighting = (doHighlight, highlighted) => {
  if (!doHighlight) return 'inherit'
  return highlighted ? 'secondary' : 'primary'
}

export default function MyIcon({icon, highlighted, doHighlight}) {
  // debugger
  switch (icon) {
  case 'search':
    return <Search aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'menu':
    return <Menu aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'home':
    return <Home aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'announcement':
    return <Announcement aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'videoLibrary':
    return <VideoLibrary aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'howToVote':
    return <HowToVote aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'emojiPeople':
    return <EmojiPeople aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'email':
    return <Email aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'settings':
    return <Settings aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'blankCheckbox':
    return <CheckBoxOutlineBlank aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  case 'checkbox':
    return <CheckBox aria-hidden="true" color={generateHighlighting(doHighlight, highlighted)} />
  }
}
