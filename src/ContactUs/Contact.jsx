import React from 'react'
import Driver from '../Assests/Driver.png'
import image from '../Assests/car.png'
import './Contact.css'

const contact = () => {
  return (
    <div className='col-md-12' >
        <div className='col-md-12 d-flex'>
                <div className='w-25 bg-dark padding'>
                        <img src={Driver} alt={Driver}/>
                </div>
                <div className='d-flex justify-content-between align-items-center w-75 color '> 
                    <div className='d-flex justify-content-between align-items-center w-50 padding_Center'>
                        <span>Vechiles</span>
                        <span>About</span>
                        <span>Contact</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center w-50 padding_left'>
                        <span className='mx-5'>Login</span>
                        <button className='btn btn-outline-dark btn_padding'>Signup</button>
                    </div>
                </div>
        </div>

        <div className='col-md-12 bg-warning main_height d-flex'>
            <div className='container w-50'>
                    <h3 className='align'>HAVE ALL THE</h3>
                    <h1 className='electric_padding'>Electric Feels</h1>
                    <h5 className='align_line'> WITH SUSTAINABLE VEHICLES</h5>
               
                    <p className='para'>
                    All-Electric vehicle rentals in Long Beach have arrived. It’s old news to trash the planet. 
                    Keep your values intact while you cruise through the streets of Long Beach with a new sustainable electric whip.
                    Super safe, easy to rent and return, and fun to ride.
                    Rent one of DRIVER’s electric cars for your next travel plans and feel the difference.
                    </p>

                    <button className='btn btn-outline-dark btn_color'>Check Availability</button>
                
            </div>
           
            <div className='w-50 '>
                    <div id='right-top-container' className='bg-dark'>
                        
                    </div> 
                    <div id='right-bottom-container' className='bg-dark'>

                    </div>
                    <div className='image-box'>
                        <img src={image} alt="" />
                    </div>
            </div>
           
        </div>

    </div>
  )
}

export default contact