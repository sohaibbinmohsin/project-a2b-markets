import react from 'react';
import { Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './Categories.css';


let Markets = () => {

    const arr = [['fastfood.png','Fast Food Corner','Pizzas, Burgers, Pasta, etc.'],['pharmacies.png','Pharmacies','Medicines, Quipment, etc.'],['fruitsVeg.png','Fruits and Vegetables','Banana, Apple, Potato, Ginger, etc.'],['cosmetics.png','Cosmetics and Beauty','Makeup Kits, Ascessories, etc.'],['pets.png','Pet Shops','Pet food, ascessories, etc.'],['flower.png','Flower Shops','Bouquets, Lillies, Roses, etc.'],['nuts.png','Dry Fruits and Nuts','Peanuts, Cashew, Almonds, etc.'],['meat.png','Fresh Meat','Mutton, Chicken, Beef, etc'],['fish.png','Fish & Sea Food','Fish, Prawns, etc.'],['bakery.png','Bakery & Dairy Products','Milk, Butter, Bread, Eggs, Cereals, Oats, etc.']]
    const [opt, setOpt] = react.useState(arr)

    const marketClick = (i,j) => {
        console.log(i,j)
    }

    return (
        <div>
            <div style={{fontFamily: 'Roboto'}, {marginTop: '3rem', marginLeft: '8rem'}}>
            {/* <div className="mt-5 mr-5 ml-5" > */}
            <Row style={{gridRowGap: '2rem'}}>
                {
                    opt.map((iarr, ind)=>{
                        return(
                            <div className="d-flex mt-4">
                            {

                            <div className="card m-auto border-0" style={{width: "20rem", padding: '2rem', cursor:'pointer'}} onClick={()=>marketClick(ind,ind)}>
                                    <img className="card-img" src={"/markets"+arr[0][0]} alt="loading..."></img>
                                    <button className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100"}}><strong>{arr[0][1]}</strong></button>
                                    <div className="pt-1">{arr[0][2]}</div>
                            </div>

                            }
                            
                            </div>
                        )
                    })
                }
                </Row>
                         
            </div>
            <div  style={{fontFamily: 'Roboto'}, {margin: '4rem'}}>
                <div class="text-center font-weight-normal" style={{fontSize: '2.5vw'}}>Are you a Shop Owner?</div>
                <div class="text-center font-weight-normal" style={ {fontSize: '2.5vw'}}>Interested in expanding your Network?</div>
                <div class="d-flex justify-content-center" style={{padding: '1.5rem'}}>
                    <button  className="btn btn-primary-outline-light" style={{backgroundColor: "#FFD100"}}><strong>JOIN US</strong></button>
                </div>
                
                <div class="d-flex justify-content-center" style={{alignItems: 'center'}, {justifyContent: 'center'}, {margin: '3rem'}, {width: '18rem'}}>
                    <div class="ml-auto">
                    <button className="btn btn-primary-outline-light">
                        <img  className="card-img" src="../../images/partner" alt="loading..."></img>
                    </button>
                    <div>Partner with us and reach thousands of customers</div>
                    </div>

                    <div class="mr-auto">
                    <button className="btn btn-primary-outline-light">
                        <img  className="card-img" src="../../images/automate" alt="loading..."></img>
                    </button>
                    <div>Automate and organize your procedures</div>
                    </div>

                </div>

                <div className="table-points" style={{width: '16rem'}}>
                    <div>
                        <img src="../../images/partner" alt="loading..."></img>
                        <h6>Partner with us and reach thousands of customers</h6>
                    </div>
                </div>
            </div> 
        </div>
    )

}

export default Markets;