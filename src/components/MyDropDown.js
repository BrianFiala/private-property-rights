import {h} from 'preact' /** @jsx h */
import {Menu} from '@material-ui/core'

export default function MyDropDown({anchorEl, setOpen, setClosed, open, id, children}) {
  return (
    <Menu
      id={id}
      anchorEl={anchorEl.current}
      disableAutoFocusItem
      MenuListProps={{
        onMouseEnter: setOpen,
        onMouseLeave: setClosed
      }}
      getContentAnchorEl={null}
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      transformOrigin={{vertical: 'top', horizontal: 'center'}}
      open={open}
      onClose={setClosed}>
      {children}
    </Menu>
  )
}
