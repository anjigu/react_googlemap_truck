// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const Timer = props => {
//   const [h, setH] = useState(0)
//   const [m, setM] = useState(1)
//   const [s, setS] = useState(2)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const correctionHour = 17
//       const date = new Date()
//       const fixedHour = new Date()

//       fixedHour.setHours(fixedHour.getHours() + correctionHour);
//       setH(() => fixedHour.getHours());
//       const m = date.getMinutes();
//       setM(() => m)
//       const s = date.getSeconds();
//       setS(() => s)
//     }, 1000)

//   }, [])

//   return (
//     <Layout>
//       <span style={{marginRight:10}}>
//       ⏰ 샌프란시스코 현지 시각
//       </span>
//       {h}:{m}:{s}
//     </Layout>
//   );
// };



// export default Timer;

// const Layout = styled.div`
//   /* text-align: center; */
//   color: black;
//   margin-left: 390px;
//   margin-bottom: 12px;
//   background-color: white;
//   width: 220px;
//   text-align: center;
//   padding: 5px;
// `


import React, { Component } from 'react';
import styled from 'styled-components';

class Clock extends Component {
  state = {
    time: null,
  }

  timer = null

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date()
      const options = { timeZone: 'America/Los_Angeles' }
      const time = date.toLocaleTimeString([], options)
      this.setState({ time })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { time } = this.state
    return (
      <Layout>
      <span style={{marginRight:10}}>
      ⏰ 샌프란시스코 현지 시각
      </span>
      {time}
      </Layout>
    )
  }
}

const Layout = styled.div`
  color: black;
  margin-left: 390px;
  margin-bottom: 12px;
  background-color: white;
  width: 250px;
  text-align: center;
  padding: 5px;
  border: 1px solid rgb(190,190,190);
  border-radius: 3px;
`

export default Clock;
