import react, { useState } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';


const OrderHistory = () => {

    const [order, setOrder] = useState([])
    const [name, setName] = useState([])
    const [date, setDate] = useState([])
    const [details, setDetails] = useState([])
    const [serverResponse, setServerResponse] = react.useState('')

    const shopClick = (id) => {
        axios.get(`#/${id}`).then(res => {
            const reply = JSON.parse(res)
            setServerResponse(reply.message)
        })
    }

    const addOrder = () => {
        setOrder([...order, {
            name: name,
            date: date,
            details: details

        }])
    }

    return (
        <div >
            <h3 style={{padding:'1.5rem', textTransform: 'uppercase'}}><strong>{shopClick}</strong></h3>
            <br />
            <h4 class="text-center font-weight-semibold">Orders</h4>

            {

                // <Card class='mx-auto' style={{width:'80%', height:'10rem', border:'hidden', backgroundColor:'#FFEC1F'}}>
                // <h3 style={{padding: '1.5rem'}}>Some ordered from Burger Lab</h3>
                // <text style={{  marginBottom:'3rem', padding:'1.5rem'}}>12 April, 2021</text>
                // <button style={{float:'right', margin:'1.5rem', padding:'0.5rem', border:'hidden', borderRadius:'2rem', backgroundColor:'#000000', color:'#FFEC1F'}}>View Order</button>
                // </Card>


                order.map(orders => (
                    <Card class='mx-auto' style={{width:'80%', height:'10rem', border:'hidden', backgroundColor:'#FFEC1F'}}>
                        <li key={orders.id}>{orders.value}
                            <h3 style={{padding: '1.5rem'}} onChange={(e)=>setName(e.target.value)}>{name}</h3>
                            <text style={{  marginBottom:'3rem', padding:'1.5rem'}} onChange={(e)=>setDate(e.target.value)}>{date}</text>
                            <button style={{float:'right', margin:'1.5rem', padding:'0.5rem', border:'hidden', borderRadius:'2rem', backgroundColor:'#000000', color:'#FFEC1F'}} onChange={(e)=>setDetails(e.target.value)}>View Order</button>
                        </li>
                    </Card>
                ))
            }
        </div>
    )
}

export default OrderHistory;