import react from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer.js'
import Navbar from './Navbar.js'

let searchResults = () =>{
    const arr = [[['k-1.png',3.2,140,'Gloria Jeans'],['k-2.png',4.0,32,'Pak'],['k-3.png',4.0,33,'Engl'],['k-4.png',4.0,76,'Pak']],[['k-5.png',5.0,89,'kal'],['k-6.png',2.0,5,'hjash']]]
    const [rst,setRst] = react.useState(arr)
    const [top,setTop] = react.useState("Cakes And Desserts")
    const [fst,setFst] = react.useState(false) // have to set to true

    if(fst)
    {
        const data = {}
        axios.post("http://localhost:3000/products",data) // api call, url to be chnaged
        .then(res => {
            setRst(res.data) // data needs to be rendered to be in right format as arr
            setFst(false)
        })
        .catch(err => console.log(err))
    }

    const shopClick = (i,j) =>{
        console.log(i,j)
    }

    return(
        <div style={{fontFamily: 'Roboto'}}>
            <Navbar />
            <div>
                <img src="/products/food.png" className="img-fluid mt-n3 w-100"/>
            </div>
            <div className="mt-5 mr-5 ml-5" >
                <div className="d-flex">
                    <div className="text-left h1 font-weight-normal">{top}</div>
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
            <div className="navbar navbar-default navbar-static-bottom navbar-fixed-bottom w-100">
                <Footer />
            </div>
        </div>
    )
}

export default searchResults;