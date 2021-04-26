import react from 'react';
import axios from 'axios'
// import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './footer.js'
import Navbar from './Navbar.js'
import {useHistory} from 'react-router-dom';

const UpdateMenu = () =>{

    const [vendor,setVendor] = react.useState('6072f7b6affa4f4627671480')
    const [name,setName] = react.useState('Burgur Lab')
    const [fst,setFst] = react.useState(true)
    const [illegal,setIllegal] = react.useState(false)
    const [prod,setProd] = react.useState({})

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    if(fst)
    {
        axios.get(`http://localhost:8080/api/vendor/products/${vendor}`)
        .then(res => {
            if(res.status == 200)
            {
                const data = {}
                let temp = []
                for(let i=0;i<res.data.product.length;i++)
                {
                    temp.push(res.data.product[i].section_name)
                }
                let unique = temp.filter(onlyUnique);
                
                let obj = {}
                for (const key of unique) {
                    obj[key] = [];
                }
                for(let i=0;i<res.data.product.length;i++)
                {
                    obj[res.data.product[i].section_name].push(res.data.product[i])
                }

                setProd(obj)
            }
        })
        .catch(err => setIllegal(true))
    }
    
    if(illegal)
    {
        return(
            <div className="h2 text-center font-weight-bold m-auto text-danger"> Not Allowed to perform this action </div>
        )
    }

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row mt-2 text-left font-weight-bold h2 ml-3">{name}</div>
            <div className="flex mt-2 text-center font-weight-bold h3 ml-3">Update Menu</div>
            <div className="ml-auto mr-auto" style={{paddingTop:"18rem"}}>
            {
                Object.keys(prod).map((val,ind)=>{
                    return(
                        <div>{val}</div>
                    )
                })
            }
            </div>
            <div className="footer footer-relative">
                <Footer />
            </div>
        </div>
    )
};

export default UpdateMenu;