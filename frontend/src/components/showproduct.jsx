import { useState,useEffect } from "react";
import axios from "axios"
import { useNavigate} from "react-router-dom";

const Showproduct=()=>{
    const [products, setProdutes] = useState([]);
    const navigate = useNavigate();
   
    useEffect(()=>{

    
        axios.get("http://localhost:3000/product/get")
        .then((res)=>{
            console.log(res.data.products)
            setProdutes(res.data.products)

        }
        )
        
    },[])



    const editrProduct=(id)=>{
navigate(`/edit/${id}`)

    }
  
    
    const deleteProduct=(id)=>{


        axios.delete(`http://localhost:3000/product/${id}`)
        .then((res)=>{
            console.log("successfull delete")
            window.location.reload();
        }
        )
        
    }
    


    return(
    
    <>

    <table>
<tr>
    <th>product name</th>
    <th>prize</th>
    <th>details</th>
</tr>

{products.map((x)=>(
    <tr key={x._id}>
    <td>{x.pname}</td>
    <td>{x.prize}</td>
    <td>{x.details}</td>
   <td> <button onClick={()=>deleteProduct(x._id)}>delete</button></td>
   <td> <button onClick={()=>editrProduct(x._id)}>edit</button></td>
    </tr>
))}


    </table>
 
    
    </>
    
    
    
    )
    
    }
    export default Showproduct;