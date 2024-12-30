
import { useState } from "react";
import axios from "axios"
import { useNavigate} from "react-router-dom";
const Addproduct=()=>{

    const navigate = useNavigate();

      const [pname, setPname] = useState('');
      const [prize, setPrize] = useState('');
      const [details, setDetails] = useState('');

const clickbtn=(e)=>{
    e.preventDefault();
// console.log("hello")


const product={pname,prize,details}
axios.post("http://localhost:3000/product/add",product)
.then((r)=>{
    console.log(r.data)
}
)
.catch((err)=>{
    console.log(err)
})

navigate('/show')


}



const change=(e)=>{

    console.log(e.target.value)
    setPname(e.target.value)
}

return(

<>
<h1>{prize}</h1>
<h1>{pname}</h1>
<h1>{details}</h1>

<form>
<div><label>product name</label>
 <input type="text" onChange={change} /></div>

<div><label>Price</label>
<input type="text" onChange={(e)=>setPrize(e.target.value)}/></div>

<div><label>Details</label>
<input type="text"  onChange={(e)=>setDetails(e.target.value)}/></div>


<button onClick={clickbtn}>submit</button>





</form>



</>





)

}
export default Addproduct;