import {h} from 'preact' /** @jsx h */
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'

export default function NotFound() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          elevation={10}
          identifier="404"
          title="Page Not Found"
          message="Fruitcake brownie donut dessert. Macaroon cotton candy dessert cookie jelly-o chocolate wafer sesame snaps. Icing sugar plum jelly jelly beans jujubes halvah jelly caramels jujubes. Carrot cake fruitcake sweet roll cookie. Jelly beans chocolate bar pie ice cream candy canes jelly-o sugar plum. Pastry gingerbread sweet roll chupa chups. Toffee lemon drops candy canes. Donut ice cream sweet roll pastry liquorice topping jelly-o. Pastry sugar plum dragée. Lemon drops chupa chups cheesecake sweet pastry fruitcake cookie cookie." />
      </Grid>
    </Grid>
  )
}
