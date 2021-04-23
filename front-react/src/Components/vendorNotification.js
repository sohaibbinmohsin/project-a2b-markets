import react from 'react';

const vendorNotification = () => {

    
    const [notif, setNotif] = useState([])
    const [name, setName] = useState([])
    const [time, setTime] = useState([])
    const [details, setDetails] = useState([])
    const [serverResponse, setServerResponse] = react.useState('')

    const shopClick = (id) => {
        axios.get(`#/${id}`).then(res => {
            const reply = JSON.parse(res)
            setServerResponse(reply.message)
        })
    }

    const addNotification = () => {
        setNotif([...notif, {
            name : name,
            time: time,
            details: details
        }])
    }

    return(
        <div >
        <h3 style={{padding:'1.5rem', textTransform: 'uppercase'}}><strong>{shopClick}</strong></h3>
        <br />
        <h4 class="text-center font-weight-semibold">Notifications</h4>

        {

            notif.map(not => (
                <Card class='mx-auto' style={{width:'80%', height:'10rem', border:'hidden', backgroundColor:'#FFEC1F'}}>
                    <li key={not.id}>{noti.value}
                        <h3 style={{padding: '1.5rem'}} onChange={(e)=>setName(e.target.value)}>{name}</h3>
                        <text style={{  marginBottom:'3rem', padding:'1.5rem'}} onChange={(e)=>setTime(e.target.value)}>{time}</text>
                        <button style={{float:'right', margin:'1.5rem', padding:'0.5rem', border:'hidden', borderRadius:'2rem', backgroundColor:'#000000', color:'#FFEC1F'}} onChange={(e)=>setDetails(e.target.value)}>View Details</button>
                    </li>
                </Card>
            ))
        }
    </div>
    )
}

export default vendorNotification;