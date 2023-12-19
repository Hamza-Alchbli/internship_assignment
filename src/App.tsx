import './App.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer
          factor={3}
        >
          <img src="./assets/background.png" alt="background" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            fontSize: '3em',
            fontWeight: 'bold',
            backgroundColor: '#192a56',
          }}
        >
          <h1>Hello there!</h1>
          <p>Please keep scrolling</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          sticky={{ start: 1, end: 2 }}
        >
          <div className='shoulder-container'>
            <img src="./assets/shoulder.png" alt="shoulder" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src="./assets/hand.png" alt="hand" />
          <video src="./assets/video.mp4"></video>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App
