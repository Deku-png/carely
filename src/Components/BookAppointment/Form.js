import React, { useState } from 'react'
import './Formstyle.css'
function Form({ handleAdd = () => { } }) {
    const [formData, setFormData] = useState({ name: "", email: "", date: "" })
    return (
        <div className='card'>
            <h3>Book Your Appointment</h3>
            <div className="form">
                <input value={formData.name} onChange={(e) => {
                    setFormData((prev) => {
                        return { ...prev, name: e.target.value }

                    })
                }} type="text" placeholder="Enter Name" className='textbox' />
                <input value={formData.email} onChange={(e) => {
                    setFormData((prev) => {
                        return { ...prev, email: e.target.value }

                    })
                }} type="email" placeholder="Enter Email" className='textbox' />

                <input value={formData.date} onChange={(e) => {
                    setFormData((prev) => {
                        return { ...prev, date: e.target.value }

                    })
                }} type="date" placeholder="Pick a Date" className='textbox' />

                <button onClick={() => {
                    if (formData.email && formData.name && formData.date) {
                        handleAdd(formData)
                        setFormData({ name: "", email: "", date: "" })
                    }
                    else {
                        alert("please add your information Correctly")
                    }
                }} className="butn">Confirm Booking</button>
            </div>
        </div>
    )
}

export default Form
