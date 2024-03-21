import React from 'react'
import "./Trust.css"
import { HiSpeakerWave } from "react-icons/hi2";

function Trust() {
  return (
  <>
    <div className='trust-container container'>
        <div>
            <div>2455 +</div>
            <div className='trust-text'>Google reviews</div>
        </div>
        <div className='trust'>
            <div><img src='https://hairsncares.com/uploads/r-icon2.png'/></div>
            <div><div>Published in</div><div className='trust-text'>5000+ Channels</div></div>
            


        </div>
        <div className='trust'> <div><img src='https://hairsncares.com/uploads/r-icon3.png'/></div>
            <div><div>1000+</div><div className='trust-text'>Happy Client</div></div>
            </div>
        <div className='trust'> <div><img src='https://hairsncares.com/uploads/r-icon4.png'/></div>
            <div><div>100%</div><div className='trust-text'>Guaranteed Result</div></div>
            </div>
          
    </div>
    <hr></hr>
  
  </>
  )
}

export default Trust