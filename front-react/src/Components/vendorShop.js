// import react from 'react';
// import { Row } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css"
// import axios from 'axios'
// import { Redirect } from 'react-router';

// let Shops = () => {
//     const arr = [[['Hattrick Deal 1', 'PKR 440.0', 'Triple meal treat bun less', 'img'], ['Hattrick Deal 2', 'PKR 440.0', 'Triple meal treat bun less', 'img'], ['Hattrick Deal 3', 'PKR 440.0', 'Triple meal treat bun less', 'img']],
//      [['Hattrick Deal 1', 'PKR 399.0', 'description', 'img Address'], ['Hattrick Deal 2', 'PKR 399.0', 'description', 'img Address'], ['Hattrick Deal 3', 'PKR 399.0', 'description', 'img Address']],
//      [['Chicken Burger', 'PKR 500.0', 'description', 'img Address'], ['Fiery Hot', 'PKR 500.0', 'description', 'img Address'], ['Zinger Burger', 'PKR 500.0', 'description', 'img Address'], ['Double Tecker Burger', 'PKR 500.0', 'description', 'img Address']],
//      [['Chicken Wings', 'PKR 350.0', '1 person serving','chickenWings.png'], ['Fiery Hot',  'PKR 350.0', '2 people serving', 'fieryhot.png'], ['Croquetes', 'PKR 350.0', '4 people serving', 'croquetes.png'], ['Finger fries', 'PKR 350.0', '2 people serving', 'fingerFries.png']]]
//     const [fst, setFst] = react.useState(arr)
//     const [serverResponse, setServerResponse] = react.useState('')
//     const [top,setTop] = react.useState("BURGER LAB")

//     // axios.get('http://jsonplaceholder.typicode.com/shops').then(res => {
//     //     const reply = JSON.parse(res)
//     //     setServerResponse(reply)
//     //     })
    
//     const shopClick = (id) => {
//         axios.get(`#/${id}`).then(res => {
//             const reply = JSON.parse(res)
//             setServerResponse(reply.message)
//         })
//     }

//     const orderHistoryBtn = () => {
//         return (
//             <Redirect to='/vendorOrderHistory/' />
//         )
//     }

//     const editProfileBtn = () => {
//         return (
//             <Redirect to='/editProfile/' />
//         )
//     }

//     return (
//         <div style={{fontFamily: 'Roboto'}}>
//             <div >
//                 <img src="/uploads/2021-04-11T12_56_20.080Zpet shop.png" className = 'img-fluid w-100' />
//             </div>
//             <div className="mt-5 mr-5 ml-5" >
//                 <div className="d-flex">
//                     <div className="text-left h1 font-weight-normal"><strong>{top}</strong></div>
//                 </div>
//                 <div>
//                     <button className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100", borderRadius:'3rem'}} onClick={editProfileBtn}><strong>Edit Profile</strong></button>
//                     <button className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100", borderRadius:'3rem', marginLeft: '1rem'}} onClick={orderHistoryBtn}><strong>Order History</strong></button>
//                 </div>
//                     <h3 class="text-center font-weight-normal" style={{padding: '1.5rem'}}><strong>MENU</strong></h3>
//                 <div style={{width:'100', border:'groove', padding:'0.5rem'}}>
//                     <Row>
//                     <li to={'/mostOrdered'}><button className="btn btn-primary-outline-light" onClick>Most Ordered</button></li>
//                     <li to={'/deals'}><button className="btn btn-primary-outline-light" onClick>Deals</button></li>
//                     <li to={'/burgers'}><button className="btn btn-primary-outline-light" onClick>Burgers</button></li>
//                     <li to={'/friedItems'}><button className="btn btn-primary-outline-light" onClick>Fried Items</button></li>
//                     <li to={'/editMenu'}><button className="btn btn-primary-outline-light"  style={{backgroundColor: "#FFD100", borderRadius:'3rem'}}onClick><strong>Edit Menu</strong></button></li>
//                     </Row>
//                 </div>

            
//             <h3 style={{marginTop: '2rem', marginBottom: '-1.5rem'}}><strong>Most Ordered right now</strong></h3>
//             <Row >
//                 {
//                     fst.map((iarr, ind) => {
//                         return(
//                             <div  className="d-flex mt-4">
//                                 {
//                                     iarr.map((val, ind)=>{
//                                         if (ind < 1){
//                                             return(
//                                                 <div class='deals' className="card m-auto border-0" style={{width: "16rem", border:'groove', padding: '2rem',  cursor:"pointer"}} onClick={()=>shopClick(ind,ind)}>
//                                                     {/* <img className="card-img-top" src={"/shops/"+arr[ind][3]} alt="loading.." /> */}
//                                                     <img className="card-img-top" src="/images/deal3.png" alt="loading.." />
//                                                     <div className="pt-3" style={{marginTop: "-1rem"}}> <strong>{arr[ind][ind][0]}</strong> </div>
//                                                     <div style={{marginTop: "-0.25rem"}}>{arr[ind][ind][1]}</div>
//                                                     <div style={{marginTop: "-0.25rem"}}>{arr[ind][ind][2]}</div>
//                                                 </div>
//                                             )
//                                         }
//                                     })
//                                 }

//                             </div>
//                         )
//                     })
//                 }
//             </Row>

//                 {/* <h3 style={{marginTop: '2rem', marginBottom: '-1.5rem'}}><strong>Deals</strong></h3>
//                 <Row>
//                 {
//                     fst.map((iarr, ind) => {
//                         return(
//                             <div  className="d-flex mt-4">
//                                 {
//                                     iarr.map((val, ind)=>{
//                                         if (ind < 1){
//                                             return(
//                                                 <div class='deals' className="card m-auto border-0" style={{width: "16rem", border:'groove', padding: '2rem',  cursor:"pointer"}} onClick={()=>shopClick(ind,ind)}>
//                                                     <img className="card-img-top" src={"/shops/"+deals_arr[ind][3]} alt="loading.." />
//                                                     <img className="card-img-top" src={temp} alt="loading.." />
//                                                     <div className="pt-3" style={{marginTop: "-1rem"}}> <strong>{deals_arr[ind][0]}</strong> </div>
//                                                     <div style={{marginTop: "-0.25rem"}}>{deals_arr[ind][1]}</div>
//                                                     <div style={{marginTop: "-0.25rem"}}>{deals_arr[ind][2]}</div>
//                                                 </div>
//                                             )
//                                         }
//                                     })
//                                 }

//                             </div>
//                         )
//                     })
//                 }
//                 </Row>

//                 <h3 style={{marginTop: '2rem', marginBottom: '-1.5rem'}}><strong>Burgers</strong></h3>
//                 <Row>
//                 {
//                     fst.map((iarr, ind) => {
//                         return(
//                             <div  className="d-flex mt-4">
//                                 {
//                                     iarr.map((val, ind)=>{
//                                         if (ind < 1){
//                                             return(
//                                             <div class='burgers' className="card m-auto border-0" style={{width: "16rem",border:'groove', padding: '2rem',  cursor:"pointer"}} onClick={()=>shopClick(ind,ind)}>
//                                                 <img className="card-img-top" src={"/shops/"+burgers_arr[ind][3]} alt="loading.." />
//                                                 <img className="card-img-top" src={temp} alt="loading.." />
//                                                 <div className="pt-3" style={{marginTop: "-1rem"}}> <strong>{burgers_arr[ind][0]}</strong> </div>
//                                                 <div style={{marginTop: "-0.25rem"}}>{burgers_arr[ind][1]}</div>
//                                                 <div style={{marginTop: "-0.25rem"}}>{burgers_arr[ind][2]}</div>
//                                             </div>
//                                             )
//                                         }
//                                     })
//                                 }

//                             </div>
//                         )
//                     })
//                 }
//                 </Row>

//                 <h3 style={{marginTop: '2rem', marginBottom: '-1.5rem'}}><strong>Fried Items</strong></h3>
//                 <Row>
//                 {
//                     fst.map((iarr, ind) => {
//                         return(
//                             <div  className="d-flex mt-4">
//                                 {
//                                     iarr.map((val, ind)=>{
//                                         if (ind < 1){
//                                             return(
//                                             <div class='friedItems' className="card m-auto border-0" style={{width: "16rem",border:'groove', padding: '2rem',  cursor:"pointer"}} onClick={()=>shopClick(ind,ind)}>
//                                                 <img className="card-img-top" src={"/shops/"+friedItems_arr[ind][3]} alt="loading.." />
//                                                 <img className="card-img-top" src={temp} alt="loading.." />
//                                                 <div className="pt-3" style={{marginTop: "-1rem"}}> <strong>{friedItems_arr[ind][0]}</strong> </div>
//                                                 <div style={{marginTop: "-0.25rem"}}>{friedItems_arr[ind][1]}</div>
//                                                 <div style={{marginTop: "-0.25rem"}}>{friedItems_arr[ind][2]}</div>
//                                             </div>
//                                             )
//                                         }
//                                     })
//                                 }

//                             </div>
//                         )
//                     })
//                 }
//                 </Row> */}
//             </div>
//         </div>
//     )

// }


// export default Shops;
import react from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer.js'
import Navbar from './Navbar.js'

let Shops = (props) =>{

    const [cat,setCat] = react.useState([])
    const [name,setName] = react.useState('')
    const [fst,setFst] = react.useState(true) // have to set to true
    const [cvr,setCvr] = react.useState('')
    const [id,setID] = react.useState('')
    const [alert,setAlert] = react.useState('')

    // const shopClick = (id) => {
    //     axios.get(`#/${id}`).then(res => {
    //         const reply = JSON.parse(res)
    //         setServerResponse(reply.message)
    //     })
    // }
        
    const orderHistoryBtn = () => {
        return (
            <Redirect to='/vendorOrderHistory/' />
        )
    }
        
    const editProfileBtn = () => {
        return (
            <Redirect to='/editProfile/' />
        )
    }

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
        axios.get(`#/${i}`).then(res => {
            const reply = JSON.parse(res)
            setServerResponse(reply.message)
        })
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
                <img src={"http://localhost:8080/"+cvr} className="img-fluid w-100"/>
            </div>
            <div className="d-flex">
                    <div className="text-left h1 font-weight-normal"><strong>{top}</strong></div>
                </div>
                <div>
                    <button className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100", borderRadius:'3rem'}} onClick={editProfileBtn}><strong>Edit Profile</strong></button>
                    <button className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100", borderRadius:'3rem', marginLeft: '1rem'}} onClick={orderHistoryBtn}><strong>Order History</strong></button>
                </div>
                    <h3 class="text-center font-weight-normal" style={{padding: '1.5rem'}}><strong>MENU</strong></h3>
                <div style={{width:'100', border:'groove', padding:'0.5rem'}}>
                    <Row>
                    <li to={'/mostOrdered'}><button className="btn btn-primary-outline-light" onClick>Most Ordered</button></li>
                    <li to={'/deals'}><button className="btn btn-primary-outline-light" onClick>Deals</button></li>
                    <li to={'/burgers'}><button className="btn btn-primary-outline-light" onClick>Burgers</button></li>
                    <li to={'/friedItems'}><button className="btn btn-primary-outline-light" onClick>Fried Items</button></li>
                    <li to={'/editMenu'}><button className="btn btn-primary-outline-light"  style={{backgroundColor: "#FFD100", borderRadius:'3rem'}}onClick><strong>Edit Menu</strong></button></li>
                    </Row>
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

export default Shops;