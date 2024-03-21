// import React from 'react'
// import './Hero.css'
// function Hero() {
//   return (
//    <div className='wrapper'>
//     <div className='hero-container container'>
//         <div className='hero-heading'>
//             <span>WITNESS A REMARKABLE</span>
//             <h2>HAIR GROWTH IN</h2>
//             <h1 >JUST FEW MONTHS</h1>
//             <div className='hero-btn'>
//                 <button className='btn primary'>TAKE HAIR TEST</button>
//                 <button className='btn'>BOOK AN APPOINTMENT </button>
//             </div>
//         </div>
//         <div style={{height:"100%"}}><img className='hero-image' src='https://hairsncares.com/uploads/admprhero-banner.png'></img></div>
//     </div>
//    </div>
//   )
// }

// export default Hero
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='wrapper'>
      <div className='hero-container container'>
        <div className='hero-content'>
          <div className='hero-heading'>
            <span>WITNESS A REMARKABLE</span>
            <h2>HAIR GROWTH IN</h2>
            <h1>JUST FEW MONTHS</h1>
            <div className='hero-btn'>
              <button className='btn primary'>TAKE HAIR TEST</button>
              <button className='btn'>BOOK AN APPOINTMENT</button>
            </div>
          </div>
          <img className='hero-image' src='https://hairsncares.com/uploads/admprhero-banner.png' alt='Hair Growth' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
