import React from 'react'
import {Card, Image} from 'semantic-ui-react'

class VideoCard extends React.Component{
  render(){
    return(
      <Card id="vid-card" raised fluid>
        <Card.Header>"This Card"</Card.Header>
        <Image size="large" id="card-img" src={"https://img.youtube.com/vi/toNSb2yYykc/0.jpg"}/>
      </Card>
    )
  }
}

export default VideoCard
