import React from 'react'
import emailjs from '@emailjs/browser';
import './Table.css'
function Table({ data = [] }) {

    const sendMail = (values) => {
        console.log("values", values)
        emailjs.send("service_l678itd", "template_0z1ga62", {
            from_name: "Carely",
            name: "Aryan",
            date: values.date,
            from_to: values.email,
            reply_to: "aryananurag8@gmail.com",
        }, 'TKKNaf-wCX5GikGqA');
        alert(alert("Appoinment has been Confirmend"))

    }
    return (
        <div className='container'>
            <table className="customers">
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Confirm</th>
                </tr>
                {data.length > 0 ? data.map((e) => {
                    return <tr>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <button onClick={() => sendMail(e)} className='btn2'>Confirm</button>
                    </tr>

                }) : <span style={{ width: "100%", textAlign: "center" }}>No Appointments Found...</span>}

            </table>
        </div>
    )
}

export default Table
