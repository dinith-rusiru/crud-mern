const {Product,Employee}=require('../models/product.js');

const express= require('express');
const router=express.Router();





router.post('/addemp', async(req,res)=>{
    try{
    const{name,age,details}=req.body;
    const employee=await Employee.create({name,age,details});
    res.status(201).json({employee});
    }
    
    
    catch(err){
    
    res.status(400).json({error:'Server error'});
    
    }
    
    })



router.post('/add', async(req,res)=>{
try{
const{pname,prize,details}=req.body;
const product=await Product.create({pname,prize,details});
res.status(201).json({product});
}


catch(err){

res.status(400).json({error:'Server error'});

}

})

router.get('/get', async(req,res)=>{
try{
  const products=await Product.find()
  
  res.status(201).json({products});
}
catch(err){

res.status(400).json({error:err});   
}
}
)

router.get('/:id', async (req, res) => {
    try {
      
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({error: 'Product not found'});
        }
        
        res.status(200).json({product});
    }
    catch(err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});  
    }
});

router.delete(':id', async (req, res) => {
try{

    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message: 'Product deleted successfully'});
}
catch(err) {
    console.error(err);
    res.status(500).json({error: err});  
}


})



router.put('/:id', async (req, res) => {



    try{
        const{pname,prize,details}=req.body;
        const product=await Product.findByIdAndUpdate(req.params.id,
        {pname,prize,details},
        {new:true});
        
        res.status(201).json({product});
        }
        
        
        catch(err){
        
        res.status(400).json({error:'Server error'});
        
        }
}



)





module.exports=router



