import React from 'react'
import './Formstyle.css'
function Form() {
    return (
        <div className='card'>
            <h3>Book Your Appointment</h3>
            <div className="form">
                <input type="text" placeholder=" " className='textbox'/>
                <label htmlFor="text" className='label'>Enter Name</label>
                <input type="email" placeholder=" " className='textbox'/>
                <label htmlFor="text" className='label1'>Enter E-mail</label>
                <input type="date" placeholder="" className='textbox' />
                <label htmlFor="text" className='label2'>Enter Date</label>
                <button className="butn">Confirm Booking</button>
            </div>
        </div>
    )
}

export default Form
