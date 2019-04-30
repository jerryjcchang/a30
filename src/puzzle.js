import React from 'react'
import Puzzle from 'react-image-puzzle';
import { render } from 'react-dom';

  const puzzle = () => {
    render(
    <Puzzle
      image='https://cnet3.cbsistatic.com/img/xLgPeuq6CW9A2N2V2kKmhMT6h2o=/1092x0/2019/03/14/dd4d8d9c-5f16-4f6b-a7d8-65a00d095c2c/avengers-endgame-poster-square-crop.jpg'
      level={3}
      onDone={()=>{alert("DONE")}}
    />
    )}

export {puzzle}
