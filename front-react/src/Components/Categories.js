import react from 'react';
import { Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './Categories.css';


let Markets = () => {

    const arr = [['fastfood.png','Fast Food Corner','Pizzas, Burgers, Pasta, etc.'],['pharmacies.png','Pharmacies','Medicines, Quipment, etc.'],['fruitsVeg.png','Fruits and Vegetables','Banana, Apple, Potato, Ginger, etc.'],['cosmetics.png','Cosmetics and Beauty','Makeup Kits, Ascessories, etc.'],['pets.png','Pet Shops','Pet food, ascessories, etc.'],['flower.png','Flower Shops','Bouquets, Lillies, Roses, etc.'],['nuts.png','Dry Fruits and Nuts','Peanuts, Cashew, Almonds, etc.'],['meat.png','Fresh Meat','Mutton, Chicken, Beef, etc'],['fish.png','Fish & Sea Food','Fish, Prawns, etc.'],['bakery.png','Bakery & Dairy Products','Milk, Butter, Bread, Eggs, Cereals, Oats, etc.']]
    const [opt, setOpt] = react.useState(arr)
    const [serverResponse, setServerResponse] = react.useState('')

    axios.get('http://jsonplaceholder.typicode.com/markets').then(res => {
      // console.log(res)
      const reply = JSON.parse(res)
      setServerResponse(reply)
    })

    const marketClick = (id) => {
        axios.get(`http://jsonplaceholder.typicode.com/markets/${id}`).then(res => {
        // console.log(res)
        const reply = JSON.parse(res)
        setServerResponse(reply.message)
        setToken(reply.token)
        setUserID(reply._id)
        })
    }

    return (
        <div>
            <div style={{fontFamily: 'Roboto'}, {marginTop: '3rem', marginLeft: '8rem'}}>
            {/* <div className="mt-5 mr-5 ml-5" > */}
            <Row style={{gridRowGap: '2rem'}}>
                {
                    // opt.map((iarr, ind)=>{
                    //     return(
                    //         <div className="d-flex mt-4">
                    //         {

                    //         <div className="card m-auto border-0" style={{width: "20rem", padding: '2rem', cursor:'pointer'}} onClick={()=>marketClick(ind,ind)}>
                    //                 <img className="card-img" src={"/markets"+arr[0][0]} alt="loading..."></img>
                    //                 <button className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100"}}><strong>{arr[0][1]}</strong></button>
                    //                 <div className="pt-1">{arr[0][2]}</div>
                    //         </div>

                    //         }
                            
                    //         </div>
                    //     )
                    // })
                    reply.map((iarr, ind)=>{
                        return(
                            <div className="d-flex mt-4">
                            {
                            <div className="card m-auto border-0" style={{width: "20rem", padding: '2rem', cursor:'pointer'}} onClick={()=>marketClick(reply[iarr]._id)}>
                                    <img className="card-img" src={reply[iarr].image} alt="loading..."></img>
                                    <button className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100"}}><strong>reply[iarr].name</strong></button>
                            </div>

                            }
                            
                            </div>
                        )
                    })
                }
                </Row>
                         
            </div>

            <div  style={{fontFamily: 'Roboto'}, {margin: '4.5rem'}}>
                <div class="text-center font-weight-normal" style={{fontSize: '2.5vw'}}>Are you a Shop Owner?</div>
                <div class="text-center font-weight-normal" style={ {fontSize: '2.5vw'}}>Interested in expanding your Network?</div>
                <div class="d-flex justify-content-center" style={{padding: '1.5rem'}}>
                    <button  className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100"}}><strong>JOIN US</strong></button>
                </div>

                <div class="d-flex justify-content-center" style={{display:'inline'}}>
                    <div class="pull-left" style={{width:'18rem', marginRight: '6rem'}}>
                        <img src="../../images/partner" alt="loading..."></img>
                        <h6>Partner with us and reach thousands of customers</h6>
                    </div>
                    <div class="pull-right" style={{width:'18rem'}}>
                        <img src="../../images/partner" alt="loading..."></img>
                        <h6>Automate and organize your procedures</h6>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Markets;
