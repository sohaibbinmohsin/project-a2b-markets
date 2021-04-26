import react from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer.js'
import Navbar from './Navbar.js'

let searchResults = (props) =>{

    const [cat,setCat] = react.useState([])
    const [name,setName] = react.useState('')
    const [fst,setFst] = react.useState(true) // have to set to true
    const [cvr,setCvr] = react.useState('')
    const [id,setID] = react.useState('')
    const [alert,setAlert] = react.useState('')


    if(!props.location.id)
    {
        return(
            <div className="h2 text-center font-weight-bold m-auto text-danger"> Method Not Allowed! </div>
        )
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    if(fst)
    {
        const data = {}
        setName(props.location.name)
        setCvr(props.location.logo)
        setID(props.location.id)
        let temp = []
        for(let i=0;i<props.location.products.length;i++)
        {
            temp.push(props.location.products[i].section_name)
        }
        let unique = temp.filter(onlyUnique);

        let obj = {}
        for (const key of unique) {
            obj[key] = [];
        }
        for(let i=0;i<props.location.products.length;i++)
        {
            obj[props.location.products[i].section_name].push(props.location.products[i])
        }

        setCat(obj)

        setFst(false)
    }

    const shopClick = (key,i) =>{
        console.log(cat[key][i])
    }

    const keyClick = (key) =>{
        console.log("key clicked:",key)
    }

    const plusClicked = (key,i) =>{
        const data = {
            product_id : cat[key][i]._id,
            product_name : cat[key][i].name,
            vendor_id : props.location.id,
            product_price : cat[key][i].price
        }
        axios.post('http://localhost:8080/api/customer/addToCart',data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <div className="container-fluid" style={{fontFamily: 'Roboto'}}>
            <Navbar />
            <div className="mt-n3" style={{height: "450px",width:"100%",overflow:"hidden"}}>
                <img src={cvr} className="img-fluid w-100"/>
            </div>
            <div className="d-flex float-left ml-4 mt-4">
                <div className="text-uppercase h2 font-weight-bold">{name}
                <div className="block text-left font-weight-normal" style={{fontSize:"1rem"}}>
                    <i className="fa fa-star border-0 w-25 h-25 mt-n3" style={{color:"orange"}}></i>
                    <strong>4.5</strong>/5.0 (100)
                </div>
                </div>
                <div className ="font-weight-bold mt-2" ><pre style={{color:"#FFD100"}}>   (Open 12:00pm - 11:00pm)</pre></div>
            </div>
            <br />
            <div className="d-flex flex-row bd-highlight border w-100 shadow" style={{marginTop:"5rem",height:"5rem"}}>
            {
                Object.keys(cat).map((val,ind)=>{
                    return(
                        <div className="p-2 bd-highlight ml-5 mt-auto mb-auto border-0" style={{cursor:"pointer"}} onClick={()=>keyClick(val)}>{val}</div>
                    )
                })
            }
            </div>
            <div className="d-inline ml-2 mr-2 w-100" style={{paddingBottom:"160px"}}>
            {
                Object.keys(cat).map((arr1,ind1)=>{
                    return(
                        <div>
                            <div className="h4 text-left ml-5 font-weight-bold mt-3">{arr1}</div>
                            <div className="row border shadow mt-3 ml-3 mr-3" >
                        {
                            cat[arr1].map((jarr,iind)=>{
                                return(
                                    <div className="card col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-3 mb-3 border-0" style={{width: "270px",cursor:"pointer"}} onClick={()=>shopClick(arr1,iind)}>
                                            <div style={{position:"absolute",zIndex:"30",color:"#FFD100"}}onClick={()=>plusClicked(arr1,iind)}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/></svg></div>
                                            <img className="card-img-top" src={"http://localhost:8080/"+jarr.product_image} alt="loading.." />
                                            <div class="text-left font-weight-bold">{jarr.name}</div>
                                            <div class="text-left font-weight-normal">{"PKR " + jarr.price}</div>
                                            <div class="text-left font-weight-normal">{jarr.description}</div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default searchResults;