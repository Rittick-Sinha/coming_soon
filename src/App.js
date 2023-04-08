import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import './styles.css';

// import video
import videoBg from '../src/assets/videoplayback.mp4';
import image from '../src/assets/Group 13.png'

const App = () => {
  const [state] = useState({


  })

  return (
    <section className='page'>
{/* overlay */}
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='page__content'>
        <img src={image} alt="" />
        <h1>ASTRONOMICA</h1>
        <h2>Launching Soon</h2>
        <h3>
          <div className="text">
            <Typewriter

              onInit={(typewriter) => {

                typewriter

                  .typeString("Into the space")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Realm of Physics")
                  .start()

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Astronomy")
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Astro-NITR welcomes you all");
                  

              }}
            />
          </div>
        </h3>

        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 24 * 3600 * 1000 + 100}
        />
        {/* <button className='btn'>Notify me</button> */}
      </div>
    </section>
  );
};

export default App;
