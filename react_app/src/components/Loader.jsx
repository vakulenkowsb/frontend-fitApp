import React from 'react'
import './Loader.css'
import Container from './Container'
const Loader = () => {
  return (
    <Container>
<div class="card">
  <div class="cardheader">
    <div class="img"></div>
    <div class="details">
      <span class="name"></span>
      <span class="about"></span>
    </div>
  </div>
  <div class="description">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
  </div>
  <div class="btns">
    <div class="btn btn-1"></div>
    <div class="btn btn-2"></div>
  </div>
</div>


    </Container>

  )
}

export default Loader