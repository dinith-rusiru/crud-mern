import logo from './logo.svg';
import './App.css';
import Addprodut from './components/addproduct.jsx'
import Showprodut from './components/showproduct.jsx'
import Editproduct from './components/editproduct.jsx'
// import Home from './components/showproduct.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
//  <>
 


//  <Showprodut/>
//  <Addprodut/>
//  </>

<BrowserRouter>
<Routes>
{/* <Route path="/" element={<Home />}/> */}
<Route path="/add" element={<Addprodut />}/>
<Route path="/show" element={<Showprodut />}/>
<Route path="/edit/:id" element={<Editproduct />}/>


</Routes>

</BrowserRouter>



  );
}

export default App;
