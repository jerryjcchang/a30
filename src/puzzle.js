import React from 'react'
import Puzzle from 'react-image-puzzle';
import { render } from 'react-dom';

class PuzzleComponent extends React.Component{

    handleSolved = () => {
      this.props.routeProps.history.push(this.props.nextRoute)
    }

    render(){

      const {header, url} = this.props

      return(
        <div>
          <h1 class="page-header">{header}</h1>
          <div id="puzzle-div">
          <Puzzle
            // image="https://cnet3.cbsistatic.com/img/xLgPeuq6CW9A2N2V2kKmhMT6h2o=/1092x0/2019/03/14/dd4d8d9c-5f16-4f6b-a7d8-65a00d095c2c/avengers-endgame-poster-square-crop.jpg"
            image={url}
            level={3}
            onDone={this.handleSolved}
            size={500}
          />
          </div>
      </div>
    )}
  }

export default PuzzleComponent
