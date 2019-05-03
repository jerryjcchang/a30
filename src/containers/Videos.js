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
      <h1 class="page-header">Happy Birthday!</h1>
      <Modal open={this.state.open}
             closeIcon
             closeOnDimmerClick
             onClose={this.closeModal}
             >
        <Modal.Header id="vid-modal-header">{this.state.name}</Modal.Header>
        <Modal.Content
          id="vid-modal-content">
        <YouTube
          videoId={this.state.vidId}
          opts={{playerVars:{autoplay:1}}}
          />
        </Modal.Content>
      </Modal>
      <Card.Group id="card-container" itemsPerRow="8" stackable={true}>
        {info.map(info => <VideoCard info={info} openModal={this.openModal}/>)}
      </Card.Group>
      {/* <h1 class="page-header" id="footer">Happy Birthday!</h1> */}

      </div>
    )
  }
}

export default Videos
