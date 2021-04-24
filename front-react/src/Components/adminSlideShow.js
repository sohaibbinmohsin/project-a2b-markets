import react, { useState } from 'react';
import { Row } from 'react-bootstrap';
import img from '../images/slideShow1.png';

const SlideShow = () => {

    const arr = [[img, 'description'], ['img 2 address', 'description 2']]
    const[sld, setSld] = react.useState(arr)
    const [image, setImage] = useState([])
    const [desc, setDesc] = useState([])

    const addSlide = () => {
        setSld([...sld, {
            image: image,
            desc, desc
        }])
    }

    return (
        <div >
            <h3 class='text-center font-weight-bold' style={{padding:'3.5rem'}}>Update Slideshow</h3>
            <div style={{marginLeft:'auto', marginRight:'auto', border:'outset', padding:'1rem', width:'80%'}}>
                {
                    sld.map((iarr,ind)=>{
                        <div className="d-flex mt-4">
                            {
                            <div >
                                <div class="d-flex justify-content-center" >
                                    <img style={{width:'70%', height:'250px'}} src={arr[ind][0]} alt='loading...'></img>
                                    <button style={{float: 'right',width:'4rem', height:'3rem', padding:'3px', margin:'1rem', backgroundColor:'#FFD100', border:'hidden', borderRadius:'20px'}}>
                                        <i class="fa fa-trash fa-5x"></i>
                                    </button>
                                </div>
                                <h5 class="text-center font-weight-normal">{arr[ind][1]}</h5>
                            </div>
                            }

                        </div>

                    })
                }
                
                <div class="d-flex justify-content-center">
                    <button style={{ width:'4rem', height:'3rem', padding:'3px', margin:'1rem', backgroundColor:'#FFD100', border:'hidden', borderRadius:'20px'}} onChange={addSlide}><strong>+</strong></button>
                </div>
                    
                <h5 class="text-center font-weight-normal"><strong>Add new Slideshow</strong></h5>
            </div>
                
            <button style={{ marginTop:'2.5rem',display:'flex', marginLeft:'auto', marginRight:'auto', padding:'0.8rem', backgroundColor:'#FFD100', border:'hidden', borderRadius:'35px'}}>
                <strong>Save & Return</strong>
            </button>

        </div>
    )
}

export default SlideShow;