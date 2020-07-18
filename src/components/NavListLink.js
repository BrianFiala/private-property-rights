import {h} from 'preact' /** @jsx h */
import {Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import MyIcon from './MyIcon'

export default function NavListLink({onClick, navListItem, classNames, highlighted}) {
  const {href, text, icon} = navListItem

  return (
    <ListItem id={href} button component="li" key={href}
      className={classNames.listItem} onClick={onClick}>
      <Link href={href} className={classNames.link}>
        <ListItemIcon>
          <MyIcon icon={icon} doHighlight highlighted={highlighted} />
        </ListItemIcon>
        <ListItemText primary={text}
          className={highlighted && classNames.highlightedText} />
      </Link>
    </ListItem>
  )
}