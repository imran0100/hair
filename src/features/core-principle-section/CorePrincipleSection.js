// import React from 'react'
// import "./CorePrinciple.css"
// function CorePrincipleSection() {
//   return (
//   <div className='core-wrapper'>
//       <div className='core container'>
//         <h1>Core Principles for hair care</h1>
//       <div className='core-image'>
//       <div >
//         <img className='principle-img' src='https://hairsncares.com/uploads/admprcore-pic-1.png'/>
//         <p>Unlock the secrets to combat hair loss/thinning with dermatologist-recommended treatments, backed by proven efficacy and professional endorsement.</p>
//       </div>
//         <div>        <img className='principle-img' src='https://hairsncares.com/uploads/admprcore-pic-2.png'/>
//         <p>Healthy habits is a reflection of a strong and vibrant hair.</p>
// </div>
//         <div>        <img className='principle-img' src='https://hairsncares.com/uploads/admprcore-pic-3.png'/>
//         <p>The secret to healthy, lustrous hair</p>
// </div>
//         <div>        <img className='principle-img' src='https://hairsncares.com/uploads/admprcore-pic-4.png'/>
//         <p>Experience radiant hair growth with our stress management techniques.</p>
// </div>
//       </div>

//     </div>
//   </div>
//   )
// }

// export default CorePrincipleSection
import React from 'react';
import "./CorePrinciple.css"

function CorePrincipleSection() {
  return (
    <div className='core-wrapper'>
      <div className='core container'>
        <h1>Core Principles for hair care</h1>
        <div className='core-image'>
          <div>
            <img className='principle-img' src='https://hairsncares.com/uploads/admprcore-pic-1.png' alt="Hair Care Principle 1"/>
            <p>Unlock the secrets to combat hair loss/thinning with dermatologist-recommended treatments, backed by proven efficacy and professional endorsement.</p>
          </div>
          <div>
            <img className='principle-img' src='https://hairsncares.com/uploads/admprcore-pic-2.png' alt="Hair Care Principle 2"/>
            <p>Healthy habits are a reflection of strong and vibrant hair.</p>
          </div>
          <div>
            <img className='principle-img' src='https://hairsncares.com/uploads/admprcore-pic-3.png' alt="Hair Care Principle 3"/>
            <p>The secret to healthy, lustrous hair.</p>
          </div>
          <div>
            <img className='principle-img' src='https://hairsncares.com/uploads/admprcore-pic-4.png' alt="Hair Care Principle 4"/>
            <p>Experience radiant hair growth with our stress management techniques.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorePrincipleSection;
