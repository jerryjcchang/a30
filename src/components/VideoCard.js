import React from 'react'
import {Card, Image} from 'semantic-ui-react'

class VideoCard extends React.Component{
  render(){
    const {info, openModal} = this.props
    return(
      <Card id="vid-card" raised fluid onClick={() => {openModal(info.name, info.vid_id)}}>
        <Card.Header id="card-header">{info.name}</Card.Header>
        <Image size="large" id="card-img" src={`https://img.youtube.com/vi/${info.vid_id}/0.jpg`}/>
      </Card>
    )
  }
}

export default VideoCard
