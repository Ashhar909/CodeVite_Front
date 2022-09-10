import React from 'react'
import code from '../../assets/Code.jpeg'
import cyber from '../../assets/Cyber.jpeg'

const Explore = () => {
  return (
    <div className='container d-flex justify-content-around text-dark my-5'>
        <div style={{borderRight:"5px solid black"}}>
            <div className='container' style={{width:"80%"}}>
              <h1>Want to break into the competitive programming landscape but don’t know where to start?</h1>
              <img src={code} alt='...' style={{width:"500px", height:"250px"}}/>
              <h3 className='my-3'>No problem. Codevita Live’s CC Conclave has got you covered.</h3>
              <p style={{textAlign:"justify"}}>An introductory course covering everything that you need to know to make the transition into the competitive coding landscape with a 100% practical based approach.</p>
            </div>
        </div>
        <div>
            <div className='container' style={{width:"80%"}}>
              <h1>Always wanted to become a cybersecurity tycoon but have no idea where to start?</h1>
              <img src={cyber} alt='...' style={{width:"500px", height:"250px"}}/>
              <h3 className='my-3'>Let's start learning</h3>
              <br></br>
              <p style={{textAlign:"justify"}}>Checkout Cybersecurity Evangelist Live- all you need to kickstart your cybersecurity career. Like all our programmes, it is supplemented with 24/7 doubt support and checkpoint exams and boasts of the same prided Codevita Live pedagogy.</p>
            </div>
        </div>
    </div>
  )
}

export default Explore