import react from 'react';
import { Row } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import img from '../images/burgerLab.png'
import temp from '../images/deal3.png'
import { Redirect } from 'react-router';

let Shops = () => {
    const arr = [[['Hattrick Deal 1', 'PKR 440.0', 'Triple meal treat bun less', 'img'], ['Hattrick Deal 2', 'PKR 440.0', 'Triple meal treat bun less', 'img'], ['Hattrick Deal 3', 'PKR 440.0', 'Triple meal treat bun less', 'img']],
     [['Hattrick Deal 1', 'PKR 399.0', 'description', 'img Address'], ['Hattrick Deal 2', 'PKR 399.0', 'description', 'img Address'], ['Hattrick Deal 3', 'PKR 399.0', 'description', 'img Address']],
     [['Chicken Burger', 'PKR 500.0', 'description', 'img Address'], ['Fiery Hot', 'PKR 500.0', 'description', 'img Address'], ['Zinger Burger', 'PKR 500.0', 'description', 'img Address'], ['Double Tecker Burger', 'PKR 500.0', 'description', 'img Address']],
     [['Chicken Wings', 'PKR 350.0', '1 person serving','chickenWings.png'], ['Fiery Hot',  'PKR 350.0', '2 people serving', 'fieryhot.png'], ['Croquetes', 'PKR 350.0', '4 people serving', 'croquetes.png'], ['Finger fries', 'PKR 350.0', '2 people serving', 'fingerFries.png']]]
    const [fst, setFst] = react.useState(arr)
    const [serverResponse, setServerResponse] = react.useState('')
    const [top,setTop] = react.useState("BURGER LAB")

    // axios.get('http://jsonplaceholder.typicode.com/shops').then(res => {
    //     const reply = JSON.parse(res)
    //     setServerResponse(reply)
    //     })
    
    const shopClick = (id) => {
        axios.get(`#/${id}`).then(res => {
            const reply = JSON.parse(res)
            setServerResponse(reply.message)
        })
    }

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

    return (
        <div style={{fontFamily: 'Roboto'}}>
            <div >
                <img src={img} className = 'img-fluid w-100' />
            </div>
            <div className="mt-5 mr-5 ml-5" >
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

            
            <h3 style={{marginTop: '2rem', marginBottom: '-1.5rem'}}><strong>Most Ordered right now</strong></h3>
            <Row >
                {
                    fst.map((iarr, ind) => {
                        return(
                            <div  className="d-flex mt-4">
                                {
                                    iarr.map((val, ind)=>{
                                        if (ind < 1){
                                            return(
                                                <div class='deals' className="card m-auto border-0" style={{width: "16rem", border:'groove', padding: '2rem',  cursor:"pointer"}} onClick={()=>shopClick(ind,ind)}>
                                                    {/* <img className="card-img-top" src={"/shops/"+arr[ind][3]} alt="loading.." /> */}
                                                    <img className="card-img-top" src={temp} alt="loading.." />
                                                    <div className="pt-3" style={{marginTop: "-1rem"}}> <strong>{arr[ind][ind][0]}</strong> </div>
                                                    <div style={{marginTop: "-0.25rem"}}>{arr[ind][ind][1]}</div>
                                                    <div style={{marginTop: "-0.25rem"}}>{arr[ind][ind][2]}</div>
                                                </div>
                                            )
                                        }
                                    })
                                }

                            </div>
                        )
                    })
                }
            </Row>

                {/* <h3 style={{marginTop: '2rem', marginBottom: '-1.5rem'}}><strong>Deals</strong></h3>
                <Row>
                {
                    fst.map((iarr, ind) => {
                        return(
                            <div  className="d-flex mt-4">
                                {
                                    iarr.map((val, ind)=>{
                                        if (ind < 1){
                                            return(
                                                <div class='deals' className="card m-auto border-0" style={{width: "16rem", border:'groove', padding: '2rem',  cursor:"pointer"}} onClick={()=>shopClick(ind,ind)}>
                                                    <img className="card-img-top" src={"/shops/"+deals_arr[ind][3]} alt="loading.." />
                                                    <img className="card-img-top" src={temp} alt="loading.." />
                                                    <div className="pt-3" style={{marginTop: "-1rem"}}> <strong>{deals_arr[ind][0]}</strong> </div>
                                                    <div style={{marginTop: "-0.25rem"}}>{deals_arr[ind][1]}</div>
                                                    <div style={{marginTop: "-0.25rem"}}>{deals_arr[ind][2]}</div>
                                                </div>
                                            )
                                        }
                                    })
                                }

                            </div>
                        )
                    })
                }
                </Row>

                <h3 style={{marginTop: '2rem', marginBottom: '-1.5rem'}}><strong>Burgers</strong></h3>
                <Row>
                {
                    fst.map((iarr, ind) => {
                        return(
                            <div  className="d-flex mt-4">
                                {
                                    iarr.map((val, ind)=>{
                                        if (ind < 1){
                                            return(
                                            <div class='burgers' className="card m-auto border-0" style={{width: "16rem",border:'groove', padding: '2rem',  cursor:"pointer"}} onClick={()=>shopClick(ind,ind)}>
                                                <img className="card-img-top" src={"/shops/"+burgers_arr[ind][3]} alt="loading.." />
                                                <img className="card-img-top" src={temp} alt="loading.." />
                                                <div className="pt-3" style={{marginTop: "-1rem"}}> <strong>{burgers_arr[ind][0]}</strong> </div>
                                                <div style={{marginTop: "-0.25rem"}}>{burgers_arr[ind][1]}</div>
                                                <div style={{marginTop: "-0.25rem"}}>{burgers_arr[ind][2]}</div>
                                            </div>
                                            )
                                        }
                                    })
                                }

                            </div>
                        )
                    })
                }
                </Row>

                <h3 style={{marginTop: '2rem', marginBottom: '-1.5rem'}}><strong>Fried Items</strong></h3>
                <Row>
                {
                    fst.map((iarr, ind) => {
                        return(
                            <div  className="d-flex mt-4">
                                {
                                    iarr.map((val, ind)=>{
                                        if (ind < 1){
                                            return(
                                            <div class='friedItems' className="card m-auto border-0" style={{width: "16rem",border:'groove', padding: '2rem',  cursor:"pointer"}} onClick={()=>shopClick(ind,ind)}>
                                                <img className="card-img-top" src={"/shops/"+friedItems_arr[ind][3]} alt="loading.." />
                                                <img className="card-img-top" src={temp} alt="loading.." />
                                                <div className="pt-3" style={{marginTop: "-1rem"}}> <strong>{friedItems_arr[ind][0]}</strong> </div>
                                                <div style={{marginTop: "-0.25rem"}}>{friedItems_arr[ind][1]}</div>
                                                <div style={{marginTop: "-0.25rem"}}>{friedItems_arr[ind][2]}</div>
                                            </div>
                                            )
                                        }
                                    })
                                }

                            </div>
                        )
                    })
                }
                </Row> */}
            </div>
        </div>
    )

}


export default Shops;