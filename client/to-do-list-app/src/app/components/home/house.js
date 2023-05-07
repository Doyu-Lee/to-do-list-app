"use client"

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
// import lottieJson from './my-lottie.json'
import lottieJson from '../../../../public/house.json'

export default function HouseAni() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
    />
  )
}