import react from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer.js'
import Navbar from './Navbar.js'
import './Markets.css'
import {useHistory} from 'react-router-dom';

let SearchResults = (props) =>{
    const [rst,setRst] = react.useState([])
    const [name,setName] = react.useState('')
    const [fst,setFst] = react.useState(true)
    const [cvr,setCvr] = react.useState('')
    const [id,setID] = react.useState('')
    const [redirect,setRedirect] = react.useState(false)
    const [shopId,setShopId] = react.useState('')
    const [Name,setShopName] = react.useState('')
    const [logo,setLogo] = react.useState('')
    const [prod,setProd] = react.useState([])
    const history = useHistory()
    
    // console.log(props.location.id)
    if(!props.location.id)
    {
        return(
            <div className="h2 text-center font-weight-bold m-auto text-danger"> Method Not Allowed! </div>
        )
    }

    if(fst)
    {
        setID(props.location.id)
        setName(props.location.name)
        setCvr(props.location.cover)
        axios.get(`http://localhost:8080/api/markets/${props.location.id}`) // api call, url to be chnaged
        .then(res => {
            setRst(res.data.vendor)
        })
        .catch(err => console.log(err))
        setFst(false)
    }

    const shopClick = (i) =>{
        setShopId(rst[i]._id)
        setShopName(rst[i].shop_name)
        setLogo(rst[i].logo)
        setProd(rst[i].products)
        // console.log(rst)
        setRedirect(true)
    }

    if(redirect)
    {
        history.push({
            pathname: '/shop',
            id: shopId,
            name : Name,
            logo : logo,
            products : prod
        });
    }

    return(
        <div style={{fontFamily: 'Roboto'}}>
            <Navbar />
            <div className="mt-n3" style={{height: "450px",width:"100%",overflow:"hidden"}}>
                <img src={"http://localhost:8080/"+cvr} className="img-fluid w-100" style={{marginTop:"-15rem"}}/>
            </div>
            <div className="mt-5 mr-5 ml-5" style={{paddingBottom:"160px"}} >
                <div className="d-flex">
                    <div className="text-left h1 font-weight-normal Markets">{name}</div>

                        <input className="searchFilter" type="text" placeholder="Search for restaurant and cuisines"></input>

                            {/* <i class="fa fa-search"></i>  */}
                            <button className="filterIcon">
                                <i class="fa fa-filter"></i>
                            </button>
                    </div>
                <div className="row mt-4">
                {
                    rst.map((val,ind)=>{
                        return(
                            <div className="card mt-5 mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3 border-0" style={{width: "16rem",cursor:"pointer"}} onClick={()=>shopClick(ind)}>
                                <div className="block p-1 mb-n5 text-center font-weight-bold" style={{backgroundColor:"#FFD100",height:"2rem",width:"11rem",zIndex:"10"}}> {val.delivery_charges.toUpperCase()+" Delivery"} </div>
                                <img className="card-img-top" src={"http://localhost:8080/"+val.logo} alt="loading.." />
                                <div className="ml-auto mr-4 d-flex" style={{marginTop: "-1rem"}}>
                                    <i className="fa fa-star border-0" style={{color:"orange"}}></i>
                                    <div className="pt-3"> <strong>{4.5}</strong>/5</div>
                                </div>
                                <div class="text-center font-weight-bold" style={{marginTop: "-1rem"}}>{val.shop_name}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default SearchResults;