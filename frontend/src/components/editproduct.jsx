
import { useState,useEffect } from "react";
import { useNavigate,useParams} from "react-router-dom";
import axios from "axios"

const Edit=()=>{
    const navigate = useNavigate();
    const {id}=useParams();

    const [pname, setPname] = useState('');
    const [prize, setPrize] = useState('');
    const [details, setDetails] = useState('');


    useEffect(()=>{

    
        axios.get(`http://localhost:3000/product/${id}`)
        .then((res)=>{
            console.log(res.data.product)
            // setProdutes(res.data.products)
            setPname(res.data.product.pname)
            setPrize(res.data.product.prize)
            setDetails(res.data.product.details)
        }
        )
    //[] not use not come array    
    },0)


   const  clickbtn=(e)=>{ 
          e.preventDefault();


          axios.get(`http://localhost:3000/product/${id}`)
          .then((res)=>{
              console.log("successfull edit")
             
          }
          )


     }
 

return(

<>
<h1>{prize}</h1>
<h1>{pname}</h1>
<h1>{details}</h1>

<form>
<div><label>product name</label>
 <input type="text" value={pname} onChange={(e)=>setPname(e.target.value)} /></div>

<div><label>Price</label>
<input type="text" value={prize} onChange={(e)=>setPrize(e.target.value)}/></div>

<div><label>Details</label>
<input type="text"  value={details} onChange={(e)=>setDetails(e.target.value)}/></div>


<button onClick={clickbtn}>edit</button>





</form>



</>


);



}
export default Edit;