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
  }

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
      <section class="container">
        <div class="slider">
          Hue
          <input
            onChange={trackHueChanges}
            type="range"
            min="0"
            max="360"
            step="1"
            id="hue"
          ></input>
          Saturation
          <input
            onChange={trackSatChanges}
            type="range"
            min="1"
            max="100"
            step="1"
            id="sat"
            // onClick={this.changeSat}
          ></input>
          Lightness
          <input
            onChange={trackLightChanges}
            type="range"
            min="1"
            max="100"
            step="1"
            id="light"
            // onClick={this.changeLight}
          ></input>
          <div
            style={{
              backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`,
            }}
          >
            <h2 class="Display=Text">
              hsl({hue},{saturation}%,
              {lightness}%)
            </h2>
          </div>
          {/* <div style={{
              text: 'my text',
            }}
            </div> */}
        </div>
        <button class="try-random" onClick={random}>
          Try a random!
        </button>
      </section>
    </>
  )
}

export default Wheel

// import React, { Component } from 'react'
// import axios from 'axios'

// export class Wheel extends Component {
//   state = {
//     displayHex: '',
//     selectedColor: this.props.initialColor,
//     colorHue: this.props.initialDisplayedHue,
//     hueInputBox: '',
//     colorSaturation: this.props.initialDisplayedSat,
//     satInputBox: '',
//     colorLightness: this.props.light,
//     lightInputBox: '',
//   }

//   trackHueChange = (e) => {
//     console.log(e.target.value)
//     this.setState({
//       hueInputBox: e.target.value,
//     })
//   }

//   trackSatChange = (e) => {
//     console.log(e.target.value)
//     this.setState({
//       satInputBox: e.target.value,
//     })
//   }

//   trackLightChange = (e) => {
//     console.log(e.target.value)
//     this.setState({
//       lightInputBox: e.target.value,
//     })
//   }

//   handleChangeComplete = (color) => {
//     this.setState({ background: color.hex })
//   }

//   render() {
//     console.log('rendering page')
//     return (
//       <>
//         <section class="container">
//           <div class="slider">
//             Hue
//             <input
//               onChange={this.trackHueChange}
//               type="range"
//               min="0"
//               max="360"
//               step="1"
//               id="hue"
//             ></input>
//             Saturation
//             <input
//               onChange={this.trackSatChange}
//               type="range"
//               min="1"
//               max="100"
//               step="1"
//               id="sat"
//               // onClick={this.changeSat}
//             ></input>
//             Lightness
//             <input
//               onChange={this.trackLightChange}
//               type="range"
//               min="1"
//               max="100"
//               step="1"
//               id="light"
//               // onClick={this.changeLight}
//             ></input>
//             <div
//               style={{
//                 backgroundColor: `hsl(${this.state.hueInputBox},${this.state.satInputBox}%,${this.state.lightInputBox}%)`,
//               }}
//             >
//               <h2 class="Display=Text">
//                 hsl({this.state.hueInputBox},{this.state.satInputBox}%,
//                 {this.state.lightInputBox}%)
//               </h2>
//             </div>
//             {/* <div style={{
//               text: 'my text',
//             }}
//             </div> */}
//           </div>
//           {/* <input>Try a random!</input> */}
//         </section>
//       </>
//     )
//   }
// }

// document.addEventListener('DOMContentLoaded', Wheel)

// export default Wheel
