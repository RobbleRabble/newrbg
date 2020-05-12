import React, { useState, useEffect } from 'react'

const Wheel = (props) => {
  let h = Math.floor(Math.random() * 360)
  let s = Math.floor(Math.random() * 100)
  let l = Math.floor(Math.random() * 100)
  const [hue, setHue] = useState(h)
  const [saturation, setSaturation] = useState(s)
  const [lightness, setLightness] = useState(l)

  const random = () => {
    let h = Math.floor(Math.random() * 360)
    let s = Math.floor(Math.random() * 100)
    let l = Math.floor(Math.random() * 100)
    setHue(h)
    setSaturation(s)
    setLightness(l)
    // useEffect()
  }
  // const useEffect = () => {
  //   setLightness()
  // }

  const trackHueChanges = (e) => {
    const h = e.target.value
    setHue(h)
  }

  const trackSatChanges = (e) => {
    const s = e.target.value

    setSaturation(s)
  }

  const trackLightChanges = (e) => {
    const l = e.target.value
    setLightness(l)
  }

  return (
    <>
      <h1>A color picker to Hues!</h1>
      <section class="container">
        <div class="slider">
          Hue
          <input
            onChange={trackHueChanges}
            type="range"
            value={hue}
            min="0"
            max="360"
            step="1"
            id="hue"
          ></input>
        </div>
        <div className="slider">
          Saturation
          <input
            onChange={trackSatChanges}
            type="range"
            value={saturation}
            min="1"
            max="100"
            step="1"
            id="sat"
            // onClick={this.changeSat}
          ></input>
        </div>
        <div className="slider">
          Lightness
          <input
            onChange={trackLightChanges}
            type="range"
            value={lightness}
            min="1"
            max="100"
            step="1"
            id="light"
            // onClick={this.changeLight}
          ></input>
        </div>
      </section>

      <div
        className="selected"
        style={{
          backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`,
        }}
      >
        <h2 className="Display-Text">
          hsl({hue},{saturation}%,
          {lightness}%)
        </h2>
      </div>
      {/* <div style={{
              text: 'my text',
            }}
            </div> */}

      <div>
        <button className="random" onClick={random}>
          Try a random!
        </button>
      </div>
    </>
  )
}

export default Wheel
