import react from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer.js'
import Navbar from './Navbar.js'

let searchResults = (props) =>{
    const arr = {
        "Most Bought" : [[["kkk-1.png","Burgur",444,"tasty "],["kkk-2.png","Burgur",484,"tasty "],["kkk-3.png","Burgur",74,"tasty "]]],
        "Deals" : [[["kkk-1.png","Burgur",449,"tasty "],["kkk-1.png","Burgur",44,"tasty "],["kkk-1.png","Burgur",444,"tasty "]]],
        "Burgurs" : [[["kkk-1.png","Burgur",444,"tasty "],["kkk-1.png","Burgur",444,"tasty "],["kkk-1.png","Burgur",444,"tasty "],["kkk-1.png","Burgur",444,"tasty "]],[["kkk-1.png","Burgur",444,"tasty "],["kkk-1.png","Burgur",444,"tasty "],["kkk-1.png","Burgur",444,"tasty "],["kkk-1.png","Burgur",444,"tasty "]]]
    }

    const [cat,setCat] = react.useState(arr)
    const [name,setName] = react.useState("Burger Lab")
    const [fst,setFst] = react.useState(false) // have to set to true

    if(fst)
    {
        const data = {}
        axios.post("http://localhost:3000/products",data) // api call, url to be chnaged
        .then(res => {
            setCat(res.data)// data needs to rendered in right format
            setName("")
            setFst(false)
        })
        .catch(err => console.log(err))
    }

    const shopClick = (key,i,j) =>{
        console.log(key,i,j)
    }

    const keyClick = (key) =>{
        console.log(key)
    }

    return(
        <div style={{fontFamily: 'Roboto'}}>
            <Navbar />
            <div>
                <img src='./products/food.png' className="img-fluid mt-n3 w-100"/>
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
            <div className="d-inline ml-2 mr-2 w-100">
            {
                Object.keys(cat).map((arr1,ind1)=>{
                    return(
                        <div>
                            <div className="h4 text-left ml-5 font-weight-bold mt-3">{arr1}</div>
                        {
                            cat[arr1].map((iarr,iind)=>{
                                return(
                                    <div className="d-inline-flex p-auto  border shadow mt-3 ml-3 mr-3" >
                                    {
                                        iarr.map((jarr,jind)=>{
                                            return(
                                                <div className="card mt-3 mb-3 ml-5 mr-5 border-0" style={{width: "270px",cursor:"pointer"}} onClick={()=>shopClick(ind1,iind,jind)}>
                                                    <img className="card-img-top" src={"/products/"+jarr[0]} alt="loading.." />
                                                    <div class="text-left font-weight-bold">{jarr[1]}</div>
                                                    <div class="text-left font-weight-normal">{"PKR " + jarr[2]}</div>
                                                    <div class="text-left font-weight-normal">{jarr[3]}</div>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                )
                            })
                        }
                        </div>
                    )
                })
            }
            </div>
            <div className="navbar navbar-default navbar-static-bottom navbar-fixed-bottom">
                <Footer />
            </div>
        </div>
    )
}

export default searchResults;