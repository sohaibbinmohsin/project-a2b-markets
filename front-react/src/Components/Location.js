import react from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./location.png"


// not styled yet
const Location = () =>
{
    const [inp,setInput] = react.useState('')
    const [latlng,setlLatlng] = react.useState([])

    const loc = () =>{
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((pos)=>
            {
                const loc = {
                    latitude : pos.coords.latitude,
                    longitude : pos.coords.longitude,
                    
                }
                setlLatlng([loc.latitude,loc.longitude])
                axios.post('http://localhost:3000/reverse_geocode',loc)
                .then((res)=>{
                    setInput(res.data.address)
                })
            })
        }
    }

    const inpChange = (ev) =>{
        setInput(ev.target.value)
    }

    const submit = (ev) =>{
        ev.preventDefault()
        const obj = {}
        if(latlng.length>0)
        {
            obj = {
                address : inp,
                lat : latlng[0],
                lng : latlng[1]
            }
        }
        else
        {
            obj = {
                address : inp,
                lat : 0,
                lng : 0
            }
        }
        axios.post('http://localhost:3000/location/set',obj)
        .then((res)=>{
            console.log(res.data)
        })
    }

    return(
        <div>
            <input type="text" value={inp} onChange={inpChange} />
            <img src={logo} onClick={loc}/>
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default Location;