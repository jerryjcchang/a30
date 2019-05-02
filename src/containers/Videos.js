import React from 'react'
import { Card, Modal } from 'semantic-ui-react'
import { info } from '../db'
import VideoCard from '../components/VideoCard'
import YouTube from 'react-youtube'

class Videos extends React.Component{

  state ={
    open: false,
    vidId: ""
  }

  openModal = (name,id) => {
    this.setState({
      open: true,
      name,
      vidId: id
    })
    console.log(id)
    // console.log("opening modal")

  }

  closeModal = () => {
    this.setState({
      open: false
    })
  }

  render(){
    return(
      <div>
      <h1 class="page-header">To our Athena... </h1>
      <Modal open={this.state.open}
             closeIcon
             closeOnDimmerClick
             onClose={this.closeModal}
             >
        <Modal.Header id="vid-modal-header">{this.state.name}</Modal.Header>
        <Modal.Content
          id="vid-modal-content">
        <YouTube
          videoId={this.state.vidId}/>
        </Modal.Content>
      </Modal>
      <Card.Group id="card-container" itemsPerRow="3">
        {info.map(info => <VideoCard info={info} openModal={this.openModal}/>)}
      </Card.Group>
      <h1 class="page-header" id="footer">Happy Birthday!</h1>

      </div>
    )
  }
}

export default Videos
