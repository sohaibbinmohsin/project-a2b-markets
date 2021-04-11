import react from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer.js'
import Navbar from './Navbar.js'

let searchResults = () =>{
    const arr = [[['k-1.png',3.2,140,'Gloria Jeans'],['k-2.png',4.0,32,'Pak'],['k-3.png',4.0,33,'Engl'],['k-4.png',4.0,76,'Pak']],[['k-5.png',5.0,89,'kal'],['k-6.png',2.0,5,'hjash']]]
    const [rst,setRst] = react.useState(arr)
    const [name,setName] = react.useState("Cakes And Desserts")
    const [fst,setFst] = react.useState(true) // have to set to true
    const [cvr,setCvr] = react.useState('')
    const [id,setID] = react.useState('6072f45f7f68a634a500373c')

    if(fst)
    {
        axios.get("http://localhost:8000/markets/"+id) // api call, url to be chnaged
        .then(res => {
            setCvr(res.data.image)
            setName(res.data.name)
        })
        .catch(err => console.log(err))
    }

    const shopClick = (i,j) =>{
        console.log(i,j)
    }

    return(
        <div style={{fontFamily: 'Roboto'}}>
            <Navbar />
            <div className="mt-n3" style={{height: "450px",width:"100%",overflow:"hidden"}}>
                <img src={cvr} className="img-fluid w-100" style={{marginTop:"-15rem"}}/>
            </div>
            <div className="mt-5 mr-5 ml-5" style={{paddingBottom:"160px"}} >
                <div className="d-flex">
                    <div className="text-left h1 font-weight-normal">{name}</div>
                    <div className="ml-auto">
                        <div className=" h2">Search Bar</div>
                    </div>
                </div>
                {
                    rst.map((iarr,ind)=>{
                        return(
                            <div className="d-flex mt-4">
                            {
                                iarr.map((val,ind2)=>{
                                    return(
                                        <div className="card mt-5 mb-3 ml-5 mr-5 border-0" style={{width: "16rem",cursor:"pointer"}} onClick={()=>shopClick(ind,ind2)}>
                                            <div className="block p-1 mb-n5 text-center font-weight-bold" style={{backgroundColor:"#FFD100",height:"2rem",width:"11rem",zIndex:"10"}}>Flat 10% </div>
                                            <img className="card-img-top" src={"/products/"+val[0]} alt="loading.." />
                                            <div className="ml-auto d-flex" style={{marginTop: "-1rem"}}>
                                                <i className="fa fa-star border-0" style={{color:"orange"}}></i>
                                                <div className="pt-3"> <strong>{val[1]}</strong>/5 ({val[2]})</div>
                                            </div>
                                            <div class="text-center font-weight-bold" style={{marginTop: "-1rem"}}>{val[3]}</div>
                                        </div>
                                    )
                                })
                            }
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