import react, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
// import './Categories.css';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getCategories, selMarket} from '../actions/markets';
import { set } from 'mongoose';
import { Link, Redirect,useHistory} from 'react-router-dom';


let Markets = () => {
    const categories = useSelector((state) => state.categories)
    const [serverResponse, setServerResponse] = react.useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const [redirect,setRedirect] = react.useState(false)
    const [marketID,setID] = react.useState('')
    const [marketName,setName] = react.useState('')
    const [cvr,setCvr] = react.useState('')

    const marketClick = (i) => {
        // console.log(categories[i]._id)
        setID(categories[i]._id)
        setName(categories[i].name)
        setCvr(categories[i].image)
        // console.log(categories)
        setRedirect(true)
    }

    if(redirect)
    {
        history.push({
            pathname: '/results',
            id: marketID,
            name : marketName,
            cover : cvr
          });
    }

    return (
        <div>
            {/* { redirect ? (<Redirect push to="/results"/>) : null } */}
            <div style={{fontFamily: 'Roboto'}, {marginTop: '3rem', marginLeft: '8rem'}}>
            {/* <div className="mt-5 mr-5 ml-5" > */}
            <Row style={{gridRowGap: '2rem'}}>
                {  
                    categories.map((iarr, ind)=>{
                        return(
                            <div className="d-flex mt-4">
                            {
                            <div className="card m-auto border-0" style={{width: "20rem", padding: '2rem', cursor:'pointer'}} onClick={()=>marketClick(ind,ind)}>
                                    <img className="card-img" src={"http://localhost:8080/"+iarr.image} alt="loading..."></img>
                                    <div style={{backgroundColor: "#FFD100"}}><a className="btn btn-primary-outline-light" ><strong>{iarr.name}</strong></a></div>
                                    <div className="pt-1">{iarr.description}</div>
                            </div>

                            }
                            
                            </div>
                        )
                    })
                    // reply.map((iarr, ind)=>{
                    //     return(
                    //         <div className="d-flex mt-4">
                    //         {
                    //         <div className="card m-auto border-0" style={{width: "20rem", padding: '2rem', cursor:'pointer'}} onClick={()=>marketClick(reply[iarr]._id)}>
                    //                 <img className="card-img" src={reply[iarr].image} alt="loading..."></img>
                    //                 <button className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100"}}><strong>reply[iarr].name</strong></button>
                    //         </div>

                    //         }
                            
                    //         </div>
                    //     )
                    // })
                }
                </Row>
                         
            </div>
            <div  style={{fontFamily: 'Roboto'}, {margin: '4rem'}}>
                <div class="text-center font-weight-normal" style={{fontSize: '2.5vw'}}>Are you a Shop Owner?</div>
                <div class="text-center font-weight-normal" style={ {fontSize: '2.5vw'}}>Interested in expanding your Network?</div>
                <div class="d-flex justify-content-center" style={{padding: '1.5rem'}}>
                    {/* <button  className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100"}}><strong>JOIN US</strong></button> */}
                    <a href="/VendorSignUp" className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100"}}><strong>JOIN US</strong></a>
                </div>
                
                <div class="d-flex justify-content-center" style={{alignItems: 'center'}, {justifyContent: 'center'}, {margin: '3rem'}, {width: '18rem'}}>
                    {/* <div class="ml-auto">
                    <button className="btn btn-primary-outline-light">
                        <img  className="card-img" src="/img/partner.jpg" alt="loading..."></img>
                    </button>
                    <div>Partner with us and reach thousands of customers</div>
                    </div> */}

                    {/* <div class="mr-auto">
                    <button className="btn btn-primary-outline-light">
                        <img  className="card-img" src="/img/automate.jpg" alt="loading..."></img>
                    </button>
                    <div>Automate and organize your procedures</div>
                    </div>
                </div>
                <div className="table-points" style={{width: '16rem'}}>
                    <div>
                        <img src="/img/partner.jpg" alt="loading..."></img>
                        <h6>Partner with us and reach thousands of customers</h6>
                    </div> */}
                </div>
            </div> 
        </div>
    )

}

export default Markets;
