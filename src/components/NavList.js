import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import {useHeaderState} from '../contexts/HeaderStateProvider'
import {List, ListItem} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import NavListLink from './NavListLink'
import navListItems from '../assets/navlist-manifest.json'

const useStyles = makeStyles(theme => ({
  list: {
    overflow: 'hidden',
    marginTop: theme.spacing(9)
  },
  link: {
    display: 'flex',
    height: '100%',
    width: '100%',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
  },
  listItem: {
    padding: `${theme.spacing(1)}px 0`
  },
  secondary: {
    color: theme.palette.secondary.main
  },
  xSmall: {
    [theme.breakpoints.up(700)]: {
      display: 'none'
    }
  },
  small: {
    [theme.breakpoints.up(870)]: {
      display: 'none'
    }
  },
  medium: {
    [theme.breakpoints.up(1080)]: {
      display: 'none'
    }
  },
  large: {
    [theme.breakpoints.up(1200)]: {
      display: 'none'
    }
  },
  xLarge: {
    [theme.breakpoints.up(1380)]: {
      display: 'none'
    }
  },
  xxLarge: {
    [theme.breakpoints.up(1500)]: {
      display: 'none'
    }
  },
  login: {
    paddingLeft: theme.spacing(2)
  }
}))

export default function NavList() {
  const {toggleDrawer, tabValue, setTabValue} = useHeaderState()
  const classes = useStyles(useTheme())

  function onClick(event) {
    setTabValue(event.currentTarget.id)
    toggleDrawer(event, false)
  }

  const sizes = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge']
  const generateClassNames = position => ({
    listItem: clsx(classes.listItem, classes[sizes[position]]),
    link: classes.link,
    highlightedText: classes.secondary
  })

  return (
    <List className={classes.list}>
      {navListItems.map((navListItem, i) => (
        <NavListLink
          classNames={generateClassNames(i)}
          onClick={onClick}
          navListItem={navListItem}
          highlighted={tabValue === navListItem.href} />
      ))}
      <ListItem className={clsx(classes.listItem, classes.login)} component="li" button key="SignIn" onClick={onClick}>
        <div class="g-signin2"
          data-onsuccess="onSignIn"
          data-theme="dark" data-longtitle="true"
          data-height="48" data-width="248" />
        <script async src="https://apis.google.com/js/platform.js" />
      </ListItem>
    </List>
  )
}