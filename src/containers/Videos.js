import React from 'react'
import { Card } from 'semantic-ui-react'
import { info } from '../db'
import VideoCard from '../components/VideoCard'

class Videos extends React.Component{
  render(){
    return(
      <Card.Group id="card-container" itemsPerRow="3">
        {info.map(info => <VideoCard info={info}/>)}
      </Card.Group>
    )
  }
}

export default Videos
